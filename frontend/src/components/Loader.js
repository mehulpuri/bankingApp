import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <InfinitySpin width="200" color="#1F2937" />
      <h1 className="text-xl relative right-4">
        Fetching Data from server ...{" "}
      </h1>
    </div>
  );
};

export default Loader;
