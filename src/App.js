import React from "react";
import { useSelector } from "react-redux";
import FetchData from "./component/fetchData";
import WeatherToday from "./component/weatherToday";
import WeatherDetail from "./component/weatherDetail";
import Loading from "./component/Loading/Loading";
import Header from "./component/Header";
import NoCity from "./component/NoCity/NoCity";

const App = () => {
  const state = useSelector((state) => state.weatherReducer);
  console.log(state.isCity);
  return (
    <>
      <FetchData />
      {/* {state.isLoading ? (
        <Loading />
      ) : ( */}
      <>
        <Header />
        {state.isCity ? (
          <>
            <WeatherToday />
            <WeatherDetail />
          </>
        ) : (
          <NoCity />
        )}
      </>
      {/* )} */}
    </>
  );
};

export default App;
