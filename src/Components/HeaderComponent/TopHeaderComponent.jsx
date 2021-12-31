import React from "react";

const TopHeaderComponent = () => {
  return (
    <section className="bg-[#F5F5F5] h-12 shadow-sm">
      <article className="flex mx-auto w-[90%] h-12">
        <div className="text-black- flex justify-start basis-[50%] items-center">
          Get 30% Off On Selected Items
        </div>
        <div className="text-black flex justify-end basis-[50%]">
          <ul className="flex items-center space-x-8">
            <li className=" hover:text-[#FDAA4B]">Wishlist</li>
            <li className="hover:text-[#FDAA4B]">Compare</li>
            <li className=" hover:text-[#FDAA4B]">Currency</li>
            <li className="hover:text-[#FDAA4B]">Languages</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default TopHeaderComponent;
