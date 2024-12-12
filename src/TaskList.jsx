import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "./context/TaskContext";

export function TaskList() {
  const { data } = useContext(TaskContext);

  if (data.length === 0) {
    return (
      <h1 className=" font-bold text-4xl text-white text-center">
        No tiene tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {data.map((item) => (
        <TaskCard key={item.id} task={item} />
      ))}
    </div>
  );
}
