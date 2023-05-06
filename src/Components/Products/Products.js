import React from "react";
import "./Products.css";
import { useSelector } from "react-redux";
import ProductsList from "../ProductsList/ProductsList";

function Products() {
  const { products } = useSelector((state) => state.productsReducer);

  console.log(products);

  return (
    <section className='products'>
      <h1>غذاها</h1>
      {products.length === 0 ? (
        <div className='loading'>
          <div className='first'></div>
          <div className='second'></div>
          <div className='third'></div>
        </div>
      ) : (
        <ProductsList products={products} />
      )}
    </section>
  );
}

export default Products;
