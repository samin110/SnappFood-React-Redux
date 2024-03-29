import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiPlus, HiMinus } from "react-icons/hi";
import {
  addToCart,
  decrementQuantityOfOrder,
} from "../../Redux/actions/actionCart/actionCart";
import { BiShoppingBag } from "react-icons/bi";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { deleteFromCart } from "../../Redux/actions/actionCart/actionCart";
import { CgTrash } from "react-icons/cg";
import "./cart.css";
import { sumOfQuantity } from "../../Utils/sumOfQuantity";
import { totalAmountForInvoice } from "../../Utils/totalAmount";

function Cart() {
  const { orders } = useSelector(({ cartReducer }) => cartReducer);
  const { data } = useSelector(({ usersReducer }) => usersReducer);
  console.log(data);
  const dispatch = useDispatch();

  // calculate sum of quantity the orders
  const sum = sumOfQuantity(orders);

  // calculate total amount for invoice
  const totalAmount = totalAmountForInvoice(orders);

  return (
    <section className='cart'>
      <div className='container'>
        {orders.length ? (
          <div className='cart__list'>
            {orders.map((order) => (
              <div className='cart__item' key={order._id}>
                <div className='cart__information'>
                  <div className='cart__productName'>{order.name}</div>
                  <div className='cart__price-quantity'>
                    <div className='cart__price'>{order.price}</div>
                    <div className='cart__quantity'>
                      <button
                        className='btn-icon'
                        onClick={() => dispatch(addToCart(order))}
                      >
                        <HiPlus />
                      </button>
                      <p>{order.quantity}</p>
                      {order.quantity <= 1 ? (
                        <button
                          className='btn-icon'
                          onClick={() => dispatch(deleteFromCart(order._id))}
                        >
                          <CgTrash />
                        </button>
                      ) : (
                        <button
                          className='btn-icon'
                          onClick={() =>
                            dispatch(decrementQuantityOfOrder(order))
                          }
                        >
                          <HiMinus />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className='cart__productImage'>
                  <img src={order.image} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='cart__empty'>
            <div className='cart__empty-icon'>
              <BiShoppingBag />
            </div>
            <div className='cart__empty-title'>سبد خرید شما خالی است!</div>
            <Link to='/' className='cart__empty-button'>
              بازگشت به سبد محصولات
            </Link>
          </div>
        )}

        {/* Order */}
        <div className='order'>
          <div className='order__container'>
            <div className='forwarding'>
              <div className='forwarding__icon'>
                <MdOutlineDeliveryDining />
              </div>
              <div className='forwarding__name'>
                <p>هزینه ارسال</p>
              </div>
              <div className='forwarding__price'>
                <p>
                  20,000{" "}
                  <span className='forwarding__price--normal'>تومان</span>
                </p>
              </div>
            </div>
            <div className='invoice'>
              <div className='invoice__heading'>
                <div className='invoice__title'>صورتحساب ({sum})</div>
                <button className='btn-icon'>
                  <CgTrash />
                </button>
              </div>
              <div className='invoice__calculation'>
                <div className='invoice__total'>
                  <div className='invoice__total-name'>مجموع</div>
                  <div className='invoice__total-price'>
                    {totalAmount},000 تومان
                  </div>
                </div>
                <div className='invoice__post-price'>
                  <div className='invoice__post-price-name'>هزینه ارسال</div>
                  <div className='invoice__post-price-calculation'>
                    20,000 تومان
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className='invoice__payable'>
                <div className='invoice__payable-title'>قابل پرداخت</div>
                <div className='invoice__payable-price'>
                  {totalAmount === 0 ? 0 : totalAmount + 20},000 تومان
                </div>
              </div>
              <button className='invoice__btn'>
                {JSON.stringify(data) == JSON.stringify([]) ||
                JSON.stringify(data) == JSON.stringify([null]) ? (
                  <Link to='/signup?redirect=cart'>ورود به حساب کاربری</Link>
                ) : (
                  <Link to='/'>قابل پرداخت</Link>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
