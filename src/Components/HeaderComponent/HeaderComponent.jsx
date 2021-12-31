import React from "react";
import BottomHeader from "./BottomHeader";
import MainHeader from "./MainHeader";
import TopHeaderComponent from "./TopHeaderComponent";

const HeaderComponent = () => {
  return (
    <section>
      <article>
        <TopHeaderComponent />
        <MainHeader />
        <BottomHeader />
      </article>
    </section>
  );
};

export default HeaderComponent;
