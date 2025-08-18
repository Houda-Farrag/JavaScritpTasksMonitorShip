import tasks from "./tasks/index.js"; // imports all tasks
import TaskList from "./components/TaskList.js";
import TaskViewer from "./components/TaskViewer.js";

const sidebar = document.getElementById("sidebar2");
const content = document.getElementById("content");

TaskList(sidebar, tasks, (task) => {
  TaskViewer(content, task , task.directionDescription || "ltr");
});