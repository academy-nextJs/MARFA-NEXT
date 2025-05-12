import { Button, Input } from "@heroui/react";
import React from "react";

const EmailInpoutLogin = ({Email,textemail}) => {
  return (
    <div className="flex flex-col my-2 gap-4">
      <span className="text-right">{Email}</span>
      <Input type="email" placeholder={textemail} />
    </div>
  );
};

export default EmailInpoutLogin;
