"use client";

import { Button, Card, CardBody } from "@heroui/react";
import TitrCartLogin from "./TitrCartLogin";
import OtpInputComponent from "./NumberCodeLogin";
import LinkToBack from "./LinkToBackLogin";

const RegisterPageStep2 = () => {
  return (
    <>
      <div className="flex justify-center  md:flex-row  md:m-2 md:p-10 items-center w-full md:w-[80%] ">
        <Card className="w-full shadow-none bg-transparent">
          <CardBody>
            <TitrCartLogin
              titleAuth="ثبت‌ نام در آلفا"
              textAuth="کد تایید ارسال شده به Example@gmail.com  را وارد کنید.تغییر ایمیل"  BtnLink={<LinkToBack/>}/>
            <OtpInputComponent/>
            <Button className="bg-[#7575FE] text-white text-base">
               ارسال  
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default RegisterPageStep2;
