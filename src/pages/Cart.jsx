import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../component";





function Cart() {
  const {totalPrice, totalCount, items} =  useSelector(({cart})=>cart)
  const addedGoods = Object.keys(items).map(key=>{
    return items[key].items[0]
  })

  return (
      <>
      
        <div className="full-cart">

          {addedGoods.map((obj)=><CartItem 
          name={obj.name} 
          size={obj.size}
          price={obj.price} 
          totalPrice={items[obj.id].totalPrice} 
          totalCount={items[obj.id].items.length}/>)}
          
          <section className="total">
            <div className="total__count">Итого: {totalPrice} P</div>
            <div className="total__sum">Количество товаров: {totalCount} шт</div>
          </section>
          <button className="payment-btn" type="button">Оплатить</button>
        </div>
     
        
    </>
   
  )

}

export default Cart