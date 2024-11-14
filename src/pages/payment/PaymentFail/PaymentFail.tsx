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
                    // Send transactionId as a query parameter using a PUT request
                    await axios.put(`http://localhost:5000/fail-payment?transactionId=${transactionId}`);
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
                <div style={styles.icon}>⚠️</div>
                <h1 style={styles.title}>Payment Failed</h1>
                <p style={styles.message}>
                    Unfortunately, your payment could not be processed. Please try again or contact support for help.
                </p>
                {transactionId && (
                    <p style={styles.transaction}>Transaction ID: {transactionId}</p>
                )}
                <Link to="/retry-payment" style={styles.button}>
                    Retry Payment
                </Link>
                <Link to="/" style={{ ...styles.button, backgroundColor: '#333', marginTop: '10px' }}>
                    Go to Homepage
                </Link>
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
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        textAlign: 'center',
    },
    icon: {
        fontSize: '48px',
        color: '#d9534f',
        marginBottom: '20px',
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
    button: {
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#1CD15D',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    },
};

export default PaymentFailed;
