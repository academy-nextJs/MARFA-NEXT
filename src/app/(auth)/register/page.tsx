// "use client";

// import RegisterPage from "@/components/authComponent/RegisterPage";
// import React, { useState } from "react";

// const Register = () => {
//   const [step, setStep] = useState(1);

//   return (
//     <div className="my-14 flex mx-auto items-center justify-center">
//       <RegisterPage step={step} setStep={setStep} />
//     </div>
//   );
// };

// export default Register;

"use client";

import RegisterPage from "@/components/authComponent/RegisterPage";
import React, { useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="my-14 flex mx-auto items-center justify-center">
      <RegisterPage step={step} setStep={setStep} />
    </div>
  );
};

export default Register;
