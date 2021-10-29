import React from "react";



function Header() {
  return (
   <header className="header">
   <div className="header__container">
     <div className="header__flex">
       <div className="header__phone">
         <a href="tel:88000000000">+7 (800) 000-00-00</a>
       </div>
       <div className="header__logo"><a href="#">goods</a></div>
       <a href="#" className="header__cart">
         <div className="header__cart-body">
           <div className="header__cart-title"><span>корзина пуста</span></div>
           <div className="header__cart-img-body">
             <div className="header__cart-img"><span>3</span></div>
           </div>
         </div>
       </a>
     </div>
   </div>
 </header>   
  )

}

export default Header;