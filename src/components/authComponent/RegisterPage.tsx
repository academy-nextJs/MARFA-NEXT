"use client";

import { Button, Card, CardBody } from "@heroui/react";
import BtnLoginRegister from "./BtnLoginRegister";
import LineOrLogin from "./LineOrLogin";
import EmailInpoutLogin from "./EmailInpoutLogin";
import UserAccount from "./UserAccount";
import TitrCartLogin from "./TitrCartLogin";
import LinkToHome from "./LinkToHome";
import { useState } from "react";

interface Props {
  onNext: (email: string, tempUserId: number) => void;
}

const RegisterPage = ({ onNext }: Props) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        "https://delta-project.liara.run/api/auth/start-registration",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("پاسخ سرور:", text);
        alert("ارسال کد با مشکل مواجه شد");
        return;
      }

      const data = await res.json();
      if (data?.tempUserId) {
        onNext(email, data.tempUserId); // ارسال داده به مرحله بعد
      } else {
        alert("tempUserId دریافت نشد");
      }
    } catch (error) {
      console.error("خطا:", error);
      alert("مشکلی در ارتباط با سرور پیش آمد");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center md:flex-row gap-2 md:m-2 md:p-10 items-center w-full md:w-[80%]">
      <Card className="w-full shadow-none bg-transparent">
        <CardBody>
          <TitrCartLogin
            titleAuth="ثبت‌ نام در آلفا"
            textAuth="برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید یا ایمیل خود را وارد کرده و کد تأیید دریافت کنید."
            BtnLink={<LinkToHome />}
          />
          <BtnLoginRegister />
          <LineOrLogin />
          <form onSubmit={handleSubmit}>
            <EmailInpoutLogin
              type="email"
              name="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              textemail="ایمیل خود را وارد کنید"
              Email="ایمیل "
            />
            <Button
              type="submit"
              className="bg-[#7575FE] text-white text-base"
              isLoading={isLoading}
            >
              ارسال کد تایید
            </Button>
          </form>
          <UserAccount
            account="حساب کاربری دارید؟"
            userid="ورود به حساب"
            SrcLink="/login"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;

// "use client";

// import { Button, Card, CardBody } from "@heroui/react";
// import BtnLoginRegister from "./BtnLoginRegister";
// import LineOrLogin from "./LineOrLogin";
// import EmailInpoutLogin from "./EmailInpoutLogin";
// import UserAccount from "./UserAccount";
// import TitrCartLogin from "./TitrCartLogin";
// import LinkToHome from "./LinkToHome";
// import { useState } from "react";

// interface Props {
//   onNext: () => void;
// }

// const RegisterPage = ({ onNext }: Props) => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const res = await fetch(
//       "https://delta-project.liara.run/api/auth/start-registration",
//       {
//         method: "POST",
//         body: JSON.stringify({ email }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!res.ok) {
//       const text = await res.text();
//       // console.error("خطا:", text);
//       console.error("پاسخ سرور:", text);
//       alert("ارسال کد با مشکل مواجه شد");
//       return;
//     }

//     const data = await res.json();
//     if (data) {
//       onNext(); // ✅ رفتن به مرحله بعد
//     }
//   };

//   return (
//     <div className="flex justify-center md:flex-row gap-2 md:m-2 md:p-10 items-center w-full md:w-[80%]">
//       <Card className="w-full shadow-none bg-transparent">
//         <CardBody>
//           <TitrCartLogin
//             titleAuth="ثبت‌ نام در آلفا"
//             textAuth="برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود وارد شوید یا ایمیل خود را وارد کرده و کد تأیید دریافت کنید."
//             BtnLink={<LinkToHome />}
//           />
//           <BtnLoginRegister />
//           <LineOrLogin />
//           <form onSubmit={handleSubmit}>
//             <EmailInpoutLogin
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e: any) => setEmail(e.target.value)}
//               textemail="ایمیل خود را وارد کنید"
//               Email="ایمیل "
//             />
//             <Button type="submit" className="bg-[#7575FE] text-white text-base">
//               ارسال کد تایید
//             </Button>
//           </form>
//           <UserAccount
//             account="حساب کاربری دارید؟"
//             userid="ورود به حساب"
//             SrcLink="/login"
//           />
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default RegisterPage;
