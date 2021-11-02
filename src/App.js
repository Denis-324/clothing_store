import React from "react";
import { Route } from "react-router-dom";

import { Footer, Header } from "./component";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
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
