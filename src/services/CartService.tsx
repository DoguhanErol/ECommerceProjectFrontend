
import axios from "axios";
import { API_URL_CART } from "../config/authConfig";
import { ProductForCart } from "../models/Product";


export const getCart = async () => {
    try {
      const response = await axios.get<any>(`${API_URL_CART}`+'list/');
      console.log('In Service:' ,response);
      return response.data;
    } catch (error) {
      console.log('Error fetching cart:', error);
      throw error; // Hata durumunda hatayı fırlatalım
    }
  };


  export const postItemToCart = async (product:ProductForCart) => {
    try {
      const response = await axios.post<boolean>(API_URL_CART +'add/', product);
      console.log('In Service:' ,response);
      return response.data;
    } catch (error) {
      console.log('Error adding product to cart:', error);
      throw error; // Hata durumunda hatayı fırlatalım
    }
  };