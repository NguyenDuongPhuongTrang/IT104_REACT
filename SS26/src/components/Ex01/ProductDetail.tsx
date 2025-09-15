import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p>ID sản phẩm là: <strong>{id}</strong></p>
    </div>
  );
};

export default ProductDetail;
