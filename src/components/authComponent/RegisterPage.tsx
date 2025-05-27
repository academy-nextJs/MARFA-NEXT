// "use client";

// import { Button, Card, CardBody } from "@heroui/react";
// import BtnLoginRegister from "./BtnLoginRegister";
// import LineOrLogin from "./LineOrLogin";
// import EmailInpoutLogin from "./EmailInpoutLogin";
// import UserAccount from "./UserAccount";
// import TitrCartLogin from "./TitrCartLogin";
// import LinkToHome from "./LinkToHome";

// const RegisterPage = () => {
//   return (
//     <>
//       <div className="flex justify-center  md:flex-row  gap-2 md:m-2 md:p-10 items-center w-full md:w-[80%] ">
//         <Card className="w-full shadow-none bg-transparent">
//           <CardBody>
//             <TitrCartLogin
//               titleAuth="ثبت‌ نام در آلفا"
//               textAuth="
//               برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید
//               یا ایمیل خود را وارد کرده و کد تأیید دریافت کنید." BtnLink={<LinkToHome/>}
//             />
//             <BtnLoginRegister />
//             <LineOrLogin />
//             <EmailInpoutLogin  textemail="ایمیل خود را وارد کنید"  Email="ایمیل "/>
//             <Button className="bg-[#7575FE] text-white text-base">
//                ارسال کد تایید
//             </Button>
//             <UserAccount account="حساب کاربری دارید؟" userid="ورود به حساب"  SrcLink="/login" />
//           </CardBody>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default RegisterPage;

"use client";

import React from "react";
import RegisterStep1 from "./RegisterStep1";
// import RegisterStep2 from "./RegisterStep2";
// import RegisterStep3 from "./RegisterStep3";
import RegisterStep3 from "@/app/(auth)/register/RegisterStep3";
import RegisterStep2 from "@/app/(auth)/register/RegisterStep2";

interface RegisterPageProps {
  step: number;
  setStep: (step: number) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ step, setStep }) => {
  const renderStep = () => {
    switch (step) {
      case 1:
        return <RegisterStep1 setStep={setStep} />;
      case 2:
        return <RegisterStep2 setStep={setStep} />;
      case 3:
        return <RegisterStep3 setStep={setStep} />;
      default:
        return <div>مراحل ثبت نام تکمیل شد</div>;
    }
  };

  return <div className="w-full max-w-md">{renderStep()}</div>;
};

export default RegisterPage;
