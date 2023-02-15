import React, { useEffect } from "react";
import "./App.css";
import Call from "./api/Call";
import NavBar from "./components/NavBar/NavBar";

export const App = () => {
  useEffect(() => {
    Call.get(`character`, {}).then((res) => {});
  }, []);
  return (
    <div className="container">
      <NavBar />
    </div>
  );
};
