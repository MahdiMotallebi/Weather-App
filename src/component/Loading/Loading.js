import React from "react";
import ReactLoading from "react-loading";
import "./loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="bars" color="#000" />
    </div>
  );
};

export default Loading;
