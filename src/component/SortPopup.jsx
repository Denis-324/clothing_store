
import classNames from 'classnames'
import React from 'react'


const SortPopup = React.memo(function SortPopup ({items, activeSortType, onClickSortType}) {
   const [visibliPopup, setVisibliPopup] = React.useState(false)
   // const [activeItem, setActiveItem] =  React.useState(0)
   // const activeLable = items[activeItem].name
   //сохраняем в перменную  значение по чему будет происходить сортировка (сортировать по: aciveLable)

   const activeLable = items.find((obj) => obj.type === activeSortType).name
   
 
  
   
   // перменная в которой хранится ссылка на модальное окно
   const sortRef = React.useRef()

   //Функция для отображения и исчезновения модального окна
   const toggleVisibliPopup = () => {
      setVisibliPopup(!visibliPopup)
   }

   //Функция закрывающая модальное окно при клике в не области
   const hadleOutsideClick = (e) => {
      if(!e.path.includes(sortRef.current)){
         setVisibliPopup(false)
      }
   }
   
   React.useEffect(()=>{
      document.body.addEventListener('click', hadleOutsideClick)
   })

   // функция переключения меню, с неактивного на активное
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
         // className={classNames('menu__link menu__link_lh', activeSortType === index ? "menu__link_active" : '')}
         className={classNames('menu__link menu__link_lh', activeSortType === obj.type ? "menu__link_active" : '')}
         // onClick={()=>onSelectItem(index)}
         onClick={() => onSelectItem(obj)}
         key={`${obj.type}_${index}`} 
         >{obj.name}</button></li>))}
           
         </div>}
      </ul>
   )
}) 

export default SortPopup