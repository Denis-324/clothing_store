import React from "react";

function CartItem({id, name, img, size, price, totalPrice, totalCount, onRemove, onPlus, onMinus}) {
   const handleRemoClick = () => {
      onRemove(id)
   }

const handlePlusItem = () => {
   onPlus(id)
}

const handleMinusItem = () => {
   onMinus(id)
}
  return (
   <section className="full-cart__item">
            <div className="full-cart__item-img">
              <img src={img} alt="" />
            </div>
            <div className="full-cart__item-text">
              <div className="full-cart__item-title">
                {name} <span>{size}</span>
              </div>
              <div className="full-cart__item-subtitle">{price} P</div>
            </div>
            <div className="full-cart__item-count">
              <button onClick={handleMinusItem} className="full-cart__item-count-minus">-</button>
              <div className="full-cart__item-count-item">{totalCount}</div>
              <button onClick={handlePlusItem} className="full-cart__item-count-plus">+</button>
            </div>
            <div className="full-cart__item-price">{totalPrice} P</div>
            <button onClick={handleRemoClick} className="full-cart__item-delite"></button>
          </section>
  )

}

export default CartItem;