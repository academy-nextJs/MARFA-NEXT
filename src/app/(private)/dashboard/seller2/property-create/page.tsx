// import StepperContainer from "@/components/PropertyStepper/StepperContainer";

import StepperContainer from "@/components/PropertyStepperseller2/StepperContainer";

// import StepperContainer from "@/components/PropertyStepperseller2/StepperContainer";

export default function PropertyCreatePage() {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">ثبت آگهی جدید</h1>
      <StepperContainer />
    </div>
  );
}