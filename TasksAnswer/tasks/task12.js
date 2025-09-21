import ButtonComponent from "../../components/Buttons.js";
import CreateTitle from "../../components/TitleComponent.js";
export default {
  title: "Task 12 - Customizable Background Colors",
  description: "تعلم كيفية تغيير لون خلفية الصفحة وحفظ التفضيلات باستخدام JavaScript و localStorage.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task12.js",
  notes: "تمت اضافه اكثر من لون مع امكانيه ارجاع للوضع الافتراضي واضافه لون مخصص ليس موجود ضمن هذه الالوان",
  render: (container) => {
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";
    wrapper.classList.add(localStorage.getItem("selectedColorClass") || "bg-[" + localStorage.getItem("selectedColor") + "]" );
    const title = CreateTitle(
      "مُحدد ألوان الخلفية",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const conatinerCustomColor = document.createElement("div");
    conatinerCustomColor.className = "flex gap-4 items-center w-fit mx-auto";

    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.id = "colorInput";
    colorInput.value = "red";
    colorInput.className =
      "w-12 border rounded  focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto hover:cursor-pointer";

    const labelCustomColor = document.createElement("label");
    labelCustomColor.textContent = "اللون المخصص";
    labelCustomColor.className = "bg-white text-black text-lg font-bold mx-auto px-2 py-1 rounded";
    colorInput.onchange = () => {
      labelCustomColor.textContent = colorInput.value;
      localStorage.setItem("selectedColor", colorInput.value);
      wrapper.classList.add("bg-[" + localStorage.getItem("selectedColor") + "]");
    };
    conatinerCustomColor.appendChild(labelCustomColor);
    conatinerCustomColor.appendChild(colorInput);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "flex gap-4";

    buttons.forEach((button) => {
      const buttonElement = ButtonComponent({
        text: button.name,
        className: ` px-4 py-2 ${button.colorClass} text-white rounded hover:bg-${button.colorClass} h-fit`,
        onClick: () => {
          localStorage.setItem("selectedColor", button.color);
          localStorage.setItem("selectedColorClass", button.colorClass);
          wrapper.classList.remove(
            ...buttons.map((b) => b.colorClass),
            "bg-[" + colorInput.value + "]"
          );
          wrapper.classList.add(localStorage.getItem("selectedColorClass"));
        },
      });
      buttonsContainer.appendChild(buttonElement);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(conatinerCustomColor);

    wrapper.appendChild(buttonsContainer);

    container.appendChild(wrapper);
  },
  code: `{

  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};

const buttons = [
  { name: "احمر", colorClass: "bg-red-500", color: "red" },
  { name: "ازرق", colorClass: "bg-blue-500", color: "blue" },
  { name: "اخضر", colorClass: "bg-green-500", color: "green" },
  { name: "اصفر", colorClass: "bg-yellow-500", color: "yellow" },
  { name: "ذهبي", colorClass: "!bg-amber-500", color: "amber" },
  { name: "وردي", colorClass: "bg-rose-500", color: "rose" },
  { name: "اسود", colorClass: "!bg-black", color: "black" },
  { name: "موقر", colorClass: "bg-gray-500", color: "gray" },
  { name: "ليمون", colorClass: "!bg-lime-500", color: "lime" },
  { name: "زمردي", colorClass: "!bg-emerald-500", color: "emerald" },
  { name: "ارجاع", colorClass: "!bg-none", color: "none" },
];
