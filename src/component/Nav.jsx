import React from "react";
import {useDispatch, useSelector} from "react-redux";

import { setCategory, setSortBy } from "../redux/action/filters";
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
  // const items = useSelector(({ goods }) => goods.items);

  const  {category, sortBy}  = useSelector(({ filters }) => filters  )
  
 

  //функция которая передает index в стор при клике на меню
  const onSelectCategory = React.useCallback((index)=>{
    dispatch(setCategory(index))
  },[])
    
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  
  return (
    
   <nav className="menu">
   <div className="menu__container">
     <div className="menu__flex">
       <Categories
         activeCategory={category}
       onClickCategory={onSelectCategory}
        items = {categoryNames}/>
       <SortPopup
       activeSortType={sortBy.type}
       items={sortItems}
       onClickSortType={onSelectSortType}/>
     </div>
   </div>
 </nav> 
  )
  
}

export default Nav;

