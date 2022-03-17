import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionDetail from "./sectionDetail";
import sunrise from "../Img/Icon feather-sunrise.svg";
import sunset from "../Img/Icon feather-sunset.svg";
import drop from "../Img/Icon weather-raindrop.svg";
import humidity from "../Img/Exclusion 2.svg";
import wind from "../Img/Icon awesome-wind.svg";
import pressure from "../Img/Group 62.svg";
import feelsLike from "../Img/Icon awesome-temperature-high.svg";
import visibility from "../Img/Icon material-visibility.svg";
import "./weatherDetail.css";

const WeatherDetail = () => {
  const state = useSelector((state) => state.weatherReducer);

  const convertEpochToTimestamp = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  const convertWind = (wind) => {
    return (wind * 3.6).toFixed(2); //m.s to km.h
  };
  return (
    <>
      <div className="weather-detail">
        <h3 className="caption-weather-detail">weather details</h3>
        <div className="container-section-detail">
          <SectionDetail
            name="sunrise"
            value={convertEpochToTimestamp(state.infoCity.sunrise)}
            image={sunrise}
          />
          <SectionDetail
            name="sunset"
            value={convertEpochToTimestamp(state.infoCity.sunset)}
            image={sunset}
          />
          <SectionDetail
            name="precipitation"
            value={state.list[state.index].clouds.all + "%"}
            image={drop}
          />
          <SectionDetail
            name="humidity"
            value={state.list[state.index].main.humidity + "%"}
            image={humidity}
          />
          <SectionDetail
            name="wind"
            value={convertWind(state.list[state.index].wind.speed) + " Km/h"}
            image={wind}
          />
          <SectionDetail
            name="pressure"
            value={state.list[state.index].main.pressure + " hPa"}
            image={pressure}
          />
          <SectionDetail
            name="feelsLike"
            value={state.list[state.index].main.feels_like + "\u00b0C"}
            image={feelsLike}
          />
          <SectionDetail
            name="visibility"
            value={parseInt(state.list[state.index].visibility) / 1000 + " Km"}
            image={visibility}
          />
        </div>
      </div>
    </>
  );
};

export default WeatherDetail;
