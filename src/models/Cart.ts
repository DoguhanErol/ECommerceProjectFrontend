export type Cart = {
  id: string; // Cart ID
  userId: string; // User ID (ForeignKey)
  createdAt: string; // Creation date in ISO format
  updatedAt: string; // Update date in ISO format
  totalAmount: string; // Total amount in string format
  cartItems: CartItem[]; // List of CartItems
};

export type CartItem = {
  id: string; // CartItem ID
  cartId: string; // Cart ID (ForeignKey)
  productId: string; // Product ID (ForeignKey)
  quantity: number; // Quantity of the product
  color: string; // Color of the product
  size: 'XS' | 'S' | 'M' | 'L' | 'XL'; // Size of the product
  addedAt: string; // Date the item was added to the cart in ISO format
  product: CartProduct; // Product details (optional, if you want to include product info)
};

export type CartProduct = {
  id: string;
  name: string;
  description: string | null;
  price: string; // Price as a string
  color: string;
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  category: number; // Category as a number
  image: string;
  updatedAt: string; // Updated at in ISO format
};
