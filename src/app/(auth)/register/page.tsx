
//**********************important - main****************************** */
// "use client";

// import RegisterPage from "@/components/authComponent/RegisterPage";
// import RegisterPageStep2 from "@/components/authComponent/RegisterPageStep2";
// import RegisterPagestep3 from "@/components/authComponent/RegisterPagestep3";
// import { useState } from "react";
// import React from "react";

// const Register = () => {
//   const [step, setStep] = useState<1 | 2 | 3>(1);
//    const [email, setEmail] = useState("");
//   const [tempUserId, setTempUserId] = useState<number | null>(null);
//   const [userId, setUserId] = useState<number | null>(null);

  

//   const goToStep = (n: 1 | 2 | 3) => setStep(n);

//   return (
//     <div className="my-14 flex mx-auto items-center justify-center">
//       {step === 1 && (
//         <RegisterPage
//           onNext={(email, tempId) => {
//             setEmail(email);
//             setTempUserId(tempId);
//             setStep(2);
//           }}
//         />
//       )}
//       {step === 2 && (
//         <RegisterPageStep2
//           email={email}
//           tempUserId={tempUserId}
//           onNext={(userId) => {
//             setUserId(userId);
//             setStep(3);
//           }}
//           onBack={() => setStep(1)}
//         />
//       )}
//       {step === 3 && <RegisterPagestep3 userId={userId}
//       onRegisterSuccess={() => {window.location.href = "/login"} }
//        />}
//     </div>
//   );
// };

// export default Register;
 "use client";

import RegisterPage from "@/components/authComponent/RegisterPage";
import RegisterPageStep2 from "@/components/authComponent/RegisterPageStep2";
import RegisterPagestep3 from "@/components/authComponent/RegisterPagestep3";
import { useState } from "react";
import React from "react";

const Register = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [tempUserId, setTempUserId] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <div className="my-14 flex mx-auto items-center justify-center">
      {step === 1 && (
        <RegisterPage
          onNext={(email, tempId) => {
            setEmail(email);
            setTempUserId(tempId);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <RegisterPageStep2
          email={email}
          tempUserId={tempUserId}
          onNext={(userId) => {
            setUserId(userId);
            setStep(3);
          }}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <RegisterPagestep3
          userId={userId}
          onRegisterSuccess={() => {
            window.location.href = "/login";
          }}
        />
      )}
    </div>
  );
};

export default Register;
