import React from "react";
import { BsBasket } from "react-icons/bs";
import { RiStarFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { basket } from "../../Redux/Action/Action";
const DODdetails = props => {
  let { title, image, rating, price, id } = props.productDetails;
  let dispatch = useDispatch();

  let onAddItemToBasket = () => {
    let item = {
      title,
      image,
      rating,
      price,
    };
    dispatch(basket(item));
  };

  return (
    <div className="flex space-x-6 basis-[70%] ">
      <div className=" p-3 border-[1px] shadow-lg flex flex-col justify-end">
        <div>
          <Link to={`/product/${id}`}>
            <img src={image} alt="shirt" className="p-3 h-80  w-[100%]" />
          </Link>
        </div>
        <div>
          <Link to={`/products/${id}`}>
            <h2 className="uppercase font-normal justify-start">{title}</h2>
          </Link>
        </div>
        <div>
          <h3 className=" font-bold">Price:&#x20B9;{price}</h3>
        </div>
        <div>
          <h3 className="uppercase flex">
            Rating:
            <span className="flex">
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <RiStarFill className="text-[#FDAA4B] mt-1" />
                  </p>
                ))}
            </span>
          </h3>
        </div>
        <div className="">
          <button
            className="bg-[#FDAA4B] px-2 py-2 flex justify-end rounded-md hover:bg-yellow-600 shadow-lg"
            onClick={onAddItemToBasket}
          >
            <span className="pt-1">
              <BsBasket />
            </span>
            <span className="pl-2">Add to basket</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DODdetails;
