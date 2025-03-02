import { useEffect, useState, useCallback } from "react";
import { getCart } from "../services/CartService";
import { Cart } from "../models/Cart";
import { transformCartData } from "../utils/cartTransform";
//cart is buggy fix that
export default function useFetchCartList() {
    const [cartData, setCartData] = useState<Cart>(); // Başlangıçta null
    const [cartIsLoading, setCartIsLoading] = useState<boolean>(false);
    const [cartError, setCartError] = useState<string | null>(null);

    const handleFetchData = useCallback(async () => {
        setCartIsLoading(true);
        setCartError(null);
        try {
            const cartDataFromApi = await getCart();
            const cartData: Cart = transformCartData(cartDataFromApi); // Dönüştür
            console.log('cart:', cartData);
            setCartData(cartData);
        } catch {
            setCartError('Cart Cant Reach');
        } finally {
            setCartIsLoading(false);
        }
  },[]);

    useEffect(() => {
        handleFetchData();
    }, [handleFetchData]);

    return { cartData, cartIsLoading, cartError, refetch:handleFetchData };
}
