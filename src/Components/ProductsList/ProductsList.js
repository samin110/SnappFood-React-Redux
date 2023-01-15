import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/actions/actionCart/actionCart";

function ProductsList({ products }) {
  const dispatch = useDispatch();

  return (
    <div className='products__list'>
      {products.map((product) => (
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
      ))}
    </div>
  );
}

export default ProductsList;
