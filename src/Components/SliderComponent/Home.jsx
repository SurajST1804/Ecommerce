import React from "react";
import Shopbycategory from "./Shopbycategory";
import SliderComponent1 from "./SliderComponent1";
import ShopNow from "./ShopNow";
import Dealsoftheday from "./Dealsoftheday";
import Footer from "./Footer";

const Home = () => {
  return (
    <section>
      <article>
        <SliderComponent1 />
        <Shopbycategory />
        <ShopNow />
        <Dealsoftheday />
        <Footer />
      </article>
    </section>
  );
};

export default Home;
