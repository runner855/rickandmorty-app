import React, { useState } from "react";
import "../NavBar/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { NavBarElements } from "../../Utilities/utility";
import UserIcon from "../../images/user_icon.png";
import { Select, Space, Modal } from "antd";
import { Users } from "../../constants/dictionary";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [filteredUsers, setFilteredUsers] = useState(Users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState<string | undefined>();

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

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="navbar_logo" onClick={showModal}>
              <img className="user_avatar" src={UserIcon} alt="logo" />
              <div className="userName">{userName}</div>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <div className="login_select">
                <div className="login">{userName ? "Login" : "Register"}</div>
                <select onChange={handleChange}>
                  <option value="">Select User</option>

                  {Users.map((selectedUser) => {
                    return (
                      <option
                        key={`${selectedUser.name} ${selectedUser.surname}`}
                      >
                        {`${selectedUser.name} ${selectedUser.surname}`}
                      </option>
                    );
                  })}
                </select>
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
