import ButtonComponent from "../../components/Buttons.js";
import CreateTitle from "../../components/TitleComponent.js";
import NotificationsMessage, {
  CustomNotificationMessage,
} from "../../components/NotificationsMessage.js";
const personData = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  lang: ["English", "Spanish"],
  isMarried: true,
  children: [],
  job: "Engineer",
};
export default {
  title: "Task 13 - display message for person to welcome ",
  description:
    "تعلم استخدام خاصية Destructuring في JavaScript للتعامل مع الكائنات (Objects) بشكل أكثر كفاءة وسهولة، مع التركيز على استخراج البيانات المتداخلة والقيم الافتراضية.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task13.js",
  notes:
    "تظهر الرساله الترحيبيه كأشعار في منتصف الشاشه",
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
      "عرض تطبيقي",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const personDataContainer = document.createElement("div");
    personDataContainer.className = "flex flex-col gap-2";
    const {
      name: namePerson,
      age,
      address: { street, city, state, zip },
      lang,
      isMarried,
      children,
      job,
    } = personData;
    personDataContainer.innerHTML = `
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الاسم: ${namePerson}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> العمر: ${age}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> العنوان: ${street}, ${city}, ${state}, ${zip}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> اللغة المفضلة: ${lang.join(
                  ", "
                )}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الحالة الاجتماعية: ${
                  isMarried ? "متزوج" : "غير متزوج"
                }</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الاطفال: ${
                  children.length > 0 ? children.join(", ") : "لا يوجد اطفال"
                }</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الوظيفة: ${job}</p>
            </div>
        `;
    const buttonShowMessage = ButtonComponent({
      text: " رسالة الترحيب",
      className:
        "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-fit",
      onClick: () => {
        const message = `<div dir="rtl" class="text-white   font-semibold  flex flex-col gap-2">
       <p>مرحبا <span class="text-green-600 font-bold text-xl">${namePerson} </span> عمرك <span class="text-green-600 font-bold text-xl">${age} </span> سنة  وظيفتك <span class="text-green-600 font-bold text-xl">${job} </span></p></div>`;

        new CustomNotificationMessage(
          message,
          5000,
          "right-1/2  translate-x-1/2 w-fit "
        );
      },
    });
    wrapper.appendChild(title);
    wrapper.appendChild(personDataContainer);
    wrapper.appendChild(buttonShowMessage);
    container.appendChild(wrapper);
  },
  code: `{
const personData = { 
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  lang: ["English", "Spanish"],
  isMarried: true,
  children: [],
  job: "Engineer",
};


    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "عرض تطبيقي",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const personDataContainer = document.createElement("div");
    personDataContainer.className = "flex flex-col gap-2";
    const {
      name: namePerson,
      age,
      address: { street, city, state, zip },
      lang,
      isMarried,
      children,
      job,
    } = personData;
    personDataContainer.innerHTML = \`
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الاسم: \${namePerson}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> العمر: \${age}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> العنوان: \${street}, \${city}, \${state}, \${zip}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> اللغة المفضلة: \${lang.join(
                  ", "
                )}</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الحالة الاجتماعية: \${
                  isMarried ? "متزوج" : "غير متزوج"
                }</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الاطفال: \${
                  children.length > 0 ? children.join(", ") : "لا يوجد اطفال"
                }</p>
            </div>
            <div class="flex gap-2 ">
                <p class="text-gray-600 text-xl font-bold"> الوظيفة: \${job}</p>
            </div>
        \`;
    const buttonShowMessage = ButtonComponent({
      text: " رسالة الترحيب",
      className:
        "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-fit",
      onClick: () => {
        const message = \`<div dir="rtl" class="text-white   font-semibold  flex flex-col gap-2">
       <p>مرحبا <span class="text-green-600 font-bold text-xl">\${namePerson} </span> عمرك <span class="text-green-600 font-bold text-xl">\${age} </span> سنة  <span class="text-green-600 font-bold text-xl">\${job} </span></p></div>\`;

        new CustomNotificationMessage(
          message,
          5000,
          "right-1/2  translate-x-1/2 w-fit "
        );
      },
    });
    wrapper.appendChild(title);
    wrapper.appendChild(personDataContainer);
    wrapper.appendChild(buttonShowMessage);
    container.appendChild(wrapper);
  
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
