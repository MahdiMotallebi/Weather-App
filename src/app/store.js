import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../feature/weatherSlice";

export const store = configureStore({
  reducer: {
    weatherReducer,
  },
});
