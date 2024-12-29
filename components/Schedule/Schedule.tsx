import React from "react";
import "../../app/globals.css";

const Schedule: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="content-container w-11/12 sm:w-8/12 md:w-9/12 lg:w-4/5 p-8 rounded-lg mt-10">
        <h1 className="text-4xl purpleText font-bold mb-6 text-left">
          Schedule
        </h1>
        <p className="textFont mb-4 text-left">
          The schedule for CUSEC 2025 will be released soon! Stay tuned for more
          updates.
        </p>
      </div>
    </div>
  );
};

export default Schedule;
