import React, { useState } from "react";
import { handleCity, handleTemperature } from "../feature/weatherSlice";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import "./header.css";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.weatherReducer);

  const handleTemp = () => {
    dispatch(handleTemperature());
  };

  const handleInputCity = (city, e) => {
    e.preventDefault();
    setInputValue(city);
    dispatch(handleCity(inputValue));
    setInputValue("");
  };
  return (
    <div className="top-site">
      <div className="container-input">
        <form onSubmit={(e) => handleInputCity(inputValue, e)}>
          <input
            value={inputValue}
            className="input-city"
            placeholder="E.g Warsaw"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button type="submit" className="btn-search">
            {/* <AiOutlineSearch /> */}
          </button>
        </form>
      </div>

      <div className={`temperature ${state.isCity ? " " : "disable"}`}>
        <span
          className={`celsius ${state.isCelsius ? "active" : ""}`}
          onClick={handleTemp}
        >
          c
        </span>
        <span className="slash">/</span>
        <span
          className={`fahrenheit ${state.isCelsius ? "" : "active"}`}
          onClick={handleTemp}
        >
          f
        </span>
      </div>
    </div>
  );
};

export default Header;
