import React from "react";

const ShopNow = () => {
  return (
    <section className="bg-white">
      <article className=" w-[90%] mx-auto ">
        <div className="flex space-x-8 items-center justify-center">
          <img
            src="powerbank.jpg"
            alt="powerbank"
            className="w-[550px] cursor-pointer animate-pulse"
          />
          <img
            src="fashionWatch.jpg"
            alt="fashion"
            className="w-[550px]  cursor-pointer  animate-pulse "
          />
        </div>
      </article>
    </section>
  );
};

export default ShopNow;
