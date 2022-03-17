import React from "react";
import error from "../../Img/alert.png";
import "./NoCity.css";

const NoCity = () => {
  return (
    <div className="alert">
      <img src={error} alt={error} className="no-city-img" />
      <h3>city not found</h3>
      <p>did you make a typo?</p>
    </div>
  );
};

export default NoCity;
