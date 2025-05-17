"use client";

import { FC } from "react";
import { ButtonEmpty } from "./button";

interface SliderButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const SliderButtons: FC<SliderButtonsProps> = ({ onPrev, onNext }) => {
  const handlePrev = () => {
    if (onPrev) onPrev();
  };

  const handleNext = () => {
    if (onNext) onNext();
  };

  return (
    <div className="absolute bottom-6 left-6 flex items-center gap-2">
      <ButtonEmpty onClick={handlePrev} className="bg-white/20 w-8 h-8 rounded-full">❮</ButtonEmpty>
      <ButtonEmpty onClick={handleNext} className="bg-white/20 w-8 h-8 rounded-full">❯</ButtonEmpty>
    </div>
  );
};

export default SliderButtons;
