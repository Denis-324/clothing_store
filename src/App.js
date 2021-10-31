import React from "react";
import { Route } from "react-router-dom";

import Footer from "./component/Footer";
import Header from "./component/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [goods, setGoods] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setGoods(json.goods);
      });
  }, []);
  console.log(goods);
  return (
    <>
      <div className="wrapper">
        <Header />

        <Route path="/" render={() => <Home items={goods} />} exact />
        <Route path="/cart" render={() => <Cart />} exact />

        <Footer />
      </div>
    </>
  );
}

export default App;
