import CreateTitle from "../components/TitleComponent.js";
export default {
  title: "Task 1 - Form Validation and Interactive Results",
  description:
    "تعلم كيفية معالجة مدخلات الـ Forms في JavaScript مع التحقق من الصحة وعرض النتائج بشكل تفاعلي، مع تطبيق مبادئ تصميم الواجهات الحديثة.",
  github: "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task1.js",
  notes:
    "في هذا التمرين، ستقوم بإنشاء نموذج بسيط لجمع بيانات المستخدم مثل الاسم والعمر والهواية. ستتعلم كيفية التحقق من صحة المدخلات والتأكد من أن المستخدم قد أدخل جميع المعلومات المطلوبة بشكل صحيح. بعد ذلك، ستعرض رسالة ترحيبية مخصصة بناءً على المدخلات التي تم جمعها.",
  render: (container) => {
    container.innerHTML = ""; // clear previous content
    const wrapper = document.createElement("div");
    wrapper.style.direction = "rtl"; // Set text direction for Arabic
    wrapper.className =
      "flex flex-col items-center space-y-4 p-4 bg-gray-50 border rounded shadow ";
    // const title = document.createElement("h1");
    // title.className = "text-2xl font-bold text-center";
    // title.innerText = "أدخل بياناتك";
    const title = CreateTitle(
      "أدخل بياناتك",
      "text-2xl font-bold text-center",
      "h1"
    );
    const form = document.createElement("form");
    form.className = "space-y-4 w-full max-w-md bg-white p-6 rounded shadow-md";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "اسمك";
    nameInput.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const age = document.createElement("input");
    age.type = "number";
    age.placeholder = "عمرك";
    // validation for age input
    const regAge = /^[0-9]+$/;
    age.oninput = () => {
      if (age.value < 0 || !regAge.test(age.value)) {
        age.value = "";
      }
      if (age.value > 120) {
        age.value = 120;
      }
    };
    age.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const hopyInput = document.createElement("input");
    hopyInput.type = "text";
    hopyInput.placeholder = "هوايتك";
    hopyInput.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const showMessage = document.createElement("p");
    // const animationFadein = document.createElement("style");
    // animationFadein.innerHTML = `
    //   @keyframes fade-in {
    //     from {
    //       opacity: 0;
    //       transform: translateY(20px);
    //     }
    //     to {
    //       opacity: 1;
    //       transform: translateY(0);
    //     }
    //   }
    // }
    // `;
    // document.head.appendChild(animationFadein);
    showMessage.className = "text-lg text-gray-700 hidden animate-fade-in mt-4 border p-4 rounded ";
    showMessage.innerText = "";
    showMessage.style.animation = "fade-in 0.5s ease-in-out";
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className =
      "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";
    submitButton.innerText = "اعرض الرساله";
    submitButton.onclick = (e) => {
      e.preventDefault(); // Prevent form submission
      const name = nameInput.value.trim();
      const userAge = age.value.trim();
      const hobby = hopyInput.value.trim();

      if (!name || !userAge || !hobby) {
        showMessage.innerText = "الرجاء ملء جميع الحقول.";
        showMessage.className = "text-lg text-red-700 mt-4";
        return;
      }
      if (userAge < 0 || userAge > 120) {
        showMessage.innerText = "الرجاء إدخال عمر صحيح.";
        showMessage.className = "text-lg text-red-700 mt-4";
        return;
      }
      // i want to add some styling for name and age and hobby
      nameInput.value = "";
      age.value = "";
      hopyInput.value = "";
      showMessage.innerHTML = `مرحبًا <span class="font-bold font-fancy italic text-blue-600">${name}</span> ، عمرك <span class="font-bold font-fancy italic text-blue-600">${userAge}</span> وهوايتك هي <span class="font-bold font-fancy italic text-blue-600">${hobby}</span>.`;
      showMessage.classList.add("bg-green-100", );
      showMessage.classList.remove("hidden");
    };
    form.appendChild(title);
    form.appendChild(nameInput);
    form.appendChild(age);
    form.appendChild(hopyInput);
    form.appendChild(submitButton);
    wrapper.appendChild(form);
    wrapper.appendChild(showMessage);
    container.appendChild(wrapper);
  },
  code: `{
    container.innerHTML = ""; // clear previous content
    const wrapper = document.createElement("div");
    wrapper.style.direction = "rtl"; // Set text direction for Arabic
    wrapper.className =
      "flex flex-col items-center space-y-4 p-4 bg-gray-50 border rounded shadow ";
    const title = document.createElement("h1");
    title.className = "text-2xl font-bold text-center";
    title.innerText = "أدخل بياناتك";

    const form = document.createElement("form");
    form.className = "space-y-4 w-full max-w-md bg-white p-6 rounded shadow-md";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "اسمك";
    nameInput.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const age = document.createElement("input");
    age.type = "number";
    age.placeholder = "عمرك";
    // validation for age input
    const regAge = /^[0-9]+$/;
    age.oninput = () => {
      if (age.value < 0 || !regAge.test(age.value)) {
        age.value = "";
      }
      if (age.value > 120) {
        age.value = 120;
      }
    };
    age.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const hopet = document.createElement("input");
    hopet.type = "text";
    hopet.placeholder = "هوايتك";
    hopet.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

    const showMessage = document.createElement("p");
    const animationFadein = document.createElement("style");

    animationFadein.innerHTML = \`
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    \`
    ;
    document.head.appendChild(animationFadein);
    showMessage.className = "text-lg text-gray-700 hidden animate-fade-in";
    showMessage.innerText = "";
    showMessage.style.animation = "fade-in 0.5s ease-in-out";
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className =
      "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600";
    submitButton.innerText = "اعرض الرساله";
    submitButton.onclick = (e) => {
      e.preventDefault(); // Prevent form submission
      const name = nameInput.value.trim();
      const userAge = age.value.trim();
      const hobby = hopet.value.trim();

      if (!name || !userAge || !hobby) {
        showMessage.innerText = "الرجاء ملء جميع الحقول.";
        showMessage.className = "text-lg text-red-700 mt-4";
        return;
      }
      if (userAge < 0 || userAge > 120) {
        showMessage.innerText = "الرجاء إدخال عمر صحيح.";
        showMessage.className = "text-lg text-red-700 mt-4";
        return;
      }
        showMessage.innerText = \`مرحبًا  \${name}، عمرك \${userAge} وهوايتك هي \${hobby}.\`;
      showMessage.className = "text-lg  mt-4 font-semibold border p-4 rounded";
      showMessage.classList.remove("hidden");
    };
    form.appendChild(title);
    form.appendChild(nameInput);
    form.appendChild(age);
    form.appendChild(hopet);
    form.appendChild(submitButton);
    wrapper.appendChild(form);
    wrapper.appendChild(showMessage);
    container.appendChild(wrapper);
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
