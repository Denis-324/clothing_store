import React from 'react'
import classNames from 'classnames'

const SortPopup = React.memo(function SortPopup ({items, activeSortType, onClickSortType}) {
   const [visibliPopup, setVisibliPopup] = React.useState(false)
   const activeLable = items.find((obj) => obj.type === activeSortType).name
   const sortRef = React.useRef()

   const toggleVisibliPopup = () => {
      setVisibliPopup(!visibliPopup)
   }

   const hadleOutsideClick = (e) => {
      if(!e.path.includes(sortRef.current)){
         setVisibliPopup(false)
      }
   }
   
   React.useEffect(()=>{
      document.body.addEventListener('click', hadleOutsideClick)
   })

   const onSelectItem = (index) =>{
      onClickSortType(index)
   }
   
   return (
      <ul ref={sortRef} onClick={toggleVisibliPopup} className="menu__sort">
         <span className="menu__sort-title">сортировать по:</span>
         <span className="menu__sort-subtitle ">{activeLable}</span>
         {visibliPopup && <div className="menu__sort-popup">

         {items && items.map((obj, index) =>
         (<li><button 
         className={classNames('menu__link menu__link_lh', activeSortType === obj.type ? "menu__link_active" : '')}
         onClick={() => onSelectItem(obj)}
         key={`${obj.type}_${index}`} 
         >{obj.name}</button></li>))}
           
         </div>}
      </ul>
   )
}) 

export default SortPopup