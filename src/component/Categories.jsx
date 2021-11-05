
import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Categories = React.memo(function Categories ({items, onClickCategory, activeCategory})  {
   

   return (
      <ul className="menu__list">
         <li ><button
         className={classNames('menu__link', activeCategory === null ? "menu__link_active" : '')}
         onClick={()=>onClickCategory(null)}>все товары</button></li>

         {items && items.map((name, index) =>
         (<li key={`${name}_${index}`}  ><button  className={classNames('menu__link', activeCategory === index ? "menu__link_active" : '')}
         onClick={()=>onClickCategory(index)}
         >{name}</button></li>))}
 
       </ul>
   )
})
Categories.propTypes= {
   onClickCategory: propTypes.func,  
 }
 
export default Categories
