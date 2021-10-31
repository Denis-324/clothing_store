import React from "react";
import {CardBlok, Nav  } from "../component";




function Home({items}) {
  return (
      <>
      
        <Nav />  
        <div className="container">
          <div className="content">
            {items.map(obj=><CardBlok key={obj.id} name={obj.name} imageUrl={obj.imageUrl}/>)}
          
          </div>
        </div>
     
      </>
   
  )

}

export default Home;