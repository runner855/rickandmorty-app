import React, { useState } from "react";
import "../RegisterForm/RegisterForm.css";
import { UsersProps } from "../../types/Apptypes";

export const RegisterForm = () => {
  const [userData, setUserData] = useState<UsersProps>();
  return (
    <>
      <div className="bold-line"></div>
      <div className="form_container">
        <div className="window">
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Hello There!</div>

            <div className="input-fields">
              <input
                type="text"
                placeholder="Name"
                className="input-line full-width"
              />
              <input
                type="text"
                placeholder="Surname"
                className="input-line full-width"
              />
              <input
                type="email"
                placeholder="Email"
                className="input-line full-width"
              ></input>
              <input
                type="text"
                placeholder="Street"
                className="input-line full-width"
              />
              <input
                type="text"
                placeholder="City"
                className="input-line full-width"
              />
              <input
                type="text"
                placeholder="PostCode"
                className="input-line full-width"
              />
              <input
                type="text"
                placeholder="Country"
                className="input-line full-width"
              />
            </div>

            <div>
              <button className="ghost-round full-width">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
