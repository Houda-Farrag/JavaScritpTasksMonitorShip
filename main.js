import tasks from "./tasks/index.js"; // imports all tasks
import TaskList from "./components/TaskList.js";
import TaskViewer from "./components/TaskViewer.js";


// const themeToggleBtn = document.getElementById("theme-toggle");

// function setTheme(theme) {
//   document.documentElement.classList.toggle("dark", theme === "dark");
//   localStorage.theme = theme;
// }

// themeToggleBtn.addEventListener("click", () => {
//   const currentTheme = localStorage.theme === "dark" ? "light" : "dark";
//   setTheme(currentTheme);
// });

// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const savedTheme = localStorage.theme || (prefersDark ? "dark" : "light");
// setTheme(savedTheme);

const sidebar = document.getElementById("sidebar2");
const content = document.getElementById("content");

TaskList(sidebar, tasks, (task) => {
  TaskViewer(content, task , task.directionDescription || "ltr");
});

