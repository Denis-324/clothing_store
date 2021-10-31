import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { Footer, Header } from "./component";

import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [goods, setGoods] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setGoods(data.goods);
    });
  }, []);

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
