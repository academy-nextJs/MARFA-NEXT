// "use client";

// import { Button, Card, CardBody } from "@heroui/react";
// import TitrCartLogin from "./TitrCartLogin";
// import OtpInputComponent from "./NumberCodeLogin";
// import LinkToBack from "./LinkToBackLogin";

// const RegisterPageStep2 = () => {
//   return (
//     <>
//       <div className="flex justify-center  md:flex-row  md:m-2 md:p-10 items-center w-full md:w-[80%] ">
//         <Card className="w-full shadow-none bg-transparent">
//           <CardBody>
//             <TitrCartLogin
//               titleAuth="ثبت‌ نام در آلفا"
//               textAuth="کد تایید ارسال شده به Example@gmail.com  را وارد کنید.تغییر ایمیل"  BtnLink={<LinkToBack/>}/>
//             <OtpInputComponent/>
//             <Button className="bg-[#7575FE] text-white text-base">
//                ارسال
//             </Button>
//           </CardBody>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default RegisterPageStep2;

"use client";

import { Button, Card, CardBody } from "@heroui/react";
import TitrCartLogin from "./TitrCartLogin";
import OtpInputComponent from "./NumberCodeLogin";
import LinkToBack from "./LinkToBackLogin";
import { useState } from "react";

// interface Props {
//   onNext: () => void;
// }

interface Props {
  email: string;
  tempUserId: number | null;
  onNext: (userId: number) => void;
  onBack: () => void;
}
const RegisterPageStep2 = ({ email, tempUserId, onNext, onBack }: Props) => {
  const [otpCode, setOtpCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleCodeSubmit = async () => {
  if (otpCode.length !== 6) {
    alert("کد باید ۶ رقمی باشد");
    return;
  }

  if (!tempUserId) {
    alert("شناسه کاربر موقت موجود نیست");
    return;
  }

  const body = JSON.stringify({
    tempUserId: Number(tempUserId),
    verificationCode: otpCode,
  });

  console.log("✅ ارسال به سرور:", body);

  setIsLoading(true);
  try {
    const res = await fetch("https://delta-project.liara.run/api/auth/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Verify error:", errText);
      alert("کد تایید اشتباه است یا منقضی شده");
      return;
    }

    const data = await res.json();

    if (data?.userId) {
      onNext(data.userId); // رفتن به مرحله ۳ ✅
    } else {
      alert("کاربر پیدا نشد");
    }
  } catch (error) {
    console.error("Error verifying code:", error);
    alert("مشکلی در ارتباط با سرور رخ داد");
  } finally {
    setIsLoading(false);
  }
};


  // const handleCodeSubmit = async () => {
  //   if (otpCode.length !== 6) {
  //     alert("کد باید ۶ رقمی باشد");
  //     return;
  //   }

  //   console.log("✅ ارسال به سرور:", {
  //     email,
  //     code: otpCode,
  //     userId: Number(tempUserId),
  //     typeofUserId: typeof Number(tempUserId),
  //   });

  //   if (!tempUserId) {
  //     alert("شناسه کاربر موقت موجود نیست");
  //     return;
  //   }

  //   setIsLoading(true);
  //   const body = JSON.stringify({
  //     email,
  //     code: otpCode,
  //     userId: Number(tempUserId),
  //   });

  //   console.log("🧪 JSON body:", body);
  //   try {
  //     const res = await fetch(
  //       "https://delta-project.liara.run/api/auth/verify-email",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         // body: JSON.stringify({
  //         //   email,
  //         //   code: otpCode,
  //         //   userId: Number(tempUserId),
  //         // }),
  //         body: body,
  //       }
  //     );

  //     if (!res.ok) {
  //       const errText = await res.text();
  //       console.error("Verify error:", errText);
  //       alert("کد تایید اشتباه است یا منقضی شده");
  //       return;
  //     }

  //     const data = await res.json();

  //     if (data?.userId) {
  //       onNext(data.userId); // رفتن به مرحله ۳ ✅
  //     } else {
  //       alert("کاربر پیدا نشد");
  //     }
  //   } catch (error) {
  //     console.error("Error verifying code:", error);
  //     alert("مشکلی در ارتباط با سرور رخ داد");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  return (
    <div className="flex justify-center md:flex-row md:m-2 md:p-10 items-center w-full md:w-[92%]">
      <Card className="w-full shadow-none bg-transparent">
        <CardBody>
          <TitrCartLogin
            titleAuth="ثبت‌ نام در آلفا"
            textAuth={`کد تایید ارسال شده به ${email} را وارد کنید. `}
            BtnLink={<LinkToBack onClick={onBack} />}
          />
          <OtpInputComponent onChange={(code) => setOtpCode(code)} />
          <Button
            onClick={handleCodeSubmit}
            className="bg-[#7575FE] text-white text-base"
            isLoading={isLoading}
          >
            ارسال
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
// const handleCodeSubmit = async () => {
//   const isValid = otpCode.length === 6;
//   if (isValid) {
//     onNext();
//   } else {
//     alert("کد نادرست است");
//   }
// };

// const handleCodeSubmit = async () => {
//   if (otpCode.length !== 6 || !/^\d{6}$/.test(otpCode)) {
//     alert("کد وارد شده باید ۶ رقمی باشد.");
//     return;
//   }

//   try {
//     const res = await fetch("https://delta-project.liara.run/api/auth/verify-email-code", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         tempUserId,
//         code: otpCode,
//       }),
//     });

//     if (!res.ok) {
//       const errText = await res.text();
//       console.error("خطا در تایید کد:", errText);
//       alert("کد وارد شده نادرست است یا منقضی شده.");
//       return;
//     }

//     const data = await res.json();

//     if (data?.userId) {
//       onNext(data.userId); // ← رفتن به مرحله سوم با userId
//     } else {
//       alert("userId دریافت نشد از سرور");
//     }
//   } catch (err) {
//     console.error("خطا در ارتباط:", err);
//     alert("خطایی در ارتباط با سرور پیش آمد.");
//   }
// };

//   return (
//     <div className="flex justify-center md:flex-row md:m-2 md:p-10 items-center w-full md:w-[92%]">
//       <Card className="w-full shadow-none bg-transparent">
//         <CardBody>
//           <TitrCartLogin
//             titleAuth="ثبت‌ نام در آلفا"
//             textAuth="کد تایید ارسال شده به Example@gmail.com  را وارد کنید.تغییر ایمیل"
//             BtnLink={<LinkToBack />}
//           />
//           <OtpInputComponent onChange={(code) => setOtpCode(code)} />
//           <Button
//             onClick={handleCodeSubmit}
//             className="bg-[#7575FE] text-white text-base"
//           >
//             ارسال
//           </Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };
export default RegisterPageStep2;
