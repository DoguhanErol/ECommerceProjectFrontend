import { useEffect, useState } from 'react';
import ProductCard from '../components/modals/ProductCard';
import { getProductsByPage } from '../services/ProductService';
import { Product } from '../models/Product'; 
import Loading from '../components/modals/Loading';
import Error from '../components/modals/Error'; // Import the ErrorComponent
import bg_image from '../assets/bg_2.webp'

const ProductsPage:React.FC = () => {
  const [data, setData] = useState<Product[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [page, setPage] = useState<number>(1); 
  const [error, setError] = useState<string>(''); // Add an error state
  const [totalPages, setTotalPages] = useState<number>(0); // Add a state for total pages

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await getProductsByPage(page);
        setData(response.results); 
        setTotalPages(Math.ceil(response.count/2)); // Set the total number of pages
      } catch (e) {
        setError('!!!Error Fetching Products !!! '+ 'Error Message:" '+ e + ' "' ); // Set the error message
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [page]); 

  // Sayfa değiştirme fonksiyonları
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="products-page bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
      {loading ? (
        <Loading />
      ) : error ? ( // Check if there's an error
        <Error message={error} /> // Display the error component
      ) : (
        <>
          <div className="flex justify-center gap-4 flex-wrap p-5">
            {data.map((product, index) => (
              <ProductCard key={index} product={product} /> 
            ))}
          </div>
          <div className="join flex justify-center py-1 mt-4">
            <button className='join-item btn' onClick={handlePreviousPage} disabled={page === 1}>
            «
            </button>
            <span  className="join-item btn "> {page}</span>
            <button className='join-item btn' onClick={handleNextPage} disabled={page === totalPages}>
            »
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsPage;
