import React from 'react';
import scheduleData from './schedule.json';

interface DayScheduleProps {
  dayIndex: number;
  scheduleData: any[];
}

const DaySchedule = ({ dayIndex, scheduleData }: DayScheduleProps) => {
  const day = scheduleData[dayIndex];

  const renderTimeColumn = (item: any, index: any) => {
    let borderColorClass;
  
    switch (item.category) {
      case '1':
        borderColorClass = 'border-[#EDB6E3]';
        break;
      case '2':
        borderColorClass = 'border-[#6C6BD1]';
        break;
      case '3':
        borderColorClass = 'border-[rgba(200, 195, 255, 0.975)]';
        break;
      default:
        borderColorClass = 'border-[#CBF7F8]';
    }
  
    return (
        <div
          className={`flex flex-col justify-center pr-4 border-r-2 ${borderColorClass} md:border-r-[3px] xs:text-[20px] RobotoText`}
        >
          <span>{item.start_time}</span>
          <span>{item.end_time}</span>
        </div>
      );
  };

  const renderEventInfo = (item: any, index: any) => {
    let borderColorClass;
  
    switch (item.category) {
      case '1':
        borderColorClass = 'border-[#EDB6E3]';
        break;
      case '2':
        borderColorClass = 'border-[#6C6BD1]';
        break;
      case '3':
        borderColorClass = 'border-[rgba(200, 195, 255, 0.975)]';
        break;
      default:
        borderColorClass = 'border-[#CBF7F8]';
    }
  
    if (item.items) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {item.items.map((subItem: { title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; location: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, subIndex: React.Key | null | undefined) => (
            <div
              key={subIndex}
              className={`flex flex-col md:pl-10 justify-center break-words sm272:break-normal ${borderColorClass} RobotoText ${
                subIndex === 0 ? '' : `border-l-2 ${borderColorClass.replace('border-', 'md:border-')}`
              }`}
            >
              <h3 className="font-semibold text-[14px] xs:text-[16px] sm:text-[24px]">
                {subItem.title}
              </h3>
              <p className="text-zinc-500 text-[14px] xs:text-[16px] sm:text-[24px]">
                {subItem.location}
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div
          className={`flex flex-col md:pl-10 justify-center break-words sm272:break-normal ${borderColorClass} RobotoText`}
        >
          <h3 className="font-semibold text-[14px] xs:text-[16px] sm:text-[24px]">
            {item.title}
          </h3>
          <p className="text-zinc-500 text-[14px] xs:text-[16px] sm:text-[24px]">
            {item.location}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-lg py-5 px-6">
        <h2 className="text-[48px] md:text-[30px] RobotoText">
          <span className="font-semibold">{day.Date}, </span>
          <span>{day.Day}</span>
        </h2>
        {day.items.map((item: any, index: React.Key | null | undefined) => (
          <div key={index} className="grid grid-cols-[minmax(50px,_1fr)_10fr] xs:grid-cols-[minmax(70px,_1fr)_10fr] sm:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4 my-6">
            {renderTimeColumn(item, index)}
            {renderEventInfo(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySchedule;