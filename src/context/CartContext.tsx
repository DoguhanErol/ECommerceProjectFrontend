import { createContext, useContext } from "react";
import useFetchCartList from "../hooks/useFetchCartList";
import { Cart } from "../models/Cart";

interface CartContextType {
  cartData?: Cart;
  cartIsLoading: boolean;
  cartError: string | null;
  refetch: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { cartData, cartIsLoading, cartError, refetch } = useFetchCartList();

  return (
    <CartContext.Provider value={{ cartData, cartIsLoading, cartError, refetch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
