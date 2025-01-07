import React from "react";

interface DayButtonProps {
  titleText: string;
  Day: string;
  Date: string;
  selected: boolean;
  onDayButtonClick: () => void;
}

const DayButton = ({
  titleText,
  Day,
  Date,
  selected,
  onDayButtonClick,
}: DayButtonProps) => {
  return (
    <button
      style={{
        background: selected ? "var(--button-gradient-color)" : "#F7F7F7",
      }}
      className={`flex flex-col items-center justify-center px-4 sm:px-8 py-5 rounded-lg mx-2 RobotoText text-lg ${
        selected ? "text-gray-600" : "text-gray-600"
      }`}
      onClick={onDayButtonClick}
    >
      <span className="font-bold">{Day}</span>
      <span className="text-sm">{Date}</span>
    </button>
  );
};

export default DayButton;
