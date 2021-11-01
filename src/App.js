import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import { Footer, Header } from "./component";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { setGoods } from "./redux/action/goods";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/goods").then(({ data }) => {
      dispatch(setGoods(data));
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />

        <Route path="/" render={() => <Home />} exact />
        <Route path="/cart" render={() => <Cart />} exact />

        <Footer />
      </div>
    </>
  );
}

export default App;
