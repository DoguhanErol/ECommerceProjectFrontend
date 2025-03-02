import React, { useState } from "react";
import { ProductForCart, Product } from "../../models/Product";
import { API_URL_MEDIA } from "../../config/authConfig";
import { Link } from "react-router-dom";
import { postItemToCart } from "../../services/CartService";
import { productTransformForCart } from "../../utils/productTransformForCart";
import SuccessAlert from "../ui/SuccessAlert";
import FailedAlert from "../ui/FailedAlert";
import { useCart } from "../../context/CartContext";

type Prop = {
  product: Product; // Product tipi prop olarak tanımlanıyor
};

const ProductCard: React.FC<Prop> = ({ product }) => {
  const [message, setMessage] = useState<string | null>(null); // Mesaj durumu için state
  const [isSuccess, setIsSuccess]= useState<boolean>(false); // Mesaj durumu için state
  const { refetch } = useCart();

  const handleAddToCart = async () => {
    try {
      const serverResponse: boolean = await postItemToCart(productTransformForCart(product, 1));
      
      if (serverResponse) {
        setMessage("Product added to cart.");
        setIsSuccess(true);
        refetch();

      } else {
        setMessage("Failed!");
        setIsSuccess(false);
      }
  
      // Mesajı 2 saniye sonra temizle
      setTimeout(() => {
        setMessage(null); // Mesajı sıfırla
        setIsSuccess(false); // Başarı durumunu sıfırla
      }, 2000);
  
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setMessage("Error occurred while adding the product to the cart.");
  
      // Mesajı 2 saniye sonra temizle
      setTimeout(() => {
        setMessage(null); // Mesajı sıfırla
      }, 2000);
    }
  };
  

  return (
    <>
    {message && isSuccess ?(
      <SuccessAlert message={message} />
    ): message && !isSuccess ? (
      <FailedAlert message={message} />
    ):(
      <></>
    )}
    <div className="card card-compact bg-base-200 w-96 shadow-2xl opacity-95">
      <figure>
        <img
          src={API_URL_MEDIA + product.image} // Product prop'tan gelen image URL
          alt={product.name} // Ürün adı alt text olarak
          className="max-h-80"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-mono text-neutral">{product.name}</h2> {/* Ürün adı */}
        <p className="text-lg text-accent font-bold stat-value ">${product.price}</p> {/* Ürün fiyatı */}
        <div className="card-actions justify-end">
          <Link to={'/products/' + product.id} className="btn btn-secondary">Details</Link>
          <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
