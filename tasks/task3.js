import CreateTitle from "../components/TitleComponent.js";

export default {
  title: "Task 3 - Dayes Weak verfiyication",
  description:
    "تعلم كيفية التحقق من صحة مدخلات المستخدم في JavaScript باستخدام نموذج بسيط للتحقق من الأيام. ستقوم بإنشاء واجهة مستخدم تفاعلية تسمح للمستخدم بإدخال يومه المفضل وعرض رسالة مخصصة بناءً على ذلك.",
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
    container.appendChild(wrapper);

    // const title = document.createElement("h2");
    // title.textContent = "ما هو يومك المفضل؟";
    // title.className = "text-2xl font-bold mb-4 text-center font-font-arabic";
    const title = CreateTitle(
      "ما هو يومك المفضل؟",
      "text-2xl font-bold mb-4 text-center font-font-arabic",
      "h2"
    );
    const inputDay = document.createElement("input");
    inputDay.type = "text";
    inputDay.placeholder = "ادخل يومك المفضل";
    inputDay.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const showMessage = document.createElement("p");
    showMessage.className =
      "text-lg text-gray-700  animate-fade-in mt-4 border p-4 rounded max-w-2xl mx-auto hidden";
    showMessage.innerText = "";
    showMessage.style.animation = "fade-in 0.5s ease-in-out";
    showMessage.dir = "rtl"; // Set text direction for Arabic

    const button = document.createElement("button");
    button.textContent = "تحقق";
    button.className =
      "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mx-auto w-1/2 block";
    button.addEventListener("click", () => {
      const day = inputDay.value;
      const dayData = Dayes.find(
        (d) =>
          d.nameAr === day ||
          d.nameEn.toLowerCase() === day.toLowerCase() ||
          d.otherCaseNameAr.includes(day)
      );
      showMessage.style.display = "block"; // Show message when button is clicked
      if (dayData) {
        showMessage.classList.add(
          "animate-fade-in",
          "text-green-500",
          "border-green-500"
        );
        showMessage.innerText = dayData.messageOfDay.ar;
      } else if (day === "") {
        showMessage.classList.add(
          "animate-fade-in",
          "text-red-500",
          "border-red-500"
        );
        showMessage.innerText = "الرجاء إدخال يوم";
      } else if (dayData === undefined) {
        showMessage.classList.add(
          "animate-fade-in",
          "text-red-500",
          "border-red-500"
        );
        showMessage.innerText = "اليوم غير موجود في الأسبوع";
      } else {
        showMessage.classList.add(
          "animate-fade-in",
          "text-red-500",
          "border-red-500"
        );
        showMessage.innerText = "اليوم غير صحيح";
      }
    });

    inputDay.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        button.click();
      }
    });

    inputDay.addEventListener("input", () => {
      showMessage.style.display = "none"; // Hide message when input changes
    });

    wrapper.appendChild(title);
    wrapper.appendChild(inputDay);
    wrapper.appendChild(button);
    container.appendChild(showMessage);
  },

  // Code snippet for display
  code: `
  {
   container.innerHTML = ""; // clear previous content
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-2xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg";
    wrapper.style.direction = "rtl"; // Set text direction to right-to-left
    wrapper.style.fontFamily = "Arial, sans-serif"; // Set a default font family
    container.appendChild(wrapper);

    const title = document.createElement("h2");
    title.textContent = "ما هو يومك المفضل؟";
    title.className = "text-2xl font-bold mb-4 text-center font-font-arabic";

    const inputDay = document.createElement("input");
    inputDay.type = "text";
    inputDay.placeholder = "ادخل يومك المفضل";
    inputDay.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const showMessage = document.createElement("p");
    showMessage.className =
      "text-lg text-gray-700  animate-fade-in mt-4 border p-4 rounded max-w-2xl mx-auto hidden";
    showMessage.innerText = "";
    showMessage.style.animation = "fade-in 0.5s ease-in-out";
    showMessage.dir = "rtl"; // Set text direction for Arabic

    const button = document.createElement("button");
    button.textContent = "تحقق";
    button.className =
      "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mx-auto w-1/2 block";
    button.addEventListener("click", () => {
      const day = inputDay.value;
      const dayData = Dayes.find(
        (d) =>
          d.nameAr === day ||
          d.nameEn.toLowerCase() === day.toLowerCase() ||
          d.otherCaseNameAr.includes(day)
      );
      showMessage.style.display = "block"; // Show message when button is clicked
      if (dayData) {
        showMessage.classList.add(
          "animate-fade-in",
          "text-green-500",
          "border-green-500"
        );
        showMessage.innerText = dayData.messageOfDay.ar;
      } else if (day === "") {
        showMessage.classList.add(
          "animate-fade-in",
          "text-red-500",
          "border-red-500"
        );
        showMessage.innerText = "الرجاء إدخال يوم";
      } else if (dayData === undefined) {
        showMessage.classList.add(
          "animate-fade-in",
          "text-red-500",
          "border-red-500"
        );
        showMessage.innerText = "اليوم غير موجود في الأسبوع";
      } else {
        showMessage.classList.add(
          "animate-fade-in",
          "text-red-500",
          "border-red-500"
        );
        showMessage.innerText = "اليوم غير صحيح";
      }
    });

    inputDay.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        button.click();
      }
    });

    inputDay.addEventListener("input", () => {
      showMessage.style.display = "none"; // Hide message when input changes
    });

    wrapper.appendChild(title);
    wrapper.appendChild(inputDay);
    wrapper.appendChild(button);
    container.appendChild(showMessage);

    const Dayes = [
                    {
                        nameAr: "الأحد",
                        nameEn: "Sunday",
                        otherCaseNameAr: ["الاحد", "الأحد"],
                        messageOfDay: {
                        ar: "الأحد بداية الأسبوع! حافظ على حماسك!",
                        en: "Sunday is the start of the week! Keep your spirits high!",
                        },
                    },
                    {
                        nameAr: "الإثنين",
                        nameEn: "Monday",
                        otherCaseNameAr: ["الاثنين", "الإثنين"],
                        messageOfDay: {
                        ar: "الاثنين بداية جديدة! اجعلها مهمة!",
                        en: "Monday is a fresh start! Make it count!",
                        },
                    },
                    {
                        nameAr: "الثلاثاء",
                        nameEn: "Tuesday",
                        otherCaseNameAr: [],
                        messageOfDay: {
                        ar: "الثلاثاء يوم منتج! استمر في التقدم!",
                        en: "Tuesday is a productive day! Keep moving forward!",
                        },
                    },
                    {
                        nameAr: "الاربعاء",
                        nameEn: "Wednesday",
                        otherCaseNameAr: ["الأربعاء", "الاربعاء"],
                        messageOfDay: {
                        ar: "الأربعاء منتصف الأسبوع! أنت في منتصف الطريق!",
                        en: "Wednesday is the midweek! You're halfway there!",
                        },
                    },
                    {
                        nameAr: "الخميس",
                        nameEn: "Thursday",
                        otherCaseNameAr: [],
                        messageOfDay: {
                        ar: "الخميس اقتراب نهاية الأسبوع! استمر!",
                        en: "Thursday is the approach of the weekend! Keep going!",
                        },
                    },
                    {
                        nameAr: "الجمعة",
                        nameEn: "Friday",
                        otherCaseNameAr: ["الجمعه", "الجمعة"],
                        messageOfDay: {
                        ar: "الجمعة هو يومك المفضل! استمتع بعطلة نهاية الأسبوع!",
                        en: "Friday is your favorite day! Enjoy the weekend!",
                        },
                    },
                    {
                        nameAr: "السبت",
                        nameEn: "Saturday",
                        otherCaseNameAr: [],
                        messageOfDay: {
                        ar: "السبت يوم رائع للاسترخاء! استمتع بوقتك!",
                        en: "Saturday is a great day to relax! Enjoy your time!",
                        },
                    },
                  ];

    }
   
`,
  directionDescription: "rtl",
};

