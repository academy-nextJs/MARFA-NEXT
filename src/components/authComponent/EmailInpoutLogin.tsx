'use client'
import { Button, Input } from "@heroui/react";
import React from "react";

type inputPropsType = {
  Email: string;
  textemail: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const EmailInpoutLogin = ({Email,textemail, name , type ,onChange , value }: inputPropsType) => {
  return (
    <div className="flex flex-col my-2 gap-4">
      <span className="text-right">{Email}</span>
      <Input type={type} placeholder={textemail} name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default EmailInpoutLogin;
