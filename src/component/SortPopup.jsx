
import classNames from 'classnames'
import React from 'react'


const SortPopup = ({items}) => {
   const [visibliPopup, setVisibliPopup] = React.useState(false)
   const [activeItem, setActiveItem] =  React.useState(0)

   //сохраняем в перменную  значение по чему будет происходить сортировка (сортировать по: aciveLable)
   const aciveLable = items[activeItem]
   
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

   //функция переключения меню, с неактивного на активное
   const onSelectItem = (index) =>{
      setActiveItem(index)
   }
   
   return (
      <ul ref={sortRef} onClick={toggleVisibliPopup} className="menu__sort">
         <span className="menu__sort-title">сортировать по:</span>
         <span className="menu__sort-subtitle ">{aciveLable}</span>
         {visibliPopup && <div className="menu__sort-popup">

         {items && items.map((name, index) =>
         (<li><button 
         className={classNames('menu__link menu__link_lh', activeItem === index ? "menu__link_active" : '')}
         onClick={()=>onSelectItem(index)}
         key={`${name}_${index}`} 
         >{name}</button></li>))}
           
         </div>}
      </ul>
   )
}
//className="menu__link menu__link_lh"
export default SortPopup