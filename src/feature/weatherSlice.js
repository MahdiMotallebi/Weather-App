import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  infoCity: {},
  list: [],
  city: "london",
  index: 0,
  isLoading: true,
  temp: "metric",
  isCelsius: true,
  isCity: true,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeather: (state, action) => {
      state.isLoading = true;
      state.isCity = true;
      state.infoCity = action.payload.city;
      state.list = action.payload.list.slice(0, 4);
      state.isLoading = false;
    },
    handleCity: (state, action) => {
      state.city = action.payload;
    },
    handleIndex: (state, action) => {
      state.index = action.payload;
    },
    handleTemperature: (state) => {
      state.isCelsius = !state.isCelsius;
    },
    handleIsCity: (state) => {
      state.isCity = !state.isCity;
    },
  },
});

export const {
  handleTemperature,
  fetchWeather,
  handleCity,
  handleIsCity,
  handleIndex,
} = weatherSlice.actions;
export default weatherSlice.reducer;
