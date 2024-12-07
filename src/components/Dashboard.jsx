import React from "react";
import TicketDetailChart from "./TicketDetailChart";
import TicketStatusPie from "./TicketStatusPie";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <main className="p-6 w-full h-3/4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard APS</h2>
        <h6 className="mb-2">Filter Tanggal :</h6>
        <div className="flex gap-4">
          <input
            type="date"
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="date"
            className="border px-4 py-2 rounded-md"
          />
          <button className="bg-gray-200 px-4 py-2 rounded-md">Search</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">Reset</button>
        </div>
      </div>
      <div className="flex gap-6 h-2/4 w-full">
        <TicketStatusPie />
        <TicketDetailChart />
      </div>
    </main>
  );
};

export default Dashboard;
