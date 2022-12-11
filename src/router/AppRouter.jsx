import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopArtistList from "../pages/TopArtistList";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TopArtistList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
