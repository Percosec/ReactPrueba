import { createContext } from "react";
import { useState, useEffect } from "react";
import tasks from "../data/tasks";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

// eslint-disable-next-line react/prop-types
export function TaskContextProvider({ children }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(tasks);
  }, []);

  function createTask(task) {
    setdata([
      ...data,
      {
        title: task.title,
        id: data.length + 1,
        description: task.description,
      },
    ]);
  }

  function deleteTask(task) {
    setdata(data.filter((item) => item.id !== task));
  }

  return (
    <TaskContext.Provider
      value={{
        data,
        createTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
