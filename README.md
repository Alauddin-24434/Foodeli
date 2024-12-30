# Foodeli - Food Delivery App

**Foodeli** is a restaurant app or platform that allows users to order pizzas, burgers, pasta, and other food items. It is a food delivery system designed to provide a seamless experience for customers who wish to order food online, track their deliveries in real-time, and enjoy a variety of customization options. 

## Features

### 1. **User Registration and Login**
- **Registration:** New users can easily create an account.
- **Login:** Returning users can log in using email and password.
- **Social Login:** Users can log in via Google or Facebook for faster access.

### 2. **Food Menu**
- **Detailed Item Information:** Each food item will display the name, description, price, rating, and images.
- **Customization Options:** Users can customize food items like pizza size, extra toppings, or cheese.

### 3. **Online Order System**
- **Real-Time Ordering:** Users can select and place orders instantly.
- **Coupons/Discounts:** Users can apply promo codes to get discounts.

### 4. **Cart Feature**
- **Multiple Item Addition:** Users can add multiple items to their cart.
- **Item Management:** Users can add or remove food items, with updated total bill and VAT.

### 5. **Order Tracking**
- **Order Status:** Track real-time status (e.g., 'Preparing,' 'Out for Delivery,' 'Delivered').
- **Delivery Tracking:** Users can track the delivery location in real-time.

### 6. **Payment System**
- **Online Payments:** Supports mobile payment options like Bkash, Rocket, Nagad, and card payments.
- **Cash on Delivery:** Allows users to pay in cash upon delivery.

### 7. **User Profile Management**
- **Profile Updates:** Users can update their personal details (name, phone number, address).
- **Order History:** View and manage past orders.

### 8. **Featured and Popular Items**
- **Special Offers:** Display weekly offers or deals.
- **Popular Items:** Show items based on user ratings and reviews.

### 9. **Reviews and Ratings**
- **Food Reviews:** Users can leave ratings and reviews for food items.
- **Restaurant Rating:** Display the restaurant's overall rating.

### 10. **Delivery Time Estimation**
- **Estimated Delivery Time:** Provide users with an estimated delivery time.
- **Notification Alerts:** Notify users of any changes in the delivery time.

### 11. **Admin Panel**
- **Food Item Management:** Admin can add, update, or remove menu items.
- **Order Management:** Admin can update the status of orders.
- **User and Delivery Management:** Admin can manage users and delivery partners.

---

## Technologies Used

- **Frontend:** React, Redux, TailwindCSS, React Router
- **Backend:** Node.js, Express, MongoDB
- **Payment Gateway Integration:** Bkash, Rocket, Nagad, Stripe (for cards)
- **Real-Time Notifications:** Socket.io
- **Maps:** Google Maps API for branch locator

---

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/Alauddin-24434/Foodeli.git
    cd Foodeli
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables for API keys and payment gateways.
   
4. Run the app:

    ```bash
    npm run dev
    ```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
