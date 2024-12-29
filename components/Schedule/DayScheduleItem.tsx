import React from 'react';

interface DayScheduleItemProps {
  item: any;
}

const DayScheduleItem = ({ item }: DayScheduleItemProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-gray-600">{item.location}</p>
      <p className="text-gray-600">{item.start_time} - {item.end_time}</p>
      {item.speaker && <p className="text-gray-600">Speaker: {item.speaker}</p>}
    </div>
  );
};

export default DayScheduleItem;