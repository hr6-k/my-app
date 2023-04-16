import Product from "../Product/Product";

import "./ProductList.css";

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      {products.map((item) => {
        return <Product key={item.id} title={item.title} id ={item.id} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default ProductList;
