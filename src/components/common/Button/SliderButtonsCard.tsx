"use client";

import { FC } from "react";
import { ButtonEmpty } from "./button";

interface SliderButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const SliderButtonsCard: FC<SliderButtonsProps> = ({ onPrev, onNext }) => {
  const handlePrev = () => {
    if (onPrev) onPrev();
  };

  const handleNext = () => {
    if (onNext) onNext();
  };

  return (
    <div className="absolute top-1/2 left-2 right-2 transform -translate-y-1/2 z-20 flex justify-between px-4">
      <ButtonEmpty onClick={handlePrev} className="bg-white/90 text-black w-10 h-10 rounded-full flex items-center justify-center">❮</ButtonEmpty>
      <ButtonEmpty onClick={handleNext} className="bg-white/90 text-black w-10 h-10 rounded-full flex items-center justify-center">❯</ButtonEmpty>
    </div>
  );
};

export default SliderButtonsCard;
