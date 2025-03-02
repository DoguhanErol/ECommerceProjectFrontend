import { API_URL_MEDIA } from "../../config/authConfig";
import { Product } from "../../models/Product";
import bg_image from '../../assets/bg_2.webp'
import { Link } from "react-router-dom";
import { postItemToCart } from "../../services/CartService";
import { useState } from "react";
import { productTransformForCart } from "../../utils/productTransformForCart";
import SuccessAlert from "../ui/SuccessAlert";
import FailedAlert from "../ui/FailedAlert";
import { useCart } from "../../context/CartContext";

type Prop = {
    product: Product; // Product tipi prop olarak tanımlanıyor
  };
const ProductDetailCard:React.FC<Prop> = ( { product }) => {

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
    <div className="hero bg-base-200 min-h-screen bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
        <div className="hero-content flex-col lg:flex-row bg-base-200 rounded-lg shadow-2xl">
          <img
            src={ API_URL_MEDIA + product.image}
            className=" max-h-[30rem] rounded-lg shadow-2xl" />
          <div className="card bg-base-100   bg-transparent p-5 h-auto w-auto ">
            <div className="card-body">
            <h1 className="text-5xl font-bold card-title">{product.name}</h1>
            <p className="text-3xl text-accent font-bold stat-value ">${product.price}</p> {/* Ürün fiyatı */}
            <p className="text-lg stat-desc text-neutral">Color: {product.color}</p> {/* Ürün rengi */}
            <p className="text-lg stat-desc text-neutral">Size: <span className="stat-desc text-primary text-sm">{product.size}</span></p> {/* Ürün bedeni */}
            <p className="text-lg stat-desc  text-neutral">{product.description}</p> {/* Ürün açıklaması */}
            <button onClick={handleAddToCart} className="btn btn-primary">Add To Cart</button>
            <Link to={"/products"} className="btn btn-secondary">Back To Products</Link>

            </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetailCard