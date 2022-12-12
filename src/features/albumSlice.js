import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    album: [],
    // selectedItem: {},
    loading: false,
    error: "",
};

export const fetchAlbums = createAsyncThunk(
    "albums/fetchAlbums",
    async (name) => {
      return fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json&`
      ).then((res) => res.json()).then(res => console.log(res));
    }
  );
  
  export const albumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.album = action.payload;
      });
      builder.addCase(fetchAlbums.rejected, (state) => {
        state.loading = false;
        state.album = [];
        state.error = "Yüklenemedi";
      });
    },
  });

export default albumSlice.reducer;
