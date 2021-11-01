import React from "react";
import {useDispatch} from "react-redux";

import { setCategory } from "../redux/action/filters";
import {Categories, SortPopup} from "./index";


const categoryNames = [
  'футболки',
  'худи',
  'шорты',
  'джинсы',
  'куртки'
]

const sortItems = [
  {name:'популярности', type: 'popylar'},
  {name: 'цене', type: "price"},
 ]

function Nav() {

  const dispatch = useDispatch();

  //функция которая передает index в стор при клике на меню
  const onSelectCategory = React.useCallback((index)=>{
    dispatch(setCategory(index))
  },[])
    
  

  
  return (
   <nav className="menu">
   <div className="menu__container">
     <div className="menu__flex">
       <Categories
       onClickItem={onSelectCategory}
        items = {categoryNames}/>
       <SortPopup items = {sortItems}/>
     </div>
   </div>
 </nav> 
  )

}

export default Nav;

