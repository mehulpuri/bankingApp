import React from "react";
import { Link } from "react-router-dom";
import CustomerPage from "./CustomerPage";

const Table = ({ data }) => {
  return (
    <div className="bg-slate-100	">
      <div className="overflow-x-auto relative shadow-md ">
        <table className=" w-[70%] relative left-[14%] mb-8 pb-10  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                Name
              </th>
              <th scope="col" className="py-3 px-3">
                Email
              </th>
              <th scope="col" className="py-3 px-3">
                Balance
              </th>
              <th scope="col" className="py-3 px-3">
                View
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
                var x = value?.balance.toString();

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
                    {value.name}
                  </th>
                  <td className="py-4 px-3">{value.email}</td>
                  <td className="py-4 px-6"> ₹ {res}</td>

                  <td className="py-4 pl-4 pr-2">
                    <Link
                      state={value}
                      to={`/customers/${value._id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Click Here
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
