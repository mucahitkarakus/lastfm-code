import {configureStore} from "@reduxjs/toolkit";
import artistReducer from "../features/artistSlice";

const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});

export default store;
