// src/utils/cartTransform.ts

import { Cart } from '../models/Cart';

export const transformCartData = (data: any): Cart => {
    return {
        id: data.id,
        userId: data.user.toString(),
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        totalAmount: data.total_amount.toString(), // total_amount'ı totalAmount olarak ekleyin
        cartItems: data.cart_items.map((item: any) => ({
            id: item.id,
            cartId: item.cart_id,
            productId: item.product.id.toString(), // Product ID
            quantity: item.quantity,
            color: item.color,
            size: item.size,
            addedAt: item.added_at,
            product: {
                id: item.product.id,
                name: item.product.name,
                description: item.product.description,
                price: item.product.price,
                color: item.product.color,
                size: item.product.size,
                category: item.product.category,
                image: item.product.image,
                updatedAt: item.product.updated_at,
            },
        })),
    };
};
