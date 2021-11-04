import React from "react";
import { fetchGoods } from "../redux/action/goods";
import { useDispatch ,useSelector } from "react-redux";
import {CardBlok, GoodsLoadingBlok, Nav  } from "../component";
import {addGoodsToCart} from '../redux/action/cart'


function Home() {
  const  {category, sortBy}  = useSelector(({ filters }) => filters  )
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(fetchGoods(category, sortBy));
  }, [category, sortBy]);

// Достаем данные из стейта
  const  items  = useSelector(({ goods }) => goods.items  )
  const  isLoaded  = useSelector(({ goods }) => goods.isLoaded  )
  const cartItems = useSelector(({ cart }) => cart.items  )
  const handleAddGoodsToCart = (obj) => {
    dispatch({
      type: "ADD_GOODS_CART",
      payload: obj,
    })
  }

  return (
      <>
      
        <Nav />  
        <div className="container">
          <div className="content">
            {isLoaded ? items.map(obj=><CardBlok
            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
             onClickAddGoods={(handleAddGoodsToCart)}
             key={obj.id} isLoading={true} {...obj}/>) :
             Array(20).fill(0).map((_, index) =><GoodsLoadingBlok key={index} />) }
           
          </div>
        </div>
     
      </>
   
  )

}

export default Home;