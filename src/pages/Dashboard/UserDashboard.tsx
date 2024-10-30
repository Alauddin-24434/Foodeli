// src/pages/Dashboard/UserDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserDashboard.module.css'; // Importing CSS Module

const UserDashboard: React.FC = () => {
    return (
        <div className={styles.userDashboard}>
            <h1>User Dashboard</h1>
            <div className={styles.dashboardMenu}>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/user/profile">View Profile</Link>
                    </li>
                    <li>
                        <Link to="/user/bookings">Manage Bookings</Link>
                    </li>
                    <li>
                        <Link to="/user/settings">Settings</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.dashboardContent}>
                <h2>Welcome, User!</h2>
                <p>This is your dashboard where you can manage your profile, bookings, and settings.</p>
                <div className={styles.userSection}>
                    <h3>Recent Activities</h3>
                    <p>Display recent activities or updates here.</p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
