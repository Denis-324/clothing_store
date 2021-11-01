import React from "react";
import { useSelector} from "react-redux";
import {CardBlok, Nav  } from "../component";





function Home() {
// Достаем данные из стейта
  const  items  = useSelector(({ goods }) => goods.items  )

  return (
      <>
      
        <Nav />  
        <div className="container">
          <div className="content">
            {items && items.map(obj=><CardBlok key={obj.id} {...obj}/>)}
          
          </div>
        </div>
     
      </>
   
  )

}

export default Home;