import React, { useState } from "react";
import "../RegisterForm/RegisterForm.css";
import { UsersProps } from "../../types/Apptypes";

type AddUserDetailsProps = {
  addAccount: (userData: UsersProps) => void;
};

export const RegisterForm = ({ addAccount }: AddUserDetailsProps) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
  });

  const handleChange = (event: any) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    addAccount(userData);
    setUserData({
      name: "",
      surname: "",
      email: "",
      street: "",
      postcode: "",
      city: "",
      country: "",
    });
  };

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
                name="name"
                placeholder="Name"
                className="input-line full-width"
                value={userData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                className="input-line full-width"
                value={userData.surname}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-line full-width"
                value={userData.email}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="street"
                placeholder="Street"
                className="input-line full-width"
                value={userData.street}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="input-line full-width"
                value={userData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="postcode"
                placeholder="PostCode"
                className="input-line full-width"
                value={userData.postcode}
                onChange={handleChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="input-line full-width"
                value={userData.country}
                onChange={handleChange}
              />
            </div>

            <div>
              <button className="ghost-round full-width" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
