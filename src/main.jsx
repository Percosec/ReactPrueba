import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import App from "./App.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>
);
