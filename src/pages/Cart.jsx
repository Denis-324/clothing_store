import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../component";
import {removeCartItem, plusCartItem, minusCartItem} from '../redux/action/cart'




function Cart() {
  const {totalPrice, totalCount, items} =  useSelector(({cart})=>cart)
  const addedGoods = Object.keys(items).map(key=>{
    return items[key].items[0]
  })

const dispatch = useDispatch()
  const onRemoveItem =(id)=>{
    if(window.confirm('Вы действительно хотите удалить?')){
      dispatch(removeCartItem(id)) 
    }
  }

const onPlusItem = (id) => {
  dispatch(plusCartItem(id))
}

const onMinusItem = (id) => {
  dispatch(minusCartItem(id))
}

const onClickOrder = () => {
  console.log('Ваш заказ:', items);
};

  return (
      <>
      {totalCount ? <div className="full-cart">
          
          {addedGoods.map((obj)=><CartItem
          onMinus={onMinusItem}
          onPlus={onPlusItem}
          onRemove={onRemoveItem} 
          id={obj.id}
          name={obj.name} 
          size={obj.size}
          price={obj.price} 
          img={obj.imageUrl}
          totalPrice={items[obj.id].totalPrice} 
          totalCount={items[obj.id].items.length}/>)}
          
          <section className="total">
            <div className="total__count">Итого: {totalPrice} P</div>
            <div className="total__sum">Количество товаров: {totalCount} шт</div>
          </section>
          <button onClick={onClickOrder} className="payment-btn" type="button">Оплатить</button>
        </div> : <div className="empty-cart">
          <div className="empty-cart__title">Ваша корзина пуста (:</div>
          <div className="empty-cart__img"></div>
        </div>}
        
     
        
    </>
   
  )

}

export default Cart