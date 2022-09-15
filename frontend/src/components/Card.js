import React from "react";
import transferImg from "../images/img.jpg";
import moneyTrans from "../images/transfer.png";
import CheckImg from "../images/check.png";
import CheckGif from "../images/check.gif";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextLoader from "./TextLoader";

import { useNavigate } from "react-router-dom";

import done from "../images/done.gif";

const Card = (props) => {
  const { receiverData, senderData } = props;
  const [amount, setAmount] = useState();
  const [submitButton, setClass] = useState("");
  const [disabledStatus, disabledUpdate] = useState(false);
  const [image, setImg] = useState(CheckImg);
  const navigate = useNavigate();

  const notify = () =>
    toast.info("Transaction Processed ✅", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const warn = () =>
    toast.warn("Maximum amount allowed per transaction is set to 20,000", {
      position: "top-center",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const warn2 = () =>
    toast.warn("Min Transfer Amount is 250 rs", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const PostData = async (e) => {
    e.preventDefault();
    disabledUpdate(true);
    var amountValue = amount;

    if (amountValue > 20000) {
      amountValue = 20000;
    }
    if (amountValue <= 0) {
      amountValue = 1;
    }
    if (typeof amountValue == "undefined") {
      amountValue = 0;
    }
    const senderId = senderData?._id;
    const receiverId = receiverData?._id;

    const res = await fetch(
      "https://thawing-crag-83984.herokuapp.com/transfer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId,
          receiverId,
          amountValue,
        }),
      }
    );

    if (res.status == 200) {
      notify();
      setTimeout(() => {
        navigate("/customers", { replace: true });
      }, 4000);
    }
    console.log("pressed button");

    setImg(CheckGif);
  };

  const amountHandler = (e) => {
    e.preventDefault();
    if (e.target.value > 20000) {
      warn();
      e.target.value = 20000;
    }
    if (e.target.value <= 0) {
      warn2();
      e.target.value = 1;
    } else {
      setAmount(e.target.value);
    }
  };
  return (
    <div className="bg-slate-100	">
      <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pb-[8%]">
        <div className="relative top-8  ml-[30%] ">
          <div className="max-w-2xl rounded overflow-hidden shadow-2xl bg-gray-100">
            <img
              className="w-full h-[40vh]"
              src={transferImg}
              alt="transferImage"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Transfer Funds</div>
              <p className="text-gray-700 text-base">
                Put Amount and proceed to instantly transfer funds
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="flex flex-wrap">
                <label className="px-3 ml-3 mr-4 py-1 text-slate-500	">
                  Sender
                </label>

                <label className="px-3 ml-[7vw] py-1  text-slate-500	">
                  Reciever
                </label>

                <label className="px-3 ml-[5vw] py-1  text-slate-500	">
                  Amount
                </label>
              </div>

              <div className="flex rounded flex-wrap pb-2">
                <span className="inline-block bg-blue-700 rounded-full  px-3 py-3 text-sm font-semibold text-gray-100 mr-3 mb-2 cursor-pointer hover:bg-blue-700 transition delay-50 duration-300 ease-in-out">
                  {senderData ? (
                    senderData.name
                  ) : (
                    <div>
                      <TextLoader className="mt-2" />
                    </div>
                  )}
                </span>
                <img className="w-14 relative bottom-1" src={moneyTrans} />
                <span className="inline-block bg-blue-700 rounded-full ml-6 px-3 py-3 text-sm font-semibold text-gray-100 mr-2 mb-2 cursor-pointer hover:bg-blue-700 transition delay-50 duration-300 ease-in-out">
                  {receiverData ? (
                    receiverData.name
                  ) : (
                    <div>
                      <TextLoader className="mt-2" />
                    </div>
                  )}
                </span>

                <form method="post">
                  <div className="flex flex-wrap mt-1">
                    <input
                      onChange={amountHandler}
                      type="number"
                      name="amount"
                      className="w-36 ml-6  px-3 h-10 relative  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded
                             transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 
                             focus:outline-none"
                      placeholder="Enter Amount"
                    />
                    <button
                      type="submit"
                      onClick={PostData}
                      className={submitButton}
                      disabled={disabledStatus}
                    >
                      <img className="w-12 ml-6 relative" src={image} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
