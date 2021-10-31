import React from "react";
import tShits2 from '../img/goods/tShits2.jpg'



function CardBlok({name, imageUrl}) {
  return (
   
   <section class="section__card">
       <div class="section__card-img">
         <img src={imageUrl} alt="" />
       </div>

       <div class="section__card-title">{name}</div>
       <div class="section__card-price">1200 P</div>
       <div class="section__card-size">
         <button
           class="section__card-size-item section__card-size-item_active"
         >
           M
         </button>
         <button class="section__card-size-item">S</button>
         <button class="section__card-size-item">L</button>
       </div>
       
       <button class="section__card-btn" type="button">в корзину</button>
    </section>
     
  )

}

export default CardBlok