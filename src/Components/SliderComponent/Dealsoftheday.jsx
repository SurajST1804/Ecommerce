import React, { useState } from "react";
import JSON from "../../Json/Image.json";
import DODdetails from "./DODdetails";

const Dealsoftheday = () => {
  let [state, setState] = useState(JSON);

  return (
    <section className="h-[] bg-white pt-8">
      <article className="flex flex-col space-y-10 mx-auto w-[90%]">
        <div className="flex justify-center basis-[30%] py-6">
          <h1 className="text-3xl"> DEALS OF THE DAY</h1>
        </div>

        <hr className="w-[20%] mx-auto border-[#FDAA4B]" />
        <div className="flex justify-evenly space-x-4">
          {state.slice(0, 4).map(x => {
            // console.log(x.slice());
            return <DODdetails productDetails={x} key={x.id} />;
          })}
        </div>
        <div className="flex justify-evenly space-x-4">
          {state.slice(4, 8).map(x => {
            // console.log(x.slice());
            return <DODdetails productDetails={x} key={x.id} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default Dealsoftheday;
