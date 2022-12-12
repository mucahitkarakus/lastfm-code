import {configureStore} from "@reduxjs/toolkit";
import artistReducer from "../features/artistSlice";
import albumReducer from "../features/albumSlice";
import trackReducer from "../features/trackSlice";

const store = configureStore({
  reducer: {
    artists: artistReducer,
    albums: albumReducer,
    tracks: trackReducer,
  },
});

export default store;
