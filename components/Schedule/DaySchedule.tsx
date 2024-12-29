import React from 'react';
import scheduleData from './schedule.json';

interface DayScheduleProps {
  dayIndex: number;
  scheduleData: any[];
}


const DaySchedule = ({ dayIndex }: DayScheduleProps) => {
  const day = scheduleData[dayIndex];
  const colors = [
    'border-royalPurple',
    'border-roseQuartz',
    'border-goldenApricot',
  ];

  const renderTimeColumn = (item: any) => (
    <div className="flex flex-col justify-center pr-4 border-r-2 md:border-r-[3px] xs:text-[20px]">
      <span>{item.start_time}</span>
      <span>{item.end_time}</span>
    </div>
  );

  const renderEventInfo = (item: any, index: number) => (
    <div
      className={`flex flex-col md:pl-10 justify-center break-words sm272:break-normal ${colors[
        index % colors.length
      ]}`}
    >
      <h3 className="font-semibold text-[14px] xs:text-[16px] sm:text-[24px]">
        {item.title}
      </h3>
      <p className="text-zinc-500 text-[14px] xs:text-[16px] sm:text-[24px]">
        {item.location}
      </p>
    </div>
  );

  return (
    <div className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-lg py-5 px-6">
        <h2 className="text-[16px] md:text-[30px]">
          <span className="font-semibold">{day.Date}, </span>
          <span>{day.Day}</span>
        </h2>
        {day.items.map((item, index) => (
          <div key={index} className="grid grid-cols-[minmax(50px,_1fr)_10fr] xs:grid-cols-[minmax(70px,_1fr)_10fr] sm:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4 my-6">
            {renderTimeColumn(item)}
            {renderEventInfo(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySchedule;