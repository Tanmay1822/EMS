import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className="w-full h-[45%] py-5 mt-10 flex justify-start items-center gap-5 flex-nowrap overflow-x-auto "
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask   key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask  key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask  key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask  key={idx} data={elem} />;
        }
      })}
    </div>
  );
}

export default TaskList;
