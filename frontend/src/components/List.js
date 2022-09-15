import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = (props) => {
  const [data, setdata] = useState([]);
  const [senderId, setSenderId] = useState(null);
  // console.log(props.senderName);

  useEffect(() => {
    getCustomer();
  }, [props?.senderId]);

  const getCustomer = async () => {
    // 'https://desidbbackend.herokuapp.com/api'

    const res = await axios.get(
      `https://thawing-crag-83984.herokuapp.com/api/${props.senderId}`
    );
    const data = res.data;
    setdata(data);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          {data.map((data, key) => {
            return (
              <Link
                to={`/transfer/${data._id}`}
                state={props?.senderId}
                key={key}
                aria-current="true"
                className="block px-6 py-2 border-b border-gray-200  w-full  hover:bg-gray-100 hover:text-gray-500  focus:outline-none focus:ring-0 transition duration-500 cursor-pointer"
              >
                {data.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
