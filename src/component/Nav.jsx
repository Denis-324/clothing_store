import React from "react";
import {Categories, SortPopup} from "./index";


function Nav() {
  return (
   <nav className="menu">
   <div className="menu__container">
     <div className="menu__flex">
       <Categories items = {[
         'футболки',
         'худи',
         'шорты',
         'джинсы',
         'куртки'
       ]}/>
       <SortPopup items = {[
         'популярности',
         'цене',
       ]}/>
     </div>
   </div>
 </nav> 
  )

}

export default Nav;