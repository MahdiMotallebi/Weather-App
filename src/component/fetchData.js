import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchWeather, handleIsCity } from "../feature/weatherSlice";

const FetchData = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.weatherReducer);

  const getDataApi = async () => {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          state.city
        }&units=${
          state.isCelsius ? "metric" : "imperial"
        }&appid=c2ce44372bdb98e88bf54dbd452d8f86`
      );
      dispatch(fetchWeather(res.data));
    } catch {
      dispatch(handleIsCity());
    }
  };
  useEffect(() => {
    getDataApi();
  }, [state.city, state.isCelsius]);
  return <></>;
};

export default FetchData;
