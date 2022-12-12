import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
  track: [],
  selectedItem: {},
  loading: false,
  error: "",
};

export const fetchTracks = createAsyncThunk(
  "tracks/fetchTracks",
  async (name) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    return fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${apiKey}&format=json`
    ).then((res) => res.json());
  }
);

export const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.track = action.payload;
    });
    builder.addCase(fetchTracks.rejected, (state) => {
      state.loading = false;
      state.track = [];
      state.error = "Yüklenemedi";
    });
  },
});

export default trackSlice.reducer;
