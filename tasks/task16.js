import CreateTitle from "../components/TitleComponent.js";

export default {
  title: "Task 16 - Form Validation",
  description: "تعلم كيفية التحقق من صحة البيانات المدخلة في النماذج باستخدام JavaScript لضمان إدخال بيانات صحيحة وسليمة.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task16.js",
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
      "تسجيل دخول",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    

    wrapper.appendChild(title);
    container.appendChild(wrapper);
  },
  code: `{
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
