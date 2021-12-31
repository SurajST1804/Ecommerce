import React from "react";
import { useParams } from "react-router-dom";
import JSON from "../Json/Image.json";
import { RiStarFill } from "react-icons/ri";
import { BsBasket } from "react-icons/bs";
import { basket } from "../Redux/Action/Action";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  let { id } = useParams();
  let singleProduct = JSON.find(item => item.id === id);
  let { title, image, rating, price, specification, detail } = singleProduct;

  let dispatch = useDispatch();

  let onAddItemToBasket = () => {
    let item = {
      title,
      image,
      rating,
      price,
      specification,
      detail,
    };
    dispatch(basket(item));
  };
  return (
    <section className="bg-white p-10">
      <article className="mx-auto w-[95%]">
        <main className="flex space-x-6 ">
          <div className="basis-[30%]">
            <img src={singleProduct.image} alt="img" />
          </div>
          <div className="basis-[70%] flex flex-col justify-evenly">
            <div>
              <h2>{singleProduct.title}</h2>
            </div>
            <div className="flex">
              <h4>Rating:</h4>
              {Array(rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <RiStarFill className="text-[#FDAA4B] mt-1" />
                  </p>
                ))}
            </div>
            <div>
              Price: <strong>&#x20B9;{singleProduct.price}</strong>
            </div>
            <div>
              <h4>Specification:</h4>
              {singleProduct.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
            <div>
              <h4>Details:</h4>
              <p>{singleProduct.detail}</p>
            </div>
            <div>
              <button
                className="bg-[#FDAA4B] px-4 py-4 flex justify-end rounded-md hover:bg-yellow-600"
                onClick={onAddItemToBasket}
              >
                <span>
                  <BsBasket />
                </span>
                <span className="pl-2">Add to basket</span>
              </button>
            </div>
          </div>
        </main>
      </article>
    </section>
  );
};

export default SingleProduct;
