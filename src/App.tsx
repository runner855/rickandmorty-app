import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppUrls, UsersProps } from "./types/Apptypes";
import { PageStructure } from "./components/PageStructure/PageStructure";
import { SingleElement } from "./components/SingleElement/SingleElement";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { AccountDetails } from "./components/AccountDetails/AccountDetails";
import { Users } from "./Utilities/utility";

export const App = () => {
  const [accounts, updateAccounts] = useState<UsersProps[] | any>(Users);

  const addAccount = (userData: UsersProps | undefined) => {
    updateAccounts([...Users, userData]);
  };
  return (
    <div className="container">
      <NavBar accounts={accounts} />
      <Routes>
        <Route path="/" element={<Navigate to={AppUrls.CHARACTERS} />} />
        <Route path="/:page" element={<PageStructure />} />
        <Route path="/:page/:id" element={<SingleElement />} />
        <Route
          path="/registerform"
          element={<RegisterForm addAccount={addAccount} />}
        />
        <Route
          path="/accountdetails"
          element={<AccountDetails accounts={accounts} />}
        />
      </Routes>
    </div>
  );
};
