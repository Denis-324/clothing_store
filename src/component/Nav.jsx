import React from "react";

function Nav() {
  return (
   <nav className="menu">
   <div className="menu__container">
     <div className="menu__flex">
       <ul className="menu__list">
         <li><a href="#" className="menu__link">все товары</a></li>
         <li><a href="#" className="menu__link">футболки</a></li>
         <li><a href="#" className="menu__link">xуди</a></li>
         <li><a href="#" className="menu__link">шорты</a></li>
         <li><a href="#" className="menu__link">джинсы</a></li>
         <li><a href="#" className="menu__link">куртки</a></li>
       </ul>
       <ul className="menu__sort">
         <span className="menu__sort-title">сортировать по:</span>
         <span className="menu__sort-subtitle">популярности</span>
         <div className="menu__sort-popup">
           <li><a href="#" className="menu__link menu__link_lh">популярности</a></li>
           <li><a href="#" className="menu__link menu__link_lh">цене</a></li>
         </div>
       </ul>
     </div>
   </div>
 </nav> 
  )

}

export default Nav;