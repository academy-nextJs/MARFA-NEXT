"use client";
import React, { useState } from "react";
import LinkToBack from "./LinkToBackLogin";
import EmailInpoutLogin from "./EmailInpoutLogin";
import TitrCartLogin from "./TitrCartLogin";
import { Button, Card, CardBody } from "@heroui/react";

type Props = {
  userId: number | null;
  onRegisterSuccess: () => void;
};

const RegisterPagestep3 = ({ userId, onRegisterSuccess }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!userId || !phoneNumber || !password || !confirmPassword) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    if (password !== confirmPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارند.");
      return;
    }

    const payload = {
      userId: Number(userId),
      phoneNumber,
      password,
    };

    console.log("🚀 ارسال نهایی ثبت‌نام:", payload);

    setIsLoading(true);
    try {
      console.log("🚀 ارسال نهایی ثبت‌نام:", {
        userId,
        phoneNumber,
        password,
        confirmPassword,
      });
      const res = await fetch(
        "https://delta-project.liara.run/api/auth/complete-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("❌ خطای ثبت‌نام:", errText);
        alert("ثبت‌نام ناموفق بود. لطفاً اطلاعات را بررسی کنید.");
        return;
      }

      const result = await res.json();
      console.log("✅ ثبت‌نام موفق:", result);

      onRegisterSuccess(); // رفتن به لاگین
    } catch (error) {
      console.error("⛔ خطا در ارسال نهایی:", error);
        console.error("⛔ خطای کلی:", error);

      alert("مشکلی در ارتباط با سرور رخ داد.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center md:flex-row gap-2 md:m-2 md:p-10 items-center w-full md:w-[98%]">
      <Card className="w-full shadow-none bg-transparent">
        <CardBody>
          <TitrCartLogin
            titleAuth="ثبت‌ نام در آلفا"
            textAuth="مشخصات خود را پر کنید"
            BtnLink={<LinkToBack />}
          />

          <EmailInpoutLogin
            textemail="شماره همراه خود را وارد کنید"
            Email="شماره همراه"
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <EmailInpoutLogin
            textemail="رمز عبور خود را وارد کنید"
            Email="رمز عبور"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <EmailInpoutLogin
            textemail="تکرار رمز عبور را وارد کنید"
            Email="تکرار رمز عبور"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            className="bg-[#7575FE] text-white text-base"
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            {isLoading ? "در حال ارسال..." : "ثبت‌نام"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPagestep3;

// "use client";
// import React, { useState } from "react";
// import LinkToBack from "./LinkToBackLogin";
// import EmailInpoutLogin from "./EmailInpoutLogin";
// import TitrCartLogin from "./TitrCartLogin";
// import { Button, Card, CardBody } from "@heroui/react";

// type Props = {
//   userId: number | null;
//   onRegisterSuccess: () => void;
// };

// const RegisterPagestep3 = ({ userId, onRegisterSuccess }: Props) => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // const handleSubmit = async () => {
//   //     if (!userId || !phoneNumber || !password || password !== repeatPassword) {
//   //   alert("لطفاً تمام فیلدها را کامل کنید.");
//   //   return;
//   // }

//   // console.log("🚀 ثبت‌نام مرحله ۳ - ارسال اطلاعات:", {
//   //   userId,
//   //   phoneNumber,
//   //   password,
//   //   repeatPassword,
//   // });
//   //   if (!userId) {
//   //     alert("شناسه کاربر یافت نشد");
//   //     return;
//   //   }

//   //   if (password !== confirmPassword) {
//   //     alert("رمز عبور و تکرار آن یکسان نیستند");
//   //     return;
//   //   }

//   //   setIsLoading(true);

//   //   try {
//   //     const res = await fetch(
//   //       "https://delta-project.liara.run/api/auth/complete-register",
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           userId,
//   //           password,
//   //           phoneNumber,
//   //         }),
//   //       }
//   //     );

//   //     if (!res.ok) {
//   //       const errText = await res.text();
//   //       console.error("Registration failed:", errText);
//   //       alert("ثبت‌نام ناموفق بود. لطفاً اطلاعات را بررسی کنید.");
//   //       return;
//   //     }

//   //     // اگر موفقیت‌آمیز بود:
//   //     onRegisterSuccess(); // برید به لاگین
//   //   } catch (error) {
//   //     console.error("Error submitting final registration:", error);
//   //     alert("مشکلی در ارتباط با سرور رخ داد");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   const handleSubmit = async () => {
//   if (!userId || !phoneNumber || !password || password !== repeatPassword) {
//     alert("لطفاً تمام فیلدها را کامل کنید.");
//     return;
//   }

//   console.log("🚀 ثبت‌نام مرحله ۳ - ارسال اطلاعات:", {
//     userId,
//     phoneNumber,
//     password,
//     repeatPassword,
//   });

//   try {
//     const res = await fetch("/api/auth/complete-register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId,
//         phoneNumber,
//         password,
//       }),
//     });

//     if (!res.ok) {
//       const errText = await res.text();
//       console.error("Registration failed:", errText);
//       alert("ثبت‌نام ناموفق بود. لطفاً اطلاعات را بررسی کنید.");
//       return;
//     }

//     // موفقیت
//     alert("ثبت‌نام با موفقیت انجام شد");
//     onNext(); // یا برو لاگین
//   } catch (e) {
//     console.error("⛔ خطای ثبت‌نام:", e);
//     alert("مشکلی در ارتباط با سرور رخ داد.");
//   }
// };
//   return (
//     <div className="flex justify-center md:flex-row gap-2 md:m-2 md:p-10 items-center w-full md:w-[98%]">
//       <Card className="w-full shadow-none bg-transparent">
//         <CardBody>
//           <TitrCartLogin
//             titleAuth="ثبت‌ نام در آلفا"
//             textAuth="مشخصات خود را پر کنید"
//             BtnLink={<LinkToBack />}
//           />

//           <EmailInpoutLogin
//             textemail="شماره همراه خود را وارد کنید"
//             Email="شماره همراه"
//             name="phoneNumber"
//             type="tel"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />

//           <EmailInpoutLogin
//             textemail="رمز عبور خود را وارد کنید"
//             Email="رمز عبور"
//             name="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <EmailInpoutLogin
//             textemail="تکرار رمز عبور را وارد کنید"
//             Email="تکرار رمز عبور"
//             name="confirmPassword"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />

//           <Button
//             className="bg-[#7575FE] text-white text-base"
//             onClick={handleSubmit}
//             isLoading={isLoading}
//           >
//             {isLoading ? "در حال ارسال..." : "ثبت‌نام"}
//           </Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default RegisterPagestep3;
