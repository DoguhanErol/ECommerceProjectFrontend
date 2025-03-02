import { useState } from 'react';
import ProductCard from '../components/modals/ProductCard';
import useFetchProducts from '../hooks/useFetchProducts'; // Kancayı içe aktar
import Loading from '../components/modals/Loading';
import Error from '../components/modals/Error';
import bg_image from '../assets/bg_2.webp';

const ProductsPage: React.FC = () => {
    const [page, setPage] = useState<number>(1); 
    const { products, isLoading, error, totalPages } = useFetchProducts(page); // Kancayı kullan

    // Page change conditions
    const handleNextPage = () => setPage((prevPage) => prevPage + 1);
    const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

    return (
        <div className="products-page bg-cover min-h-screen" style={{ backgroundImage: `url(${bg_image})` }}>
            <h2 className='flex w-full justify-end text-xl text-pretty font-mono'>
                <span className="bg-base-100 bg-opacity-70 rounded-lg m-1 p-2">Category: <span className='text-blue-700'>All</span></span>
            </h2>
            {/* Durumlar */}
            {isLoading ? (
                <Loading />
            ) : error ? (
                <Error message={error} />
            ) : (
                <>
                    {/* Veri */}
                    <div className="flex justify-center gap-4 flex-wrap p-5">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {/* Sayfalama */}
                    <div className="join flex justify-center py-1 mt-4">
                        <button className='join-item btn' onClick={handlePreviousPage} disabled={page === 1}>
                            «
                        </button>
                        <span className="join-item btn">{page}</span>
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
