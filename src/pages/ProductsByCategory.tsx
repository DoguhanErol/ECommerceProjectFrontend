import { useParams } from "react-router-dom";
import useFetchProductsByCategory from "../hooks/useFetchProductsByCategory"; // Custom hook'u import et
import Loading from "../components/modals/Loading";
import Error from "../components/modals/Error";
import ProductCard from "../components/modals/ProductCard";
import bg_image from "../assets/bg_2.webp";
import { useState } from "react";

const ProductsByCategory = () => {
  const { categoryName } = useParams();
  const [page, setPage] = useState<number>(1); // Sayfa durumu için state
  const { data, loading, error, totalPages } = useFetchProductsByCategory(categoryName, page); // Custom hook'u kullan

  // Sayfa değiştirme fonksiyonları
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div className="products-page bg-cover min-h-screen" style={{ backgroundImage: `url(${bg_image})` }}>
      <h2 className='flex w-full justify-end text-xl text-pretty font-mono'>
        <span className="bg-base-100 bg-opacity-70 rounded-lg m-1 p-2">
          Category: <span className='text-blue-700'>{categoryName}</span>
        </span>
      </h2>
      {/* Durum Kontrolü */}
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          {/* Ürün Verileri */}
          <div className="flex justify-center gap-4 flex-wrap p-5">
            {data.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          {/* Sayfalama */}
          <div className="join flex justify-center py-1 mt-4">
            <button className='join-item btn' onClick={handlePreviousPage} disabled={page === 1}>
              «
            </button>
            <span className="join-item btn"> {page}</span>
            <button className='join-item btn' onClick={handleNextPage} disabled={page === totalPages}>
              »
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsByCategory;
