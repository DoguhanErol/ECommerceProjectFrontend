import { API_URL_MEDIA } from "../../config/authConfig";
import { Product } from "../../models/Product";
import bg_image from '../../assets/bg_2.webp'
import { Link } from "react-router-dom";

type Prop = {
    product: Product; // Product tipi prop olarak tanımlanıyor
  };
const ProductDetailCard:React.FC<Prop> = ( { product }) => {
    console.log(product.image)
  return (
    <>
    <div className="hero bg-base-200 min-h-screen bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
        <div className="hero-content flex-col lg:flex-row bg-base-200 rounded-lg shadow-2xl">
          <img
            src={ API_URL_MEDIA + product.image}
            className="max-w-6xl max-h-full rounded-lg shadow-2xl" />
          <div className="card bg-base-100   bg-transparent p-5 h-auto w-auto ">
            <div className="card-body">
            <h1 className="text-5xl font-bold card-title">{product.name}</h1>
            <p className="text-3xl text-accent font-bold stat-value ">${product.price}</p> {/* Ürün fiyatı */}
            <p className="text-lg stat-desc text-neutral">Color: {product.color}</p> {/* Ürün rengi */}
            <p className="text-lg stat-desc text-neutral">Size: <span className="stat-desc text-primary text-sm">{product.size}</span></p> {/* Ürün bedeni */}
            <p className="text-lg stat-desc  text-neutral">{product.description}</p> {/* Ürün açıklaması */}
            <button className="btn btn-primary">Add To Cart</button>
            <Link to={"/products"} className="btn btn-secondary">Back To Products</Link>

            </div>

          </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetailCard