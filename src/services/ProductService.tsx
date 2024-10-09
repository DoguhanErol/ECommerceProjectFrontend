import axios from "axios";
import { Product } from "../models/Product"; // Product modelini içeren dosyayı import et
import { API_URL_PRODUCTS } from "../config/authConfig"; // Ürün API URL'ini ayarladığın yerden import et

export const getProductsByPage = async (page: number=1) => {
  try {
    const response = await axios.get<{ results: Product[]; count: number }>(`${API_URL_PRODUCTS}?page=${page}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching products:', error);
    throw error; // Hata durumunda hatayı fırlatalım
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await axios.get<{ results: Product }>(`${API_URL_PRODUCTS}/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log('Error fetching product by ID:', error);
    throw error; // Hata durumunda hatayı fırlatalım
  }
};

