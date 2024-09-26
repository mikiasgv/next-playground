"use client";

import { useReducer, useState } from "react";
import taskReducer from "./taskReducer";

export interface Task {
  id: number;
  name: string;
}

const TasksPage = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addNewTask = () => {
    dispatch({
      type: "Add",
      task: { id: Date.now(), name: "Task" + Date.now() },
    });
  };

  const removeTask = (id: number) => {
    dispatch({ type: "Remove", taskId: id });
  };

  return (
    <div className="flex flex-col space-y-6">
      <button onClick={addNewTask}>Add Task</button>
      <div className="w-[80%] flex flex-col border-2 border-sky-500">
        {tasks?.map((task) => (
          <div className="flex justify-between p-2 border-b-2 border-sky-500 last:border-b-0">
            <div>{task.id}</div>
            <div>{task.name}</div>
            <button
              onClick={() => removeTask(task.id)}
              className="bg-red-800 py-4 px-8"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
