"use client";
import { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import Step1_BasicInfo from "./Step1_BasicInfo";
import Step2_Location from "./Step2_Location";
import Step3_Details from "./Step3_Details";
import Step4_Amenities from "./Step4_Amenities";
import Step5_Photos from "./Step5_Photos";
import Step6_Review from "./Step6_Review";

export default function StepperContainer() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="space-y-4 border p-4 rounded shadow">
      <Stepper activeStep={currentStep}>
        <Step label="اطلاعات پایه" />
        <Step label="مکان" />
        <Step label="جزئیات" />
        <Step label="امکانات" />
        <Step label="تصاویر" />
        <Step label="مرور نهایی" />
      </Stepper>

      <div>
        {currentStep === 0 && <Step1_BasicInfo />}
        {currentStep === 1 && <Step2_Location />}
        {currentStep === 2 && <Step3_Details />}
        {currentStep === 3 && <Step4_Amenities />}
        {currentStep === 4 && <Step5_Photos />}
        {currentStep === 5 && <Step6_Review />}
      </div>

      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            قبلی
          </button>
        )}
        {currentStep < 5 ? (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-600"
          >
            بعدی
          </button>
        ) : (
          <button
            onClick={() => alert("آگهی ثبت شد!")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ثبت نهایی
          </button>
        )}
      </div>
    </div>
  );
}