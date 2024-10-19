'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registered = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })

    if (registered) {
      return { status: 200, user: registered }
    }
  } catch (error) {
    return { status: 400 }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) redirectToSignIn()
  else {
    try {
      const authenticated = await client.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          fullname: true,
          id: true,
          type: true,
        },
      })
      if (authenticated) {
        const domains = await onGetAllAccountDomains()
        return { status: 200, user: authenticated, domain: domains?.domains }
      }
    } catch (error) {
      return { status: 400 }
    }
  }
}



export async function UpdateUserPlan({ payment, userId, orderId }:any) {
  try {
      console.log("orderId --------")
      // Define the plan and credits based on payment plan
      let plan;
      let credits;

      if (payment === 'PRO') {
          plan = 'PRO';
          credits = 100;  // Set specific credits for PRO plan
      } else if (payment === 'ULTIMATE') {
          plan = 'ULTIMATE';
          credits = 300; // Set specific credits for ULTIMATE plan
      } else {
          throw new Error('Invalid payment plan');
      }
      console.log("orderId --------")
      // Update the user's subscription and stripeId in the database
      const updatedUser = await client.user.update({
          where: {
              clerkId: userId, // Assuming you're using clerkId to identify the user
          },
          data: {
              // stripeId: orderId, // Assign the orderId to the stripeId
              subscription: {
                  update: {
                      plan: plan as any,  // Update to the selected plan (PRO or ULTIMATE)
                      credits: { increment: credits },  // Add the appropriate number of credits
                  },
              },
          },
      });

      return updatedUser;
  } catch (error:any) {
      console.error('Error updating subscription:', error);
      return { error: error.message };
  }
}
