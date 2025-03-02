import { useEffect, useState } from 'react';
import { Category } from '../models/Product';
import { getAllCategories } from '../services/CategoriesService';

interface UseFetchCategoriesResult {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const useFetchCategories = (): UseFetchCategoriesResult => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await getAllCategories();
        console.log(response);
        setCategories(response as unknown as Category[]);
      } catch (err) {
        setError(`Error fetching categories: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, loading, error };
};

export default useFetchCategories;
