import classNames from "classnames";
import React from "react";
import propTypes from 'prop-types'







function CardBlok({name, imageUrl, price, sizes, isLoding}) {

  const [activeSize, setAciveSize] = React.useState([0])



  //функция для выбора рахмера товара
  const onSelectSize = (index) => {
    setAciveSize(index)
  }

  return (
   
   <section class="section__card">
       <div class="section__card-img">
         <img src={imageUrl} alt="" />
       </div>

       <div class="section__card-title">{name}</div>
       <div class="section__card-price">{price} P</div>
       <div class="section__card-size">

         {sizes.map((size, index)=>(
           <button className={classNames("section__card-size-item", activeSize===index ? "section__card-size-item_active" : '')}
           onClick={()=>onSelectSize(index)}
           >{size}</button>
         ))}  

       </div>
       
       <button class="section__card-btn" type="button">в корзину</button>
    </section>
     
  )

}

CardBlok.propTypes= {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  sizes: propTypes.arrayOf(propTypes.string).isRequired,
  imageUrl: propTypes.string.isRequired
}

export default CardBlok


