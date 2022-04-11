import React, { useEffect } from "react";
import "./Products.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/actions/actionCart/actionCart";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  return (
    <section className='products'>
      <h1>غذاها</h1>

      <div className='products__list'>
        {products.length > 0 ? (
          products.map((product) => (
            <div className='products__card' key={product._id}>
              <div className='products__img'>
                <img src={product.image} />
              </div>
              <div className='products__content'>
                <h2>{product.name}</h2>
                <div className='products__materials'>
                  <GiKnifeFork className='products__icon' />
                  <p>{product.description}</p>
                </div>
                <div
                  className='products__price'
                  onClick={() => dispatch(addToCart(product))}
                >
                  <p>{product.price}</p>
                  <IoAddCircleOutline className='products__icon' />
                </div>
              </div>
            </div>
          ))
        ) : (
          // create Loading by css
          <div className='loading'>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
            <div className='fourth'></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
