import { Product, ProductForCart } from "../models/Product";

// Dönüştürme fonksiyonu
export const productTransformForCart = (product: Product, quantity: number): ProductForCart => {
    return {
        product_id: Number(product.id), // id'yi number tipine dönüştürüyoruz
        quantity: quantity, // Kullanıcıdan alınan miktar
        color: product.color, // Renk
        size: product.size, // Beden
    };
};
