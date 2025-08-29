import CreateTitle from "../components/TitleComponent.js";
export default {
  title: "Task 10 - ",
  description:
    "",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task10.js",
  notes: "",
  render: (container) => {
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";
    
    const title = CreateTitle(
      "",
      "text-2xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white  ",
      "h1"
    );
    wrapper.appendChild(title);
    container.appendChild(wrapper);
  },
  code: `{

  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
