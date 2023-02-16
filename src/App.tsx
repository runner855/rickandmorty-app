import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppUrls } from "./types/Apptypes";
import { PageStructure } from "./components/PageStructure/PageStructure";

export const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.CHARACTERS} />} />
        <Route path="/:page" element={<PageStructure />} />
      </Routes>
    </div>
  );
};
