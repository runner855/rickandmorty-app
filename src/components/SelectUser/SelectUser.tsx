import React, { useState } from "react";
import { Users } from "../../constants/dictionary";

interface UserNameProps {
  onValueChange: (newValue: string) => void;
}

export const SelectUser = () => {
  const [filteredUsers, setFilteredUsers] = useState(Users);
  const [userName, setUserName] = useState<string | undefined>();

  const filterByUser = (name: string) => {
    setFilteredUsers(
      Users.filter((user) => `${user.name} ${user.surname}` === name)
    );
  };
  const handleChange = (e: any) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <div className="login_select">
        <div className="login">{userName ? "Login" : "Register"}</div>
        <div>{userName}</div>
        <select onChange={handleChange}>
          <option value="">Select User</option>

          {Users.map((selectedUser) => {
            return (
              <option key={`${selectedUser.name} ${selectedUser.surname}`}>
                {`${selectedUser.name} ${selectedUser.surname}`}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
