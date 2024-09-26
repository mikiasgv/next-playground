import { Task } from "./page";

interface AddAction {
  type: "Add";
  task: Task;
}

interface RemoveAction {
  type: "Remove";
  taskId: number;
}

type TaskAction = AddAction | RemoveAction;

const taskReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case "Add":
      return [action.task, ...tasks];
    case "Remove":
      return tasks.filter((task) => task.id !== action.taskId);
  }
};

export default taskReducer;
