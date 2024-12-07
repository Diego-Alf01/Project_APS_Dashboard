import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-100 h-screen">
      <div className="w-full h-20 bg-gray-200 mt-2">
      <ul className="p-3">
          <li className=" text-gray-900 font-semibold mt-2">
            <h4 className="text-xl">Dashboard</h4>
            </li>
          {/* Tambahkan menu lainnya jika diperlukan */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
