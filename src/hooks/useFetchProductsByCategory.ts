import { useState, useEffect } from "react";
import { Product } from "../models/Product";
import { getProductsByCategory } from "../services/ProductService";

const useFetchProductsByCategory = (categoryName: string | undefined, page: number) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>(''); // Hata durumu için state
  const [totalPages, setTotalPages] = useState<number>(0); // Toplam sayfa sayısı için state

  useEffect(() => {
    const fetchData = async () => {
      if (categoryName) {
        setLoading(true);
        try {
          const response = await getProductsByCategory(categoryName, page);
          setData(response.results);
          setTotalPages(Math.ceil(response.count / 2)); // Toplam sayfa sayısını ayarla
        } catch (e) {
          setError('!!!Error Fetching Products !!! ' + 'Error Message:" ' + e + ' "');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [categoryName, page]);

  return { data, loading, error, totalPages };
};

export default useFetchProductsByCategory;
