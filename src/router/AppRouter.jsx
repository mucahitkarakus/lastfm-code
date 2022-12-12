import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopArtistList from "../pages/TopArtistList";
import DetailCard from "../pages/DetailCard";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<TopArtistList />} />
          <Route path="/detail/:id" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
