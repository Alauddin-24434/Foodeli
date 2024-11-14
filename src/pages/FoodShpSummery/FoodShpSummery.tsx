import Container from "../../components/shared/container/Container";
import { useCurrentCart } from "../../hooks/useCurrentCart";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/features/cart/cartSlice";
import { useAuthenticateUser } from "../../hooks/useAuthenticateUser";
import { useState } from "react";
import { useOrderInitiateMutation } from "../../redux/features/ItemOrder/itemOrder";

const FoodShpSummery = () => {
    const [orderInitiate]=useOrderInitiateMutation();
    const dispatch = useDispatch();
    const cartItems = useCurrentCart();
    const user = useAuthenticateUser();

    // State for address and phone inputs and errors
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({ address: false, phone: false,  });

    // Calculate subtotal
    const subtotal = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
    const total = subtotal;

    const handleRemoveItem = (itemId: string) => {
        dispatch(removeFromCart({ userId: user?._id, productId: itemId }));
    };

    const handleIncreaseQuantity = (itemId: string) => {
        dispatch(increaseQuantity({ userId: user?._id, productId: itemId }));
    };

    const handleDecreaseQuantity = (itemId: string) => {
        dispatch(decreaseQuantity({ userId: user?._id, productId: itemId }));
    };

    const handleCheckout = async () => {
        // Check if inputs are empty and set errors
        const newErrors = {
            address: !address,
            phone: !phone,
        };
        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error)) {
            return; // Stop if there are any validation errors
        }

        try {
            const paymentData = {
                customerEmail: user?.email,
                customerId: user?._id,
                customerName: user?.name,
                items: cartItems,
                address,
                phone,
            };
            const response = await orderInitiate(paymentData).unwrap();
            console.log(response)

            if (response?.data?.result) {
                console.log(response)
                // Redirect or handle success case here
                window.location.href =response?.data?.payment_url; // Change URL to your confirmation page
            }
        } catch (error) {
            console.error("Order initiation failed:", error);
        }
    };

    // Clear the error when the user types in the input field
    const handleInputChange = (field: 'address' | 'phone', value: string) => {
        if (field === 'address') {
            setAddress(value);
            setErrors(prevErrors => ({ ...prevErrors, address: false }));
        } else if (field === 'phone') {
            setPhone(value);
            setErrors(prevErrors => ({ ...prevErrors, phone: false }));
        }
    };

    return (
        <Container>
            <div className="font-sans bg-white mt-20">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="md:col-span-2 space-y-4">
                        {cartItems?.map(item => (
                            <div key={item._id} className="grid grid-cols-3 items-start gap-4">
                                <div className="col-span-2 flex items-start gap-4">
                                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                                        <img src={item?.thumbnailImage || 'https://readymadeui.com/images/product14.webp'} className="w-full h-full object-contain" alt={item?.name} />
                                    </div>

                                    <div className="flex flex-col">
                                        <h3 className="text-base font-bold text-gray-800">{item?.name}</h3>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveItem(item._id)}
                                            className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                                        >
                                            REMOVE
                                        </button>
                                    </div>
                                </div>

                                <div className="ml-auto">
                                    <h4 className="text-lg max-sm:text-base font-bold text-gray-800">${item.price}</h4>

                                    <button type="button" className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                        <span onClick={() => handleDecreaseQuantity(item._id)}>-</span>
                                        <span className="mx-3 font-bold">{item.quantity}</span>
                                        <span onClick={() => handleIncreaseQuantity(item._id)}>+</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        <hr className="border-gray-300" />
                    </div>

                    <div className="bg-gray-100 rounded-md p-4 h-max">
                        <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>

                        <ul className="text-gray-800 mt-6 space-y-3">
                            <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${subtotal.toFixed(2)}</span></li>
                            <hr className="border-gray-300" />
                            <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${total.toFixed(2)}</span></li>
                        </ul>

                        {/* Input fields for Address and Phone */}
                        <div className="mt-6 space-y-3">
                            <label className="block text-gray-800 text-sm">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                className={`w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter your address"
                            />
                            {errors.address && <p className="text-red-500 text-xs">Address is required</p>}
                        </div>

                        <div className="mt-4 space-y-3">
                            <label className="block text-gray-800 text-sm">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                placeholder="Enter your phone number"
                            />
                            {errors.phone && <p className="text-red-500 text-xs">Phone number is required</p>}
                        </div>

                        <div className="mt-6 space-y-3">
                            <button onClick={handleCheckout} type="button" className="text-sm px-4 py-2 bg-gray-800 text-white rounded-md w-full">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FoodShpSummery;
