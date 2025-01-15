/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PaymentFailed = () => {
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get('transactionId');

    useEffect(() => {
        const updatePaymentStatus = async () => {
            if (transactionId) {
                try {
                    await axios.put(`https://foodeli-server-xi.vercel.app/fail-payment?transactionId=${transactionId}`);
                    console.log('Payment status updated to failed');
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
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                <div className="text-4xl text-red-500 mb-4">⚠️</div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Payment Failed</h1>
                <p className="text-gray-600 mb-6">
                    Unfortunately, your payment could not be processed. Please try again or contact support for help.
                </p>
                {transactionId && (
                    <p className="text-sm text-gray-500 mb-6">Transaction ID: {transactionId}</p>
                )}
                <Link
                    to="/retry-payment"
                    className="block w-full bg-green-500 text-white py-2 rounded-md font-bold mb-3 transition hover:bg-green-600"
                >
                    Retry Payment
                </Link>
                <Link
                    to="/"
                    className="block w-full bg-gray-800 text-white py-2 rounded-md font-bold transition hover:bg-gray-900"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default PaymentFailed;
