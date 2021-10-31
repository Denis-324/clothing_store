
import classNames from 'classnames'
import React from 'react'

const Categories = ({items}) => {
   const [activeItem, setActiveItem] =  React.useState(null)

   //функция переключения меню, с неактивного на активное
   const onSelectItem = (index) =>{
      setActiveItem(index)
   }

   return (
      <ul className="menu__list">
         <li ><button
         className={classNames('menu__link', activeItem === null ? "menu__link_active" : '')}
         onClick={()=>onSelectItem(null)}>все товары</button></li>

         {items && items.map((name, index) =>
         (<li><button className={classNames('menu__link', activeItem === index ? "menu__link_active" : '')}
         onClick={()=>onSelectItem(index)}
         key={`${name}_${index}`} 
         >{name}</button></li>))}
 
       </ul>
   )
}

export default Categories
