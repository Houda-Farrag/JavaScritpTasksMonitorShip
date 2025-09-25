import Modal from "../../components/Modals.js";
import CreateTitle from "../../components/TitleComponent.js";

function User(name = "", age = "", mail = "") {
  this.name = name;
  this.age = age;
  this.mail = mail;

  this.getInfo = function () {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.mail}`;
  };

  this.great = function () {
    // مرحبًا سما! عمرك 30 عامًا وبريدك الإلكتروني هو sama@example.com.
    return `مرحبا ${this.name}! عمرك ${this.age} عامًا وبريدك الإلكتروني هو ${this.mail}.`;
  };
  this.updateUser = function () {
    const modal = Modal({
      title: "تحديث معلومات المستخدم",
      fields: [
        { name: "name", label: "الاسم", required: true },
        { name: "age", label: "العمر", type: "number", required: true },
        {
          name: "mail",
          label: "البريد الألكتروني",
          type: "email",
          required: true,
        },
      ],
      submitBtnText: "حفظ التغييرات",
      submitBtnClass:
        "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded",
      onSubmit: (data) => {
        this.name = data.name;
        this.age = data.age;
        this.mail = data.mail;
        modal.remove();
        alert("تم تحديث معلومات المستخدم بنجاح!");
      },
    });
  };
}

export default {
  title: "Task 17 - Constructor Functions",
  description:
    "التعرف على كيفية إنشاء Functions مُنشئة (Constructor Functions) في JavaScript لبناء Objects متعددة ذات خصائص وأساليب متشابهة.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task17.js",
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
      "المستخدمين",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const usersData = [
      new User("سما", 30, " sama@example.com"),
      new User("سامى", 25, " sami@example.com"),
      new User("سام", 20, " sam@example.com"),
    ];

    const usersContainer = document.createElement("div");
    usersContainer.className =
      "grid grid-cols  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4";
    usersData.forEach((user, index) => {
      const { name, age, mail, updateUser } = user;
      const userCard = document.createElement("div");
      const updateBtn = document.createElement("button");
      updateBtn.textContent = "تحديث";
      updateBtn.className =
        "mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded";
      updateBtn.onclick = () => updateUser();
      userCard.className = "border p-4 rounded shadow";
      userCard.innerHTML = `
      <p>الاسم: ${name}</p>
      <p>العمر: ${age}</p>
      <p>البريد الألكتروني: ${mail}</p>
      
      `;
      userCard.appendChild(updateBtn);
      usersContainer.appendChild(userCard);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(usersContainer);
    container.appendChild(wrapper);
  },
  code: `{
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
