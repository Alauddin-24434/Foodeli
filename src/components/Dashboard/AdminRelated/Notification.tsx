import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000"); // Replace with your server URL

function Notification() {
    const [notifications, setNotifications] = useState([]); // Store multiple notifications
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state



    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch("http://localhost:5000/notifications");
                const data = await response.json();
                
                if (data.success) {
                    setNotifications(data.notifications); // Set notifications from the response
                } else {
                    setError("Failed to fetch notifications.");
                }
            } catch (err) {
                console.error("Error fetching notifications:", err);
                setError("An error occurred while fetching notifications.");
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchNotifications(); // Call the function to fetch notifications

        // Listen for real-time notifications
        socket.on("adminNotification", (message) => {
            setNotifications((prevNotifications) => [
                ...prevNotifications,
                { id: Date.now(), message },
            ]);
        });

        // Clean up on component unmount
        return () => {
            socket.off("adminNotification");
        };
    }, []);
    console.log(notifications)
    return (
        <div className="App">
            <h1>Admin Notifications</h1>
            {loading ? (
                <p>Loading notifications...</p>
            ) : error ? (
                <p>{error}</p>
            ) : notifications.length > 0 ? (
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification._id}>{notification.message}</li> // Assuming notifications have an _id property
                    ))}
                </ul>
            ) : (
                <p>No notifications yet.</p>
            )}
        </div>
    );
}

export default Notification;
