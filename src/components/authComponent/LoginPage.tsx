import React from "react";
// import RegisterPage from "./RegisterPage";
import TitrCartLogin from "./TitrCartLogin";
import { Button, Card, CardBody } from "@heroui/react";
import BtnLoginRegister from "./BtnLoginRegister";
import LineOrLogin from "./LineOrLogin";
import EmailInpoutLogin from "./EmailInpoutLogin";
import UserAccount from "./UserAccount";
import LinkToHome from "./LinkToHome";
import { handleAdd } from "@/function/handleLogin";

const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center  md:flex-row  md:m-2 md:p-10 items-center w-full md:w-[80%] ">
        <Card className="w-full shadow-none bg-transparent">
          <CardBody>
            <TitrCartLogin
              titleAuth="ثبت‌ نام در آلفا"
              textAuth="
              برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید
              یا ایمیل خود را وارد کرده و کد تأیید دریافت کنید."
              BtnLink={<LinkToHome />}
            />
            <BtnLoginRegister />
            <LineOrLogin />
            <form action={handleAdd}>
              <EmailInpoutLogin
                textemail="ایمیل خود را وارد کنید"
                Email="ایمیل "
                name="email"
                type='email'
              />
              <div className="relative ">
                <span className="absolute bottom-14 w-32 h-10 left-2 z-50 text-[#7575FE] font-bold">
                  فراموشی رمز عبور{" "}
                </span>
                <EmailInpoutLogin
                  textemail="رمز عبور خود را وارد کنید"
                  Email="رمز عبور "
                  name="password"
                  type='password'
                />
              </div>

              <Button className="bg-[#7575FE] text-white text-base" type='submit'>
                ورود به حساب
              </Button>
            </form>
            <UserAccount
              account="حساب کاربری ندارید؟"
              userid=" ثبت نام در آلفا "
              SrcLink="/registerStep2"
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