const Dayes = [
  {
    nameAr: "الأحد",
    nameEn: "Sunday",
    otherCaseNameAr: ["الاحد", "الأحد"],
    messageOfDay: {
      ar: "الأحد بداية الأسبوع! حافظ على حماسك!",
      en: "Sunday is the start of the week! Keep your spirits high!",
    },
  },
  {
    nameAr: "الإثنين",
    nameEn: "Monday",
    otherCaseNameAr: ["الاثنين", "الإثنين"],
    messageOfDay: {
      ar: "الاثنين بداية جديدة! اجعلها مهمة!",
      en: "Monday is a fresh start! Make it count!",
    },
  },
  {
    nameAr: "الثلاثاء",
    nameEn: "Tuesday",
    otherCaseNameAr: [],
    messageOfDay: {
      ar: "الثلاثاء يوم منتج! استمر في التقدم!",
      en: "Tuesday is a productive day! Keep moving forward!",
    },
  },
  {
    nameAr: "الاربعاء",
    nameEn: "Wednesday",
    otherCaseNameAr: ["الأربعاء", "الاربعاء"],
    messageOfDay: {
      ar: "الأربعاء منتصف الأسبوع! أنت في منتصف الطريق!",
      en: "Wednesday is the midweek! You're halfway there!",
    },
  },
  {
    nameAr: "الخميس",
    nameEn: "Thursday",
    otherCaseNameAr: [],
    messageOfDay: {
      ar: "الخميس اقتراب نهاية الأسبوع! استمر!",
      en: "Thursday is the approach of the weekend! Keep going!",
    },
  },
  {
    nameAr: "الجمعة",
    nameEn: "Friday",
    otherCaseNameAr: ["الجمعه", "الجمعة"],
    messageOfDay: {
      ar: "الجمعة هو يومك المفضل! استمتع بعطلة نهاية الأسبوع!",
      en: "Friday is your favorite day! Enjoy the weekend!",
    },
  },
  {
    nameAr: "السبت",
    nameEn: "Saturday",
    otherCaseNameAr: [],
    messageOfDay: {
      ar: "السبت يوم رائع للاسترخاء! استمتع بوقتك!",
      en: "Saturday is a great day to relax! Enjoy your time!",
    },
  },
];
