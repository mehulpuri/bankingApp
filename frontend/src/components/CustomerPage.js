import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import userImg from "../images/user.png";
import List from "./List";

const CustomerPage = () => {
  const [data, setdata] = useState([]);
  const [res, setRes] = useState();
  const [listClass, setListClass] = useState("hidden");
  const [senderId, setSenderId] = useState();
  useEffect(() => {
    getCustomer();
    idFunct();
  });

  let { id } = useParams();
  const idFunct = () => {
    setSenderId(id);
  };

  const location = useLocation();

  const loadSelector = () => {
    const updateClass = "";
    setListClass(updateClass);
  };

  const getCustomer = async () => {
    const data = await location.state;
    setdata(data);
    {
      var x = data?.balance;
      x = x.toString();
      var lastThree = x.substring(x.length - 3);
      var otherNumbers = x.substring(0, x.length - 3);
      if (otherNumbers != "") lastThree = "," + lastThree;
      var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      setRes(res);
    }
  };

  return (
    <div className="bg-slate-100	">
      <div className="flex flex-wrap pl-[30%] pt-[5%] pb-[12%]">
        <div className="w-full mr-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 w-24 h-24 mt-4 rounded-full shadow-lg"
              src={userImg}
              alt="Bonnie image"
            />
            <h5 className="mb-3 text-3xl font-medium text-gray-900 dark:text-white">
              {data.name}
            </h5>
            <span className="mb-2 text-lg text-gray-500 dark:text-gray-400">
              Balance :₹ {res}
            </span>
            <span className=" mb-3 text-lg text-gray-500 dark:text-gray-400">
              Email: {data.email}
            </span>
            <span className=" mb-3 text-lg text-gray-500 dark:text-gray-400">
              Gender: {data.gender}
            </span>
            <span className="  text-lg text-gray-500 dark:text-gray-400">
              Mobile: {data.mobile}
            </span>

            <div className="flex  space-x-3 md:mt-4">
              <a
                onClick={loadSelector}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Transfer Funds
              </a>

              {/* <a
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a> */}
            </div>
          </div>
        </div>
        <div className={listClass}>
          <List senderId={senderId} senderName={data.name} />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
