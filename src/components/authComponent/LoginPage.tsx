// 'use client';

// import { Button, Input, Card, CardBody } from "@nextui-org/react";
// import { useState, useEffect } from "react";
// import SliderRegister from "./SliderRegister";
// import Link from "next/link";

// const images = [
//   {
//     src: "/images/slider1.jpg",
//     text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...",
//     author: "پارسا آبی" ,
//     date: "۱۲ مرداد ۱۴۰۳"
//   },
//   {
//     src: "/images/slider2.jpg",
//     text: "این یک متن تستی دیگر است برای تصویر دوم...",
//     author: "نگار سبز",
//     date: "۱۶ مرداد ۱۴۰۳"
//   }
// ];

// export default function LoginPage() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex md:flex-row flex-col min-h-screen">

//       {/* Right login form */}
//       <div className="flex justify-center items-center p-4 md:p-8 w-full md:w-1/2">
//         <Card className="w-full max-w-md">
//           <CardBody>
//             <h2 className="mb-6 font-bold text-xl md:text-2xl text-center">خوش برگشتی!</h2>
//             <Link href="/">
//                 <Button size="sm" color="secondary" variant="flat">
//                   صفحه اصلی
//                 </Button>
//               </Link>
//             <div className="flex flex-col gap-4">
//               <Button variant="bordered" startContent={<img src="/google.svg" className="w-4 h-4" />}>
//                 ورود با گوگل
//               </Button>
//               <Button variant="bordered" startContent={<img src="/apple.svg" className="w-4 h-4" />}>
//                 ورود با اپل
//               </Button>
//               <div className="relative my-2 text-gray-400 text-sm text-center">یا</div>
//               <Input type="email" label="ایمیل" placeholder="ایمیل خود را وارد کنید" />
//               <Input type="password" label="رمز عبور" placeholder="رمز عبور خود را وارد کنید" />
//               <Button color="primary">ورود به حساب</Button>
//               <div className="mt-2 text-sm text-center">
//                 حساب کاربری ندارید؟ <a className="text-blue-500" href="#">ثبت‌نام در آلفا</a>
//               </div>
//             </div>
//           </CardBody>
//         </Card>
//       </div>

//     </div>
//   );
// }

import React from "react";
import RegisterPage from "./RegisterPage";

const LoginPage = () => {
  return (
    <div>
      <RegisterPage
        titleAuth="خوش برگشتی!"
        textAuthBtn="ورود به حساب  "
        textAuth="
              برای ورود به حساب کاربری آلفا میتوانید با اکانت گوگل یا اپل خود و یا با ایمیل و رمزعبور خود اقدام کنید"
      />
    </div>
  );
};

export default LoginPage;
