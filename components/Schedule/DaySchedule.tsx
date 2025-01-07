import React from "react";
// import scheduleData from './schedule.json';
import careerFairData from "./CareerFair.json";

interface DayScheduleProps {
  dayIndex: number;
  scheduleData: any[];
  careerFairData: any[];
}

const DaySchedule = ({
  dayIndex,
  scheduleData,
  careerFairData,
}: DayScheduleProps) => {
  const daySchedule = scheduleData[dayIndex];
  const dayCareerFair = careerFairData[dayIndex];

  const renderTimeColumn = (item: any, index: any) => {
    let borderColorClass;

    switch (item.category) {
      case "1":
        borderColorClass = "border-[#EDB6E3]";
        break;
      case "2":
        borderColorClass = "border-[#6C6BD1]";
        break;
      case "3":
        borderColorClass = "border-[rgba(200, 195, 255, 0.975)]";
        break;
      default:
        borderColorClass = "border-[#CBF7F8]";
    }

    if (item.items) {
      return (
        <div
          className={`flex flex-col pl-2 md:pl-0 justify-center md:pr-4 border-r-2 ${borderColorClass} md:border-r-[3px] text-xs md:text-base lg:text-lg lgbotoText`}
        >
          <span>{item.start_time}</span>
          <span>{item.end_time}</span>
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col pl-2 md:pl-0 justify-center md:pr-4 border-r-2 ${borderColorClass} md:border-r-[3px] text-xs md:text-base lg:text-lg lgbotoText`}
      >
        <span>{item.start_time}</span>
        <span>{item.end_time}</span>
      </div>
    );
  };

  const renderEventInfo = (item: any, index: any) => {
    let borderColorClass;

    switch (item.category) {
      case "1":
        borderColorClass = "border-[#EDB6E3]";
        break;
      case "2":
        borderColorClass = "border-[#6C6BD1]";
        break;
      case "3":
        borderColorClass = "border-[rgba(200, 195, 255, 0.975)]";
        break;
      default:
        borderColorClass = "border-[#CBF7F8]";
    }

    if (item.items) {
      return (
        <div
          className={`flex flex-col lg:pl-10 justify-center break-words sm272:break-normal ${borderColorClass} RobotoText`}
        >
          {item.items.map((subItem: any, subIndex: any) => (
            <div key={subIndex}>
              <h3 className="font-semibold text-base md:text-lg lg:text-[24px]">
                {subItem.title}
              </h3>
              <p className="text-zinc-500 text-base md:text-lg lg:text-[24px]">
                {subItem.location}
              </p>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div
        className={`flex flex-col lg:pl-10 justify-center break-words sm272:break-normal ${borderColorClass} RobotoText`}
      >
        {item.speaker ? (
          <>
            <h3 className="font-semibold text-base md:text-lg lg:text-[24px]">
              {item.speaker}
            </h3>
            <p className="text-zinc-500 text-base md:text-lg lg:text-[24px]">
              {item.title}
            </p>
          </>
        ) : (
          <h3 className="font-semibold text-base md:text-lg lg:text-[24px]">
            {item.title}
          </h3>
        )}
        <p className="text-zinc-500 text-sm md::text-base lg:text-2xl">
          {item.location}
        </p>
      </div>
    );
  };

  const renderCareerFairTimeColumn = (item: any, index: any) => {
    let borderColorClass;

    switch (item.category) {
      case "1":
        borderColorClass = "border-[#EDB6E3]";
        break;
      case "2":
        borderColorClass = "border-[#6C6BD1]";
        break;
      case "3":
        borderColorClass = "border-[rgba(200, 195, 255, 0.975)]";
        break;
      default:
        borderColorClass = "border-[#CBF7F8]";
    }

    if (item.title === "") {
      return (
        <div
          className={`flex flex-col justify-center pr-4 border-r-2 md:border-r-[3px] md:text-lg lgbotoText h-[50px] invisible`}
        />
      );
    }

    return (
      <div
        className={`flex flex-col pl-4 md:pl-0 justify-center md:pr-4 border-r-2 ${borderColorClass} md:border-r-[3px] text-xs md:text-base lg:text-lg lgbotoText`}
      >
        <span>{item.start_time}</span>
        <span>{item.end_time}</span>
      </div>
    );
  };

  const renderCareerFairEventInfo = (item: any, index: any) => {
    let borderColorClass;

    switch (item.category) {
      case "1":
        borderColorClass = "border-[#EDB6E3]";
        break;
      case "2":
        borderColorClass = "border-[#6C6BD1]";
        break;
      case "3":
        borderColorClass = "border-[rgba(200, 195, 255, 0.975)]";
        break;
      default:
        borderColorClass = "border-[#CBF7F8]";
    }

    if (item.title === "") {
      return (
        <div
          className={`grid grid-cols-[minmax(50px,_1fr)_10fr] xs:grid-cols-[minmax(70px,_1fr)_10fr] sm:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4 my-6 h-[${
            item.row_span * 100
          }px] invisible`}
        />
      );
    }

    return (
      <div
        className={`flex flex-col md:pl-5 lg:pl-10 justify-center break-words sm:break-normal ${borderColorClass} RobotoText sm:grid sm:grid-cols-[minmax(50px,_1fr)_10fr] md:grid-cols-[minmax(70px,_1fr)_10fr] lg:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-4 my-6`}
        style={{ minHeight: `${item.row_span * 100}px` }}
      >
        <h3 className="font-semibold text-sm md::text-base lg:text-2xl">
          {item.title}
        </h3>
        <p className="text-zinc-500 text-sm md::text-base lg:text-2xl">
          {item.location}
        </p>
      </div>
    );
  };

  return (
    <div className="my-10 rounded-lg bg-gradient-to-r from-royalPurple via-roseQuartz to-goldenApricot p-[2px] shadow-[0_0px_8px_rgba(0,0,0,0.5)]">
      <div className="bg-white rounded-lg py-5 px-3 md:px-6 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[48px] RobotoText">
            <span className="font-semibold">{daySchedule.Date}, </span>
            <span>{daySchedule.Day}</span>
          </h2>
          {daySchedule.items.map(
            (item: any, index: React.Key | null | undefined) => (
              <div
                key={index}
                className="grid grid-cols-[minmax(50px,_1fr)_10fr] xs:grid-cols-[minmax(70px,_1fr)_10fr] sm:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-3 md:gap-4 my-6"
              >
                {renderTimeColumn(item, index)}
                {renderEventInfo(item, index)}
              </div>
            )
          )}
        </div>
        <div>
          {dayCareerFair.items.map(
            (item: any, index: React.Key | null | undefined) => (
              <div
                key={index}
                className="grid grid-cols-[minmax(50px,_1fr)_10fr] xs:grid-cols-[minmax(70px,_1fr)_10fr] sm:grid-cols-[minmax(100px,_1.5fr)_10fr] gap-3 md:gap-4 my-6"
              >
                {renderCareerFairTimeColumn(item, index)}
                {renderCareerFairEventInfo(item, index)}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DaySchedule;
