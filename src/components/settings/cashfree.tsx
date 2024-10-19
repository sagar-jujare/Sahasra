import React, { useEffect, useState } from 'react';
import {load} from '@cashfreepayments/cashfree-js';
import { onGetSubscriptionPlan } from '@/actions/settings'
import { useUser } from '@clerk/nextjs';
import { v4 as uuidv4 } from 'uuid';
import { client } from '@/lib/prisma';
import { UpdateUserPlan } from '@/actions/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useChatContext } from '../../context/user-chat-context'; 
interface LoaderProps {
    loading: boolean;
}

interface CashfreeTokenResponse {
    [x: string]: any;
    paymentSessionId: string;
}

const Loader = ({ loading }: LoaderProps) => (loading ? <div>Loading...</div> : null);

const CashfreePayment = ({ payment }: { payment: string }) => {
    const { isModelOpen, setIsModelOpen } = useChatContext();
console.log("mode",isModelOpen)
    const [statusUpdate, setStatusUpdate] = useState<boolean>(false)
    const [cashfreeToken, setCashfreeToken] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [cashFreeOrderId,setCashFreeOrderId] = useState<string>('')
    
    const data = useSearchParams()
    console.log("hello this is the oriderid",data)
    const { user } = useUser();
    const router = useRouter()
    const generateOrderId = (): string => {
        return `ORDER_${uuidv4()}`;
      };

    const fetchCashfreeToken = async () => {
        try {
            const orderId = generateOrderId(); // Generate unique orderId for each transaction
                console.log('Generated Order ID:', orderId);
                setCashFreeOrderId(orderId);
            const response = await fetch('/api/cashfree', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    payment,
                    user,
                    orderId
                }),
            });

            const data: CashfreeTokenResponse = await response.json();
            console.log("data cashfree tokne", data)
            setCashfreeToken(data?.payment_session_id);

        } catch (error) {
            console.error('Error fetching Cashfree token:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (payment && user) {
            fetchCashfreeToken();
        }
    }, [payment, user]);

    useEffect(() => {
        const processPayment = async () => {
            if (cashfreeToken) {
                const cashfree = await load({ mode: 'sandbox' });
                const checkoutOptions = {
                    paymentSessionId: cashfreeToken,
                    returnUrl: `http://localhost:3000/dashboard`,
                    redirectTarget: "_modal" 
                };
                setIsModelOpen(false)
                cashfree.checkout(checkoutOptions).then(async (result:any) => {
                    if (result.error) {
                        // const plan = await onGetSubscriptionPlan();
                        // const updateUserPlan = await UpdateUserPlan({
                        //     payment:plan,
                        //     userId: user?.id,
                        //     // orderId: cashFreeOrderId,
                        // });
                        setIsModelOpen(true)
                        console.error('Payment error:', result.error.message);
                        alert(result.error.message); // Show error message
                    }
                    if (result.redirect) {
                        console.log('Redirecting for payment...');
                        setIsModelOpen(true)
                           
                       
                    }
                    if(result.paymentDetails){
                        // This will be called whenever the payment is completed irrespective of transaction status
                         //         // Update user plan on success
                         console.log("payment",result.paymentDetails)
                                const updateUserPlan = await UpdateUserPlan({
                                    payment,
                                    userId: user?.id,
                                    orderId: cashFreeOrderId,
                                });
                                if (updateUserPlan) {
                                    router.push('/dashboard'); // Redirect to dashboard
                                }
                                setIsModelOpen(true)
                        
                        console.log("Payment has been completed, Check for Payment Status");
                        console.log(result.paymentDetails.paymentMessage);
                    }
                    setIsModelOpen(true)
                    
                }).catch((error:any) => {
                    console.error('Error during checkout:', error);
                });
                console.log('hello this si trestsa:', cashfree);
            }
        };
        
        processPayment();
    }, [cashfreeToken]);

    // useEffect(() => {
    //     const processPayment = async () => {
    //         if (cashfreeToken) {
    //             const cashfree = await load({ mode: 'sandbox' });
    //             const paymentOptions = {
    //                 paymentSessionId: cashfreeToken,
    //                 returnUrl: `http://localhost:3000/dashboard`, // Update with your return URL
    //                 paymentMethod: 'UPI',
    //             };

    //             cashfree.pay(paymentOptions).then(async (result) => {
    //                 if (result.error) {
    //                     console.error('Payment error:', result.error.message);
    //                     alert(result.error.message); // Show error message
    //                 } else if (result.paymentDetails) {
    //                     console.log('Payment details:', result.paymentDetails);
    //                     if (result.paymentDetails.paymentStatus === 'SUCCESS') {
    //                         // Update user plan on success
    //                         const updateUserPlan = await UpdateUserPlan({
    //                             payment,
    //                             userId: user?.id,
    //                             orderId: cashFreeOrderId,
    //                         });
    //                         if (updateUserPlan) {
    //                             router.push('/dashboard'); // Redirect to dashboard
    //                         }
    //                     } else {
    //                         console.log('Payment failed:', result.paymentDetails);
    //                     }
    //                 }
    //             }).catch((error) => {
    //                 console.error('Error during payment:', error);
    //             });
    //         }
    //     };

    //     processPayment();
    // }, [cashfreeToken]);
    // user_2lufyRnobZ9IlkGLu00K17Ig02z
    const handleCheckPaymentStatus = async () => {
        console.log('payment',payment)
        console.log("cashFreeOrderId --------------- ")
        if(statusUpdate){
            
            setStatusUpdate(false)
        }
    }
    useEffect(() => {
        handleCheckPaymentStatus()
    }, [statusUpdate])
    return (
        <>
            {isLoading ? (
                <Loader loading={isLoading} />
            ) : (
                cashfreeToken && (
                    <div>
                        <h2>Complete your payment for the {payment} plan</h2>
                        <div id="cashfree-form"></div>
                    </div>
                )
            )}
        </>
    );
};

export default CashfreePayment;
