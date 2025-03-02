import { useParams } from 'react-router-dom';
import useFetchProductDetail from '../hooks/useFetchProductDetail'; // Custom hook'u import et
import LoadingComponent from '../components/modals/Loading';
import Error from '../components/modals/Error';
import ProductDetailCard from '../components/modals/ProductDetailCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams(); // URL'den id parametresini al
  const { data, isLoading, error } = useFetchProductDetail(id); // Custom hook'u kullan

  return (
    <div>
      {/* Durum kontrolü */}
      {isLoading ? (
        <LoadingComponent />
      ) : error ? (
        <Error message={error} />
      ) : data ? (
        <ProductDetailCard key={id} product={data} />
      ) : (
        <Error message={'!!!Product Couldn\'t Find!!!'} />
      )}
    </div>
  );
};

export default ProductDetailPage;
