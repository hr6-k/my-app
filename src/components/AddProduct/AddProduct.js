import { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ onAdd }) => {
  const [newTitle, setNewTitle] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    onAdd(newTitle);
    setNewTitle("");
  };

  return (
    <div>
      <form className="add-product-form" onSubmit={submitForm}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Add Product"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <button type="submit" className="form-btn">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
