import React from "react";
import tShits2 from '../img/goods/tShits2.jpg'




function Cart() {
  return (
      <>
      
        <div className="full-cart">
          <section className="full-cart__item">
            <div className="full-cart__item-img">
              <img src={tShits2} alt="" />
            </div>
            <div className="full-cart__item-text">
              <div className="full-cart__item-title">
                футолка летня коллекция <span>M</span>
              </div>
              <div className="full-cart__item-subtitle">1200 P</div>
            </div>
            <div className="full-cart__item-count">
              <button className="full-cart__item-count-minus">-</button>
              <div className="full-cart__item-count-item">1</div>
              <button className="full-cart__item-count-plus">+</button>
            </div>
            <div className="full-cart__item-price">1200 P</div>
            <button className="full-cart__item-delite"></button>
          </section>
          <section className="total">
            <div className="total__count">Итого: 1200 P</div>
            <div className="total__sum">Количество товаров: 1 шт</div>
          </section>
          <button className="payment-btn" type="button">Оплатить</button>
        </div>
     
        
    </>
   
  )

}

export default Cart