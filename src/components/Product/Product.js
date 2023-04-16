import "./Product.css";

const Product = ({ title, id, onDelete }) => {
  return (
    <div className="product">
      <div>{title}</div>
      <div>
        <button className="btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
