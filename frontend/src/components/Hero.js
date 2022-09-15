import React from "react";
import bankImg from "../images/bank.svg";
const Hero = () => {
  return (
    <div className="bg-slate-100">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="heroImg"
            src={bankImg}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              EZBank
            </h1>
            <p className="mb-8 leading-relaxed">
              Leading Banking Website with hassle free payments. Banking with us
              ensures safety of your funds, and also gives you added benefits on
              flights, hotels and vacations. At EZBank, our aim to make your
              life easy and stress free.
            </p>
            <div className=" justify-center">
              <a href="/customers">
                <button className=" text-white bg-gray-800 border-0 py-3 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                  Check out our customers
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
