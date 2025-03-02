import { Product } from './Product'; // Mevcut Product modelinizi içe aktarın

export interface OrderItem {
  id: number;           // OrderItem ID'si
  order: number;        // İlişkili Order ID'si
  product: Product;     // İlişkili Product nesnesi
  color: string;        // Ürün rengi
  size: string;         // Ürün boyutu
  quantity: number;     // Sipariş edilen miktar
  price: number;        // Sipariş edilen ürünün fiyatı
}

export interface Order {
  id: number;                     // Order ID'si
  user: number;                   // İlişkili User ID'si
  createdAt: string;              // Tarih, ISO formatında string
  updatedAt: string;              // Tarih, ISO formatında string
  status: 'preparing' | 'shipped' | 'completed'; // Durum seçenekleri
  totalAmount: number;            // Toplam tutar
  items: OrderItem[];             // Order ile ilişkili OrderItem'lar
}