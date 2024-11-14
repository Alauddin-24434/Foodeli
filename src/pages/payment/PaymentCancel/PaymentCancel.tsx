import React, { useEffect } from 'react';
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
                    // Send transactionId as a query parameter using a PUT request
                    await axios.put(`http://localhost:5000/cancel-payment?transactionId=${transactionId}`);
                    console.log('Payment status updated to canceled');
                } catch (error) {
                    console.error('Failed to update payment status:', error.response?.data || error.message);
                }
            } else {
                console.error('No transaction ID found in URL');
            }
        };

        updatePaymentStatus();
    }, [transactionId]);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Payment Cancelled</h1>
                <p style={styles.message}>
                    Your payment was canceled. If this was a mistake, please try again or contact support.
                </p>
                
                <div style={styles.buttonContainer}>
                    <Link to="/" style={styles.button}>
                    <span className='flex items-center gap-2'><RiHome4Line className='text-xl'/>Go to Home</span>
                    </Link>
                    <Link to="/food-shop" style={{ ...styles.button, ...styles.checkoutButton }}>
                        <span className='flex items-center gap-2 text-black'><RiShoppingCart2Line className='text-xl'/>Go to Checkout</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Inline CSS styles for improved design
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '20px',
    },
    card: {
        border: "1px solid #EB0029",
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        textAlign: 'center',
    },
    title: {
        fontSize: '28px',
        color: '#333',
        marginBottom: '20px',
        fontWeight: '600',
    },
    message: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '20px',
    },
    transaction: {
        fontSize: '14px',
        color: '#777',
        marginBottom: '30px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    button: {
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#EB0029',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
        flex: '1',
        margin: '0 5px',
    },
    checkoutButton: {
        backgroundColor: '#F2C94C', // Different color for the checkout button
    },
};

export default PaymentCancel;
