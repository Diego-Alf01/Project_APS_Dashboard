import React from "react";

const TicketStatusPie = () => {
  return (
    <div className="w-1/3 bg-white shadow rounded p-4">
      <h3 className="text-lg font-bold mb-4">Ticket Status</h3>
      <div className="w-full h-56">
        {/* Placeholder untuk chart pie */}
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <circle
            r="16"
            cx="16"
            cy="16"
            className="fill-blue-500"
            strokeDasharray="52.1 47.9"
            strokeWidth="32"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            className="fill-green-400"
            strokeDasharray="22.8 77.2"
            strokeWidth="32"
            strokeDashoffset="52.1"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            className="fill-yellow-500"
            strokeDasharray="13.9 86.1"
            strokeWidth="32"
            strokeDashoffset="75"
          />
          <circle
            r="16"
            cx="16"
            cy="16"
            className="fill-red-500"
            strokeDasharray="11.2 88.8"
            strokeWidth="32"
            strokeDashoffset="88.9"
          />
        </svg>
      </div>
    </div>
  );
};

export default TicketStatusPie;
