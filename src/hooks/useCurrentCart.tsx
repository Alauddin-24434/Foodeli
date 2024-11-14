import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


export const useCurrentCart = () => {
    // Get the cart items from the state with proper typing
    return useSelector((state: RootState) => state.cart.items);
};
