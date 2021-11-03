import React from "react";
import { fetchGoods } from "../redux/action/goods";
import { useDispatch ,useSelector } from "react-redux";
import {CardBlok, GoodsLoadingBlok, Nav  } from "../component";



function Home() {
  const  {category, sortBy}  = useSelector(({ filters }) => filters  )
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(fetchGoods(category, sortBy));
  }, [category, sortBy]);

// Достаем данные из стейта
  const  items  = useSelector(({ goods }) => goods.items  )
  const  isLoaded  = useSelector(({ goods }) => goods.isLoaded  )
  

  return (
      <>
      
        <Nav />  
        <div className="container">
          <div className="content">
            {isLoaded ? items.map(obj=><CardBlok key={obj.id} isLoading={true} {...obj}/>) :
             Array(20).fill(0).map((_, index) =><GoodsLoadingBlok key={index} />) }
           
          </div>
        </div>
     
      </>
   
  )

}

export default Home;