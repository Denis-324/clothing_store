import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Footer, Header } from "./component";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { setGoods } from "./redux/action/goods";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [goods, setGoods] = React.useState([]);
  const dispatch = useDispatch();

  const { items } = useSelector(({ goods, filters }) => {
    return {
      items: goods.items,
      sortBy: filters.sortBy,
    };
  });

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setGoods(data.goods));
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />

        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/cart" render={() => <Cart />} exact />

        <Footer />
      </div>
    </>
  );
}

export default App;
