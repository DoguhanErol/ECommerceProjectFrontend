import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/ProductService';
import LoadingComponent from '../components/modals/Loading';
import Error from '../components/modals/Error';
import ProductDetailCard from '../components/modals/ProductDetailCard';

const ProductDetailPage:React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await getProductById(parseInt(id));
          setData(response); // <--- Change this line
        } catch (error) {
          setError('Product Detail Cant Reach');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);
  
  
  

  return (
    <div >
      //Situations
      {isLoading ? (
        <LoadingComponent />
      ) : error ? (
        <Error message={error} />
      ) : data ? (
      //Data
        <ProductDetailCard key={id} product={data} />
      ): (
      //Product Doesnt Exist
        <Error message={'!!!Product Coudnt Find!!!'} />
      )}
    </div>
  );
};

export default ProductDetailPage;
