import React, { useState } from 'react';
import DaySchedule from './DaySchedule';
import DayButton from './DayButton';
import scheduleData from './schedule.json';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDayButtonClick = (index: number) => {
    setSelectedDay(index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Schedule</h1>
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
      <DaySchedule dayIndex={selectedDay} scheduleData={scheduleData} />
    </div>
  );
};

export default Schedule;