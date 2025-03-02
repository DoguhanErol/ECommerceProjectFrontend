import { useState, useEffect } from 'react';
import { getProductById } from '../services/ProductService';
import { Product } from '../models/Product';

const useFetchProductDetail = (id: string | undefined) => {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setIsLoading(true);
        setError(null);
        try {
          const response: Product = await getProductById(parseInt(id));
          setData(response);
        } catch (error) {
          setError('Product Detail Cant Reach');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  return { data, isLoading, error };
};

export default useFetchProductDetail;
