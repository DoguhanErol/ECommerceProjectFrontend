import { useCallback, useEffect, useState } from "react";
import { createOrder } from "../services/OrderService";

export default function useCreateOrder() {
    const [createOrderResponse, setCreateOrderResponse] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleCreateOrder = useCallback(async () => {
        setIsLoading(true);
        setCreateOrderResponse('');
        try {
            const response = await createOrder();
            setCreateOrderResponse(response.message);
        } catch (error) {
            setError('Sipariş oluşturulurken bir hata oluştu.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Burada useEffect'i kaldırıyoruz, çünkü sipariş oluşturma işlemi kullanıcı etkileşimi ile tetiklenmeli
    return { createOrderResponse, isLoading, error, handleCreateOrder };
}
