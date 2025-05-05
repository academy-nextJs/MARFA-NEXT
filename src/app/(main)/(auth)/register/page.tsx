"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button, Input, Divider, Card, CardBody, Link } from "@heroui/react";
import SliderRegister from "./SliderRegister";
const Register = () => {
  return (
    <div className="flex w-[100%]">
      {/* Right Section (Form) */}
      <div className="flex justify-center items-center p-8">
        <Card className="shadow-lg p-6 w-full max-w-md">
          <CardBody>
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-bold text-2xl">ثبت‌نام در آلفا</h1>
              <Link href="/">
                <Button size="sm" color="secondary" variant="flat">
                  صفحه اصلی
                </Button>
              </Link>
            </div>

            <p className="mb-4 text-gray-600 text-sm">
              برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید
              یا ایمیل خود را وارد کرده و کد تأیید دریافت کنید.
            </p>

            <div className="flex flex-col gap-3 mb-4">
              <Button startContent={<FcGoogle />} variant="bordered">
                ورود با گوگل
              </Button>
              <Button startContent={<FaApple />} variant="bordered">
                ورود با اپل
              </Button>
            </div>

            {/* <Divider className="my-4">یا</Divider> */}
            <div className="flex items-center my-4">
              <Divider className="flex-grow" />
              <span className="px-2 text-gray-500 text-sm">یا</span>
              <Divider className="flex-grow" />
            </div>
            <div className="flex flex-col gap-4">
              <Input type="email" label="ایمیل" placeholder="you@example.com" />
              <Button color="primary">ارسال کد تایید</Button>
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
      {/* Left Section (Image Slider) */}
      <div className="bg-black rounded-lg w-full text-white">
        <SliderRegister />
      </div>
    </div>
  );
};
export default Register;
