import React from 'react';

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
      className={`px-4 py-2 rounded-lg ${
        selected ? 'bg-purple-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      onClick={onDayButtonClick}
    >
      <span className="text-lg font-bold">{Day}</span>
      <br />
      <span className="text-sm">{Date}</span>
    </button>
  );
};

export default DayButton;