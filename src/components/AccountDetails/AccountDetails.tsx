import * as React from "react";
import "../AccountDetails/AccountDetails.css";
import { UsersProps } from "../../types/Apptypes";

type AccountsProps = {
  accounts: UsersProps[];
};

export const AccountDetails = ({ accounts }: AccountsProps) => {
  console.log(accounts);
  return (
    <div className="main">
      <div>name</div>
      <div>surname</div>
      <div>email</div>
      <div>street</div>
    </div>
  );
};
