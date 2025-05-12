import React from 'react'
import LinkToBack from './LinkToBackLogin';
import EmailInpoutLogin from './EmailInpoutLogin';
import TitrCartLogin from './TitrCartLogin';
import { Button, Card, CardBody } from '@heroui/react';

const RegisterPagestep3 = () => {
  return (
    <>
      <div className="flex justify-center  md:flex-row  gap-2 md:m-2 md:p-10 items-center w-full md:w-[80%] ">
        <Card className="w-full shadow-none bg-transparent">
          <CardBody>
            <TitrCartLogin
              titleAuth="ثبت‌ نام در آلفا"
              textAuth="مشخصات خود را پر کنید" BtnLink={<LinkToBack/>}
            />
            <EmailInpoutLogin  textemail="شماره همراه خود را وارد کنید"  Email="شماره همراه "/>
            <EmailInpoutLogin  textemail="رمز عبور  خود را وارد کنید"  Email="رمز عبور  "/>
            <EmailInpoutLogin  textemail="تکرار رمز عبور  خود را وارد کنید"  Email=" تکرار رمز عبور "/>
            <Button className="bg-[#7575FE] text-white text-base">
                ثبت نام 
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default RegisterPagestep3
