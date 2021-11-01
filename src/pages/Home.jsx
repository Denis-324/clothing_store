import React from "react";
import {CardBlok, Nav  } from "../component";




function Home({items}) {
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