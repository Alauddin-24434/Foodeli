// src/pages/ErrorPage.tsx
import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Oops!</h1>
            <h2>Something went wrong.</h2>
            <p>We're sorry, but the page you are looking for does not exist or there was an error processing your request.</p>
            <a href="/">Go back to Home</a>
        </div>
    );
};

export default ErrorPage;
