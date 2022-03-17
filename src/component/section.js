import React from "react";
import { useDispatch } from "react-redux";
import { handleIndex } from "../feature/weatherSlice";
const Section = ({ hour, image, temp, id }) => {
  const dispatch = useDispatch();
  const handleWeather = (e) => {
    dispatch(handleIndex(e.currentTarget.id));
  };
  return (
    <div id={id} className="section" onClick={(e) => handleWeather(e)}>
      <time className="hour">{hour}</time>
      <div className="info-section">
        <img src={image} alt={image} className="img-section" />
        <span className="temp">{temp}&#176;</span>
      </div>
    </div>
  );
};

export default Section;
