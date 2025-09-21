import CreateTitle from "../../components/TitleComponent.js";

export default {
  title: "Task 15 - Text Manipulation",
  description: "تعلم تقنيات معالجة النصوص في JavaScript مع التركيز على إزالة المسافات الزائدة، الترميز الخاص، والرموز غير المرغوب فيها، مع تطبيق عملي مباشر.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task15.js",
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
      "تنسيق النصوص ازاله المسافات الزائدة والترميز الخاص",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "ادخل النص هنا";
    input.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    input.style.direction = "rtl";
    input.style.fontFamily = "Arial, sans-serif";

    const output = document.createElement("p");
    output.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    output.style.direction = "rtl";
    output.style.fontFamily = "Arial, sans-serif";

    const buttonClearText = document.createElement("button");
    buttonClearText.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mx-auto";
    buttonClearText.innerText = "تنظيف النص";
    buttonClearText.addEventListener("click", () => {

        // adding the regular expression that remove the spaces in the text and any character that not number or alphabet
        const trimmedText = input.value.trim().replace( /\s+/g, '').replace(/[^a-zA-Z0-9-\u0600-\u06FF]/g, '')
        output.innerText = trimmedText;
    });
    
    
    wrapper.appendChild(title);
    wrapper.appendChild(input);
    wrapper.appendChild(output);
    wrapper.appendChild(buttonClearText);
    container.appendChild(wrapper);
  },
  code: `{
   container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "تنسيق النصوص ازاله المسافات الزائدة والترميز الخاص",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "ادخل النص هنا";
    input.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    input.style.direction = "rtl";
    input.style.fontFamily = "Arial, sans-serif";

    const output = document.createElement("p");
    output.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    output.style.direction = "rtl";
    output.style.fontFamily = "Arial, sans-serif";

    const buttonClearText = document.createElement("button");
    buttonClearText.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mx-auto";
    buttonClearText.innerText = "تنظيف النص";
    buttonClearText.addEventListener("click", () => {
      
        // adding the regular expression that remove the spaces in the text and any character that not number or alphabet
        const trimmedText = input.value.trim().replace( /\s+/g, '').replace(/[^a-zA-Z0-9-\u0600-\u06FF]/g, '')
        output.innerText = trimmedText;
    });
    
    
    wrapper.appendChild(title);
    wrapper.appendChild(input);
    wrapper.appendChild(output);
    wrapper.appendChild(buttonClearText);
    container.appendChild(wrapper);
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
