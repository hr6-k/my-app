import { useState, useEffect } from "react";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8085/products");
      const responseData = await response.json();
      //console.log(responseData);
      setProducts(responseData);
    };
    sendRequest();
  }, []);

  const addProduct = (newTitle) => {
    const adProdu = async () => {
      const response1 = await fetch("http://localhost:8085/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({title:newTitle}),
      });

      const responseData1 = await response1.json();
      setProducts([...products, responseData1]);
    };
    adProdu();
  };

  const deleteProduct = (id) => {
    const delProdu = async () => {
      await fetch(`http://localhost:8085/products/${id}`, { method: "DELETE" });

      setProducts(products.filter((item) => item.id !== id));
    };
    delProdu();
  };

  return (
    <div className="container">
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
};

export default App;
