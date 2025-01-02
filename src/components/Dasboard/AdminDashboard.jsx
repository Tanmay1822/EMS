import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard({changeUser}) {
  return (
    <div className="p-7 h-screen w-screen bg-[#1C1C1C]">
      <Header changeUser={changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashboard;
