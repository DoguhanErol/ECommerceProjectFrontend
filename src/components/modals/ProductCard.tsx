import React from "react";
import { Product } from "../../models/Product"; // Product tipini import ediyoruz
import { API_URL_MEDIA } from "../../config/authConfig";
import { Link } from "react-router-dom";
type Prop = {
  product: Product; // Product tipi prop olarak tanımlanıyor
};

const ProductCard: React.FC<Prop> = ({ product }) => {
  return (
    <div className="card card-compact bg-base-200 w-96 shadow-2xl opacity-95">
      <figure>
        <img
          src={API_URL_MEDIA +product.image} // Product prop'tan gelen image URL
          alt={product.name} // Ürün adı alt text olarak
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-mono text-neutral">{product.name}</h2> {/* Ürün adı */}
        <p className="text-lg text-accent font-bold stat-value ">${product.price}</p> {/* Ürün fiyatı */}
        <div className="card-actions justify-end">
            <Link to={'/products/' + product.id} className="btn btn-secondary">Details</Link>
            <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
