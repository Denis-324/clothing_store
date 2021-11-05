import React from "react";
import tShits2 from '../img/goods/tShits2.jpg'


function CartItem({name, size, price, totalPrice, totalCount }) {
  return (
   <section className="full-cart__item">
            <div className="full-cart__item-img">
              <img src={tShits2} alt="" />
            </div>
            <div className="full-cart__item-text">
              <div className="full-cart__item-title">
                {name} <span>{size}</span>
              </div>
              <div className="full-cart__item-subtitle">{price} P</div>
            </div>
            <div className="full-cart__item-count">
              <button className="full-cart__item-count-minus">-</button>
              <div className="full-cart__item-count-item">{totalCount}</div>
              <button className="full-cart__item-count-plus">+</button>
            </div>
            <div className="full-cart__item-price">{totalPrice} P</div>
            <button className="full-cart__item-delite"></button>
          </section>
  )

}

export default CartItem;