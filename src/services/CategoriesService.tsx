import axios from "axios";
import { API_URL_CATEGORIES } from "../config/authConfig";
import { Category } from "../models/Product";

export const getAllCategories = async () => {
    try {
      const response = await axios.get<{ results: Category[], length:number }>(`${API_URL_CATEGORIES}`);
      return response.data;
    } catch (error) {
      console.log('Error fetching categories:', error);
      throw error; // Hata durumunda hatayı fırlatalım
    }
  };