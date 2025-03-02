import { useCallback, useState } from "react";
import { postItemToCart } from '../services/CartService'; // Servisi import ediyoruz
import { Product, ProductForCart } from "../models/Product"; // Gerekli modelleri import ediyoruz
import { productTransformForCart } from "../utils/productTransformForCart"; // Dönüştürme fonksiyonunu import ediyoruz

const useAddProductToCart = async (product: Product, quantity: number = 1) => {
  const [isProductAddedCart , setIsProductAddedCart] = useState<boolean>(false) 
        try {
            // Ürünü sepete eklemek için dönüşüm yapıyoruz
            const productDataForCart: ProductForCart = productTransformForCart(product, quantity);
            const response = await postItemToCart(productDataForCart); // Servisi çağırıyoruz
            setIsProductAddedCart(response.valueOf())
        } catch (error) {
            console.log(error); // Hata detaylarını konsola yazdırıyoruz
        }finally{
          if (isProductAddedCart) {
            return 'Product added to cart.'
          }else{
            return 'Failed!!!'
          }
        }

};

export default useAddProductToCart;
