"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button, Input, Divider, Card, CardBody, Link } from "@heroui/react";
import LinkToHome from "../LinkToHome";

const RegisterPage = ({titleAuth,textAuth,textAuthBtn}) => {
  return (
    <>
      <div className="flex justify-center md:flex-row  md:m-2 md:p-10 items-center w-full md:w-[70%] ">
        <Card className="w-full shadow-none">
          <CardBody>
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-bold text-2xl sm:text-3xl">
         {titleAuth}
              </h1>
              <div className="ml-2 rounded-3xl flex justify-center items-center">
                <LinkToHome />
              </div>
            </div>

            <p className="mb-4 text-gray-600 text-sm text-right">
              {textAuth}
            </p>

            <div className="flex flex-grow gap-3 mb-4 text-base">
              <Button
                startContent={<FcGoogle />}
                variant="bordered"
                className="rounded-[31px] w-[187px]"
              >
                ورود با گوگل
              </Button>
              <Button
                startContent={<FaApple />}
                variant="bordered"
                className="rounded-[31px] w-[187px]"
              >
                ورود با اپل
              </Button>
            </div>

            <div className="flex items-center gap-2 my-4">
              <Divider className="flex-grow w-1/3" />
              <p className="text-gray-500 text-sm">یا</p>
              <Divider className="flex-grow w-1/3" />
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-right">ایمیل</span>
              <Input type="email" placeholder="ایمیل خود را وارد کنید" />
              <Button className="bg-[#7575FE] text-white text-base">
                {textAuthBtn}
              </Button>
            </div>

            <p className="mt-6 text-gray-500 text-sm text-center">
              حساب کاربری دارید؟{" "}
              <Link href="/login" color="primary" underline="always">
                ورود به حساب
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default RegisterPage;
