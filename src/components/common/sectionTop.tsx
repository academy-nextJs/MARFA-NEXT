import React from 'react';
// import { MyChip } from '@/Buttons/Chip-btn';
import { SectionTopProps } from '@/src/types/types';
import { MyChip } from './Button/Chip-btn';

export function SectionTop({
  mainText = '',
  subText = '',
  chipText,
  children,
}: SectionTopProps) {
  const renderMultilineText = (text: string | React.ReactNode[]) => {
    if (Array.isArray(text)) {
      return text.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < text.length - 1 && <br />}
        </React.Fragment>
      ));
    }

    return text.split('\n').map((line, i) => (
      <React.Fragment key={`line-${i}`}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex flex-col gap-6 ml-14 mr-14 w-[97%]">
      {chipText && (
        <MyChip className="bg-transparent   border-[#6a6af8] border-1 text-[#7979fb] text-xl">
          {chipText}
        </MyChip>
      )}

      {/* Main Text */}
      <h1 className="font-bold text-3xl whitespace-pre-lin">
        {renderMultilineText(mainText)}
      </h1>

      {/* Children or SubText */}
      {children || (
        <p className="text-[#555555] dark:text-white whitespace-pre-line">
          {renderMultilineText(subText)}
        </p>
      )}
    </div>
  );
}
