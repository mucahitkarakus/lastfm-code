import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
  artist: [],
  selectedItem: {},
  loading: false,
  error: "",
};

export const fetchArtist = createAsyncThunk("data/fetchArtist", async () => {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_API_KEY}&format=json`
  ).then((res) => res.json());
});

export const artistSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtist.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArtist.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.artist = action.payload;
    });
    builder.addCase(fetchArtist.rejected, (state) => {
      state.loading = false;
      state.artist = [];
      state.error = "Yüklenemedi";
    });
  },
});



export default artistSlice.reducer;
