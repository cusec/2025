import React from 'react';
import DayScheduleItem from './DayScheduleItem';

interface DayScheduleProps {
  dayIndex: number;
  scheduleData: any[];
}

const DaySchedule = ({ dayIndex, scheduleData }: DayScheduleProps) => {
  const day = scheduleData[dayIndex];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{day.Day} - {day.Date}</h2>
      {day.items.map((item: any, index: React.Key | null | undefined) => (
        <DayScheduleItem key={index} item={item} />
      ))}
    </div>
  );
};

export default DaySchedule;