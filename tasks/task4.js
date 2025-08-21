import CreateTitle from "../components/TitleComponent.js";

export default {
  title: "Task 4 - Interactive Task List",
  description:"تعلم كيفية بناء قائمة مهام تفاعلية باستخدام JavaScript مع تطبيق مبادئ إدارة الحالة والتفاعلات الديناميكية.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task3.js",
  notes: " ",

  // Renders UI for this task
  render: (container) => {
    container.innerHTML = ""; // clear previous content
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-2xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg";
    wrapper.style.direction = "rtl"; // Set text direction to right-to-left
    wrapper.style.fontFamily = "Arial, sans-serif"; // Set a default font family

    const title = CreateTitle(
      "قائمة المهام التفاعلية",
      "text-2xl font-bold mb-4 text-center",
      "h1"
    );
    wrapper.appendChild(title);
    container.appendChild(wrapper);

  },

  // Code snippet for display
  code: ``,
 directionDescription: "rtl",
};

