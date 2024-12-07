import React from "react";

const TicketDetailChart = () => {
  return (
    <div className="w-2/3 bg-white shadow rounded p-4">
      <h3 className="text-lg font-bold mb-4">Ticket Detail</h3>
      <div className="relative h-56  w-100">
        {/* Placeholder untuk chart batang */}
        <div className="flex justify-around items-end h-full">
          {["ASA", "AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG"].map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-blue-500 w-20"
                style={{ height: `${Math.random() * 100}px` }}
              />
              <span className="text-sm mt-2">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketDetailChart;
