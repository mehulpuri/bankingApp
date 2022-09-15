import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../components/Table";
import Loader from "../components/Loader";

const Customer = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = async () => {
    setLoading(true);
    // 'https://thawing-crag-83984.herokuapp.com/api'
    // http://localhost:5000/api
    const res = await axios.get("https://thawing-crag-83984.herokuapp.com/api");
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
        <section className="text-gray-600 body-font">
          <div className="container py-20 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                Here you can view the customer records and act as one customer
                to transfer funds to other accounts.
              </h1>
            </div>
          </div>
        </section>
      </div>

      <Table className="pb-12 mb-12" data={data} />
    </div>
  );
};

export default Customer;
