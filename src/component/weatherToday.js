import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "./section";
import cloud from "../Img/cloud.svg";
import snow from "../Img/snowflake.svg";
import sun from "../Img/clear.svg";
import rainy from "../Img/rainy.svg";
import location from "../Img/Icon material-location-on.svg";
import "./weatherToday.css";
const WeatherToday = () => {
  const state = useSelector((state) => state.weatherReducer);

  const imgWeather = (description) => {
    var image = "";
    switch (description) {
      case "Clear":
        image = sun;
        break;
      case "Clouds":
        image = cloud;
        break;
      case "Rain":
        image = rainy;
        break;
      case "Snow":
        image = snow;
        break;
    }

    return image;
  };

  const getTime = (time, index) => {
    const t = parseInt(time.slice(11, 13));

    if (index === 0) return "Now";
    if (t < 12) {
      return `${t} am`;
    } else {
      return `${t} pm`;
    }
  };
  const convertEpoch = (timestamp) => {
    const d = new Date(timestamp * 1000);
    const month = d.toLocaleString("default", { month: "long" }).slice(0, 3);
    const week = d.toLocaleString("default", { weekday: "long" }).slice(0, 3);
    const day = d.getDate();
    const date = `${week}, ${day} ${month}`;

    return date;
  };

  return (
    <>
      <div className="main">
        <div className="left-main">
          <div className="info-weather">
            <div className="temp-today">
              <span className="today">toda</span>
              <span className="date">
                {convertEpoch(state.infoCity.sunrise)}
              </span>
            </div>
            <img
              src={imgWeather(state.list[state.index].weather[0].main)}
              alt="img-weather"
              className="img-section"
            />
          </div>
          <span className="degre-temp">
            {state.list[state.index].main.temp.toFixed(1)}&#176;
          </span>
          <div className="city-country">
            <img src={location} alt="location" className="location" />
            <span className="city">{state.infoCity.name},</span>
            <span className="country">{state.infoCity.country}</span>
          </div>
        </div>
        <div className="right-main">
          {state.list.map((item, i) => {
            return (
              <Section
                key={i}
                id={i}
                hour={getTime(item.dt_txt, i)}
                image={imgWeather(item.weather[0].main)}
                temp={item.main.temp.toFixed(1)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeatherToday;
