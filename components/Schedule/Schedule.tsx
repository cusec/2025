import React, { useState } from "react";
import DaySchedule from "./DaySchedule";
import DayButton from "./DayButton";
import scheduleData from "./Schedule.json";
import careerFairData from "./CareerFair.json";
import { useNav } from "../../components/Navbar/NavContext";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayButtonClick = (index: number) => {
    setSelectedDay(index);
  };

  const { isOpen } = useNav();

  return (
    <div
      className={`container mx-auto p-4 transition-opacity ease-in-out duration-700 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      <h2 className="text-5xl md:text-7xl font-bold purpleText mb-2 pb-6 pt-6 text-center">
        SCHEDULE
      </h2>
      <div className="flex justify-center mb-4">
        {scheduleData.map((day, index) => (
          <DayButton
            key={index}
            titleText={day.Day}
            Day={day.Day}
            Date={day.Date}
            selected={selectedDay === index}
            onDayButtonClick={() => handleDayButtonClick(index)}
          />
        ))}
      </div>
      <DaySchedule
        dayIndex={selectedDay}
        scheduleData={scheduleData}
        careerFairData={careerFairData}
      />
    </div>
  );
};

export default Schedule;
