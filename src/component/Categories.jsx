
import classNames from 'classnames'
import React from 'react'
import propTypes from 'prop-types'

const Categories = React.memo(function Categories ({items, onClickCategory, activeCategory})  {
   

   return (
      <ul className="menu__list">
         <li ><button
         className={classNames('menu__link', activeCategory === null ? "menu__link_active" : '')}
         onClick={()=>onClickCategory(null)}>все товары</button></li>

         {items && items.map((name, index) =>
         (<li><button className={classNames('menu__link', activeCategory === index ? "menu__link_active" : '')}
         onClick={()=>onClickCategory(index)}
         key={`${name}_${index}`} 
         >{name}</button></li>))}
 
       </ul>
   )
})
Categories.propTypes= {
   items: propTypes.number,
   onClickCategory: propTypes.func,
   // activeCategory: propTypes.oneOf([propTypes.number, null])
   
 }
 
export default Categories
