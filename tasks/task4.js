import ButtonComponent from "../components/Buttons.js";
import InputComponent from "../components/InputComponent.js";
import CreateTitle from "../components/TitleComponent.js";

export default {
  title: "Task 4 - Interactive Task List",
  description:
    "تعلم كيفية بناء قائمة مهام تفاعلية باستخدام JavaScript مع تطبيق مبادئ إدارة الحالة والتفاعلات الديناميكية.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task4.js",
  notes: "تم اضافه اكثر من اضافه مثل اتاحه التعديل علي المهمه وامكانيه التراجع عليها وحذفها  والتعديل عليها",

  // Renders UI for this task
  render: (container) => {
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-2xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "قائمة المهام التفاعلية",
      "text-2xl font-bold mb-4 text-center",
      "h1"
    );
    const inputTask = InputComponent({
      type: "text",
      placeholder: "أدخل مهمة جديدة",
      className:
        "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
      value: "",
    });

    const taskList = document.createElement("ul");
    taskList.className = "mt-4 list-none pl-5";
    taskList.style.direction = "rtl";

    const addButton = ButtonComponent({
      text: "إضافة مهمة",
      className: "mt-4",
      onClick: () => {
        const taskText = inputTask.value.trim();
        if (taskText) {
          const listItem = document.createElement("li");
          listItem.className =
            "flex  items-center mb-2 px-4 py-2 bg-gray-100 rounded";

          const titleListItem = document.createElement("span");
          titleListItem.innerText = taskText;
          titleListItem.className = "font-bold w-full";

          const deleteButton = document.createElement("button");
          deleteButton.id = "deleteButton";
          deleteButton.innerText = "حذف";
          deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded";
          deleteButton.addEventListener("click", () => {
            listItem.remove();
          });

          const updateButton = document.createElement("button");
          updateButton.id = "updateButton";
          updateButton.innerText = "تعديل";
          updateButton.className =
            "bg-blue-500 text-white px-2 py-1 rounded mx-2";
          updateButton.addEventListener("click", () => {
            const updatedTask = prompt("قم بتعديل المهمة:", taskText);
            if (updatedTask) {
              listItem.querySelector("span").innerText = updatedTask;
            }
          });

          const completedButton = document.createElement("button");
          completedButton.id = "completedButton";
          completedButton.innerText = "انهاء";
          completedButton.className =
            "bg-green-500 text-white px-2 py-1 rounded mx-2 text-nowrap";
          completedButton.addEventListener("click", () => {
            listItem.querySelector("span").classList.toggle("line-through");
            const buttons = listItem.querySelectorAll("button");
            buttons.forEach((button) => {
              if (button.id === "completedButton") {
                button.innerText =
                  button.innerText === "انهاء" ? "تراجع" : "انهاء";
                button.classList.toggle("bg-gray-500");
                updateButton.toggleAttribute(
                  "disabled",
                  !updateButton.disabled
                );
                updateButton.classList.toggle("opacity-50");
              }
            });
          });

          listItem.appendChild(titleListItem);
          listItem.appendChild(completedButton);
          listItem.appendChild(updateButton);
          listItem.appendChild(deleteButton);
          taskList.appendChild(listItem);
          inputTask.value = "";
        } else {
          alert("الرجاء إدخال مهمة صحيحة.");
        }
      },
    });

    wrapper.appendChild(title);
    wrapper.appendChild(inputTask);
    wrapper.appendChild(addButton);

    wrapper.appendChild(taskList);
    container.appendChild(wrapper);
  },

  // Code snippet for display
  code: `
   {
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-2xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "قائمة المهام التفاعلية",
      "text-2xl font-bold mb-4 text-center",
      "h1"
    );
    const inputTask = InputComponent({
      type: "text",
      placeholder: "أدخل مهمة جديدة",
      className:
        "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
      value: "",
    });

    const taskList = document.createElement("ul");
    taskList.className = "mt-4 list-none pl-5";
    taskList.style.direction = "rtl";

    const addButton = ButtonComponent({
      text: "إضافة مهمة",
      className: "mt-4",
      onClick: () => {
        const taskText = inputTask.value.trim();
        if (taskText) {
          const listItem = document.createElement("li");
          listItem.className =
            "flex  items-center mb-2 px-4 py-2 bg-gray-100 rounded";

          const titleListItem = document.createElement("span");
          titleListItem.innerText = taskText;
          titleListItem.className = "font-bold w-full";

          const deleteButton = document.createElement("button");
          deleteButton.id = "deleteButton";
          deleteButton.innerText = "حذف";
          deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded";
          deleteButton.addEventListener("click", () => {
            listItem.remove();
          });

          const updateButton = document.createElement("button");
          updateButton.id = "updateButton";
          updateButton.innerText = "تعديل";
          updateButton.className =
            "bg-blue-500 text-white px-2 py-1 rounded mx-2";
          updateButton.addEventListener("click", () => {
            const updatedTask = prompt("قم بتعديل المهمة:", taskText);
            if (updatedTask) {
              listItem.querySelector("span").innerText = updatedTask;
            }
          });

          const completedButton = document.createElement("button");
          completedButton.id = "completedButton";
          completedButton.innerText = "انهاء";
          completedButton.className =
            "bg-green-500 text-white px-2 py-1 rounded mx-2 text-nowrap";
          completedButton.addEventListener("click", () => {
            listItem.querySelector("span").classList.toggle("line-through");
            const buttons = listItem.querySelectorAll("button");
            buttons.forEach((button) => {
              if (button.id === "completedButton") {
                button.innerText =
                  button.innerText === "انهاء" ? "تراجع" : "انهاء";
                button.classList.toggle("bg-gray-500");
                updateButton.toggleAttribute(
                  "disabled",
                  !updateButton.disabled
                );
                updateButton.classList.toggle("opacity-50");
              }
            });
          });

          listItem.appendChild(titleListItem);
          listItem.appendChild(completedButton);
          listItem.appendChild(updateButton);
          listItem.appendChild(deleteButton);
          taskList.appendChild(listItem);
          inputTask.value = "";
        } else {
          alert("الرجاء إدخال مهمة صحيحة.");
        }
      },
    });

    wrapper.appendChild(title);
    wrapper.appendChild(inputTask);
    wrapper.appendChild(addButton);

    wrapper.appendChild(taskList);
    container.appendChild(wrapper);
  }
  `,
  directionDescription: "rtl",
};

const taskListData = [];
