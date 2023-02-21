import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { NavBarElements } from "../../Utilities/utility";
import UserIcon from "../../images/user_icon.png";
import { Modal } from "antd";
import { Users } from "../../Utilities/utility";
import { GiExitDoor } from "react-icons/gi";
import {
  MODAL_SIGNUPLINK_LABEL,
  MODAL_ACCOUNTDETAILS_LABEL,
} from "../../constants/dictionary";
import {
  MODAL_LOGINREGISTER_LABEL,
  MODAL_LOGIN_LABEL,
} from "../../constants/dictionary";
import { useNavigate } from "react-router-dom";
import { AccountDetails } from "../AccountDetails/AccountDetails";
import { UsersProps } from "../../types/Apptypes";

type UserDetailsProps = {
  accounts: UsersProps[];
};

export const NavBar = ({ accounts }: UserDetailsProps) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [filteredUsers, setFilteredUsers] = useState(Users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | undefined>();
  const navigate = useNavigate();

  const filterByUser = (name: string) => {
    setFilteredUsers(
      Users.filter((user) => `${user.name} ${user.surname}` === name)
    );
  };

  const users = Array.from(
    new Set(Users && Users.map((user) => `${user.name} ${user.surname}`))
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: any) => {
    setUserName(e.target.value);

    filterByUser(e.target.value);
  };

  const handleFormOpen = () => {
    navigate("/registerform");
    setIsModalOpen(false);
  };

  console.log(accounts);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="navbar_logo" onClick={showModal}>
              {userName ? (
                <img className="user_avatar" src={UserIcon} alt="logo" />
              ) : (
                <div
                  className="login_label"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  {MODAL_LOGINREGISTER_LABEL}
                </div>
              )}
              <div className="userName">{userName}</div>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div className="account_details_container">
                {userName ? MODAL_ACCOUNTDETAILS_LABEL : MODAL_LOGIN_LABEL}

                {userName ? (
                  <AccountDetails accounts={accounts} />
                ) : (
                  <select onChange={handleChange}>
                    <option value="">Select User</option>

                    {accounts.map((selectedUser) => {
                      return (
                        <option
                          key={`${selectedUser.name} ${selectedUser.surname}`}
                        >
                          {`${selectedUser.name} ${selectedUser.surname}`}
                        </option>
                      );
                    })}
                  </select>
                )}
                <div>
                  {`${userName}` ? "" : "Don't have an account?"}
                  {userName ? (
                    ""
                  ) : (
                    <li className="signup">
                      <button
                        className="signup_button"
                        onClick={handleFormOpen}
                      >
                        {MODAL_SIGNUPLINK_LABEL}
                      </button>
                    </li>
                  )}
                </div>
                <div className="exit_signup_container">
                  <ul>
                    <li className="logout" onClick={() => setUserName("")}>
                      <GiExitDoor />
                    </li>
                  </ul>
                </div>
              </div>
            </Modal>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {NavBarElements.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        "nav-links" + (isActive ? " activated" : "")
                      }
                      onClick={closeMobileMenu}
                    >
                      {item.navbar_element}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
