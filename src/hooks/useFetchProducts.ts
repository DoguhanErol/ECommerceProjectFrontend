import { useCallback, useEffect, useState } from "react";
import { Product } from "../models/Product";
import { getProductsByPage } from "../services/ProductService";

export default function useFetchProducts(page: number) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);

    const handleFetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getProductsByPage(page);
            setProducts(response.results);
            setTotalPages(Math.ceil(response.count / 2)); // Sayfa sayısını ayarla
        } catch (e) {
            setError('!!!Error Fetching Products !!! ' + 'Error Message:" ' + e + ' "');
        } finally {
            setIsLoading(false);
        }
    }, [page]); // page değiştiğinde verileri yeniden çek

    useEffect(() => {
        handleFetchData();
    }, [handleFetchData]);

    return { products, isLoading, error, totalPages };
}
