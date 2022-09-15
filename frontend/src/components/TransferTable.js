import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import transferImg from "../images/transfer.svg";
import Loader from "./Loader";

const TransferTable = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTransfer();
  }, []);

  const getTransfer = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://thawing-crag-83984.herokuapp.com/transfers"
    );
    const data = res.data;
    setdata(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="h-[90vh] w-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <div className="bg-slate-100	">
        <div className="flex flex-wrap">
          <h1 className="text-center text-2xl ml-[25vw] mt-[8vh] mr-6 w-[30vw] font-medium title-font text-gray-900">
            Here you can view the transactions made, along with the customer
            details and the time and date when they were made.
          </h1>
          <img className="w-[40vh] ml-6 " src={transferImg} />
        </div>
        <div className="overflow-x-auto relative shadow-md ">
          <table className="w-[80%] relative left-[8vw] mb-8 pb-10  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-3">
                  Sender
                </th>
                <th scope="col" className="py-3 px-3">
                  Receiver
                </th>
                <th scope="col" className="py-3 px-3">
                  Amount
                </th>
                <th scope="col" className="py-3 ml-6 pl-10 px-3">
                  Date
                </th>
                <th scope="col" className="py-3 px-3 pl-10">
                  Time
                </th>
                {/* <th scope="col" className="py-3 px-3">
              </th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((value, key) => {
                {
                  {
                    /* script to convert to INR */
                  }
                  var x = value?.amount.toString();

                  var lastThree = x.substring(x.length - 3);
                  var otherNumbers = x.substring(0, x.length - 3);
                  if (otherNumbers != "") lastThree = "," + lastThree;
                  var res =
                    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
                    lastThree;
                }
                return (
                  <tr
                    key={key}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {value.by}
                    </th>
                    <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white py-4 px-3">
                      {value.to}
                    </td>
                    <td className="py-4 px-6"> ₹ {res}</td>

                    <td className="py-4 pl-4 pr-2">{value.date}</td>
                    <td className="py-4 pl-4 pr-2">{value.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransferTable;
