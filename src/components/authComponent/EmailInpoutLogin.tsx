import { Button, Input } from "@heroui/react";
import React from "react";

type inputPropsType = {
  Email: string;
  textemail: string;
  name: string;
  type:string
};
const EmailInpoutLogin = ({Email,textemail, name , type}: inputPropsType) => {
  return (
    <div className="flex flex-col my-2 gap-4">
      <span className="text-right">{Email}</span>
      <Input type={type} placeholder={textemail} name={name} />
    </div>
  );
};

export default EmailInpoutLogin;
