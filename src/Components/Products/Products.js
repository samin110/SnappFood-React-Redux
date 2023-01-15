import React from "react";
import "./Products.css";
import { useSelector } from "react-redux";
import ProductsList from "../ProductsList/ProductsList";

function Products() {
  const { products } = useSelector((state) => state.productsReducer);

  // Render Products OR Loading
  const showProducts = () => {
    if (!products) {
      return (
        <div className='loading'>
          <div className='first'></div>
          <div className='second'></div>
          <div className='third'></div>
        </div>
      );
    } else {
      return <ProductsList products={products} />;
    }
  };

  return (
    <section className='products'>
      <h1>غذاها</h1>
      {showProducts()}
    </section>
  );
}

export default Products;
