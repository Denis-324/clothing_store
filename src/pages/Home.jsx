import React from "react";
import Nav from "../component/Nav";



function Home() {
  return (
      <>
      <Nav />
      <main className="main">
         <div className="content">
         <section class="section__card">
            <div class="section__card-img">
              <img src="../img/goods/tShits2.jpg" alt="" />
            </div>
            <div class="section__card-title">футолка летня коллекция</div>
            <div class="section__card-price">1200 P</div>
            <div class="section__card-size">
              <button
                class="section__card-size-item section__card-size-item_active"
              >
                M
              </button>
              <button class="section__card-size-item">S</button>
              <button class="section__card-size-item">L</button>
            </div>
            <button class="section__card-btn" type="button">в корзину</button>
          </section>
         </div>
      </main>
  </>
   
  )

}

export default Home;