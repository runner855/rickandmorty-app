import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppUrls } from "./types/Apptypes";
import { PageStructure } from "./components/PageStructure/PageStructure";
import { SingleElement } from "./components/SingleElement/SingleElement";

export const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.CHARACTERS} />} />
        <Route path="/:page" element={<PageStructure />} />
        <Route path="/:page/:id" element={<SingleElement />} />
      </Routes>
    </div>
  );
};
