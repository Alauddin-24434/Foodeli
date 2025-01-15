/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { RiHome4Line, RiShoppingCart2Line } from 'react-icons/ri';

const PaymentCancel = () => {
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get('transactionId');

    useEffect(() => {
        const updatePaymentStatus = async () => {
            if (transactionId) {
                try {
                    await axios.put(`https://foodeli-server-xi.vercel.app/cancel-payment?transactionId=${transactionId}`);
                    console.log('Payment status updated to canceled');
                } catch (error: any) {
                    console.error('Failed to update payment status:', error.response?.data || error.message);
                }
            } else {
                console.error('No transaction ID found in URL');
            }
        };

        updatePaymentStatus();
    }, [transactionId]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
            <div className="bg-white border border-red-600 shadow-lg rounded-lg p-8 max-w-lg text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Payment Cancelled</h1>
                <p className="text-gray-600 mb-6">
                    Your payment was canceled. If this was a mistake, please try again or contact support.
                </p>

                <div className="flex gap-4">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md transition-colors hover:bg-red-700 w-1/2"
                    >
                        <RiHome4Line className="text-xl" />
                        Go to Home
                    </Link>
                    <Link
                        to="/food-shop"
                        className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-md transition-colors hover:bg-yellow-500 w-1/2"
                    >
                        <RiShoppingCart2Line className="text-xl" />
                        Go to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
