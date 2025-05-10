import RegisterPage from "@/components/authComponent/RegisterPage";
import React from "react";

const Register = () => {
  return (
    <div className="my-14 flex items-center justify-center">
      <RegisterPage
        titleAuth="ثبت‌ نام در آلفا"
        textAuthBtn="ارسال کد تایید "
        textAuth="
              برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید
              یا ایمیل خود را وارد کرده و کد تأیید دریافت کنید."
      />
    
    </div>
  );
};
export default Register;
