import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

function Header() {
  
  const {totalPrice, totalCount} = useSelector(({cart})=>(cart))

  return (
   <header className="header">
   <div className="header__container">
     <div className="header__flex">
       <div className="header__phone">
         <a href="tel:88000000000">+7 (800) 000-00-00</a>
       </div>
       <div className="header__logo"><Link to="/">goods</Link></div>
       <Link to="/cart" className="header__cart">
         <div className="header__cart-body">
           <div className="header__cart-title"><span>{totalPrice}</span></div>
           <div className="header__cart-img-body">
             <div className="header__cart-img"><span>{totalCount}</span></div>
           </div>
         </div>
       </Link>
     </div>
   </div>
 </header>   
  )

}

export default Header;