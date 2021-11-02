import React from "react";
import { fetchGoods } from "../redux/action/goods";
import { useDispatch } from "react-redux";
import { useSelector} from "react-redux";
import {CardBlok, GoodsLoadingBlok, Nav  } from "../component";





function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(!items.length) {
      dispatch(fetchGoods());
    }
    
  }, []);

// Достаем данные из стейта
  const  items  = useSelector(({ goods }) => goods.items  )
  const  isLoaded  = useSelector(({ goods }) => goods.isLoaded  )

  return (
      <>
      
        <Nav />  
        <div className="container">
          <div className="content">
            {isLoaded ? items.map(obj=><CardBlok key={obj.id} isLoading={true} {...obj}/>) : Array(20).fill(<GoodsLoadingBlok/>) }
           
          </div>
        </div>
     
      </>
   
  )

}

export default Home;