// src/app/api/cashfree/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { client } from '@/lib/prisma';

// Define the types for incoming requests
interface PaymentRequest {
    payment: 'PRO' | 'ULTIMATE';
    user: {
        id: string;
        primaryEmailAddress: { emailAddress: string };
    };
    orderId: string;
}

// Helper function to get required environment variables
function getRequiredEnvVariable(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

export async function POST(request: NextRequest) {
    try {
        const { payment, user, orderId }: PaymentRequest = await request.json();
        console.log("from cashfree api--------------------------------", user);

        // Make the API request to Cashfree
        const response = await axios.post('https://sandbox.cashfree.com/pg/orders', {
            plan: payment,
            currency: "INR",
            order_amount: payment === "PRO" ? 4799 : 5999,
            order_currency: "INR",
            order_note: `Payment for ${payment} plan`,
            order_id: orderId,
            customer_details: {
                customer_id: user?.id,
                customer_name: "Ashish",
                customer_phone: "9878977897",
                customer_email: user?.primaryEmailAddress?.emailAddress,
            },
            order_meta: {
                return_url: getRequiredEnvVariable('NEXT_PUBLIC_REDIRECTION_URL'),
            },
        }, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': getRequiredEnvVariable('CASHFREE_CLIENT_ID'),
                'x-client-secret': getRequiredEnvVariable('CASHFREE_CLIENT_SECRET'),
            },
        });

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error fetching Cashfree token:', error);

        // Type assertion for error handling
        const errorMessage = (error as any).response?.data?.message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { payment, user, orderId }: PaymentRequest = await request.json();

        if (!orderId || !user || !payment) {
            return NextResponse.json({ message: 'Invalid data provided' }, { status: 400 });
        }

        let plan;
        let credits;

        if (payment === 'PRO') {
            plan = 'PRO';
            credits = 100;
        } else if (payment === 'ULTIMATE') {
            plan = 'ULTIMATE';
            credits = 300;
        } else {
            return NextResponse.json({ message: 'Invalid payment plan' }, { status: 400 });
        }

        // Call the Cashfree API to get order details
        const response = await fetch(`https://sandbox.cashfree.com/pg/orders/${orderId}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-version': '2023-08-01',
                'x-client-id': getRequiredEnvVariable('CASHFREE_CLIENT_ID'),
                'x-client-secret': getRequiredEnvVariable('CASHFREE_CLIENT_SECRET'),
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json({ message: errorData.message || 'Error fetching order details' }, { status: 500 });
        }

        const data = await response.json();
        console.log('Order details:', data);

        const updatedUser = await client.user.update({
            where: {
                clerkId: user?.id,
            },
            data: {
                stripeId: orderId,
                subscription: {
                    update: {
                        plan: plan as any,
                        credits: { increment: credits },
                    },
                },
            },
        });
        console.log("updatedUser", updatedUser);
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error('Error fetching Cashfree order details:', error);

        // Type assertion for error handling
        const errorMessage = (error as any).response?.data?.message || 'Internal Server Error';
        return NextResponse.json({ message: errorMessage }, { status: 500 });
    }
}
