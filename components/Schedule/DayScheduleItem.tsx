import React from 'react';

interface DayScheduleItemProps {
  item: any;
}

const DayScheduleItem = ({ item }: DayScheduleItemProps) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between">
        <p className="text-lg font-bold">{item.start_time}</p>
        <p className="text-lg font-bold">{item.end_time}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">{item.title}</p>
        <p className="text-lg">{item.location}</p>
      </div>
    </div>
  );
};

export default DayScheduleItem;