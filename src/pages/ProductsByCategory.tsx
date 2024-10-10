import { useParams } from "react-router-dom";

const ProductsByCategory = () => {
    const { categoryName } = useParams();

  return (
    <div>{categoryName}</div>
  )
}

export default ProductsByCategory