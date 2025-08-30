import NotificationsMessage from "../components/NotificationsMessage.js";
import CreateTitle from "../components/TitleComponent.js";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "2b9hM@example.com",
    age: 25,
  },
];

const tableHeaders = [
  {
    name: "رقم",
    key: "id",
  },
  {
    name: "اسم المستخدم",
    key: "name",
  },
  {
    name: "البريد الألكتروني",
    key: "email",
  },
  {
    name: "العمر",
    key: "age",
  },
];

function renderUsers(tableBody) {
  tableBody.innerHTML = "";
  users.forEach((user) => {
    const tr = document.createElement("tr");
    tr.className =
      "border-b border-gray-200 hover:bg-gray-100 hover:bg-opacity-50 hover:cursor-pointer";
    tableHeaders.forEach((header) => {
      const td = document.createElement("td");
      td.textContent = user[header.key];
      td.className = "py-3 px-6 text-right whitespace-nowrap";
      tr.appendChild(td);
    });
    const tdOperationbuttons = document.createElement("td");
    tdOperationbuttons.className =
      "py-3 px-6 text-right whitespace-nowrap flex gap-2 justify-center";
    tdOperationbuttons.appendChild(DeleteButton(user.id));
    tdOperationbuttons.appendChild(updateUserButton(user.id));
    tr.appendChild(tdOperationbuttons);

    tableBody.appendChild(tr);
  });
}

function DeleteButton(id) {
  const deleteButton = document.createElement("button");
  deleteButton.id = "deleteButton";
  deleteButton.innerText = "حذف";
  deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded";
  deleteButton.addEventListener("click", () => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      const tableBody = document.getElementById("tableBodyUsers");
      renderUsers(tableBody);
    }
  });

  return deleteButton;
}

function updateUserButton(id) {
  const updateButton = document.createElement("button");
  updateButton.id = "updateButton";
  updateButton.innerText = "تعديل";
  updateButton.className =
    "bg-green-500 text-white px-2 py-1 rounded mx-2 hover:bg-green-600";
  updateButton.addEventListener("click", () => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const updatedUser = prompt(
        "قم بتعديل المستخدم:",
        JSON.stringify(users[index])
      );
      if (updatedUser) {
        users[index] = JSON.parse(updatedUser);
        const tableBody = document.getElementById("tableBodyUsers");
        renderUsers(tableBody);
      }
    }
  });
  return updateButton;
}

export default {
  title: "Task 10 - Interactive User Table",
  description:
    "تعلم كيفية إدارة جدول المستخدمين مع إمكانيات الإضافة والحذف باستخدام JavaScript.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task10.js",
  notes: " تمت اضافه بعض المميزات مثل التعديل علي المستخدم وامكانيه حذف مستخدم",
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
      "جدول المستخدمين",
      "text-4xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white  ",
      "h1"
    );
    const TableDesign = document.createElement("table");
    TableDesign.className =
      "w-full table-auto border border-gray-300 rounded-lg shadow-lg mb-4 border-separate ";
    TableDesign.style.direction = "rtl";
    TableDesign.id = "userTable";
    TableDesign.style.fontFamily = "Arial, sans-serif";

    const tableHead = document.createElement("thead");
    tableHead.dir = "rtl";
    tableHead.className =
      "bg-gray-200 text-gray-600 uppercase text-sm leading-normal";
    const tableBody = document.createElement("tbody");
    tableBody.id = "tableBodyUsers";
    tableBody.className = "text-gray-600 text-sm font-light";

    tableHeaders.forEach((header) => {
      const th = document.createElement("th");
      th.dir = "rtl";
      th.textContent = header.name;
      th.className =
        "border border-gray-300 px-4 py-2 py-3 px-6 text-right whitespace-nowrap font-semibold text-gray-900 text-xl";
      tableHead.appendChild(th);
    });

    const th = document.createElement("th");
    th.className =
      "border border-gray-300 px-4 py-2 py-3 px-6 text-right whitespace-nowrap font-semibold text-gray-900 text-xl";
    th.innerText = "العمليات";
    tableHead.appendChild(th);

    renderUsers(tableBody);

    const containerAddingUser = document.createElement("div");
    containerAddingUser.className = "flex justify-between items-center";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "اسم المستخدم";
    inputName.className = "border border-gray-300 p-2 rounded-lg";

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "البريد الألكتروني";
    inputEmail.className = "border border-gray-300 p-2 rounded-lg";

    const inputAge = document.createElement("input");
    inputAge.type = "number";
    inputAge.placeholder = "العمر";
    inputAge.className = "border border-gray-300 p-2 rounded-lg";

    const buttonAddUser = document.createElement("button");
    buttonAddUser.textContent = "اضافة مستخدم";
    buttonAddUser.className =
      "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out";

    buttonAddUser.addEventListener("click", () => {
      const name = inputName.value;
      const email = inputEmail.value;
      const age = inputAge.value;
      const newUser = { id: users.length + 1, name, email, age };
      if (!name || !email || !age) {
        new NotificationsMessage(
          "بعض الحقول فارغه",
          "warning",
          4000,
          "bg-yellow-500"
        );
        return;
      } else {
        new NotificationsMessage(
          "تم اضافة المستخدم",
          "success",
          4000,
          "bg-green-400"
        );
        users.push(newUser);
        renderUsers(tableBody);
        inputName.value = "";
        inputEmail.value = "";
        inputAge.value = "";
      }
    });

    containerAddingUser.appendChild(inputName);
    containerAddingUser.appendChild(inputEmail);
    containerAddingUser.appendChild(inputAge);
    containerAddingUser.appendChild(buttonAddUser);

    TableDesign.appendChild(tableHead);
    TableDesign.appendChild(tableBody);

    wrapper.appendChild(title);
    wrapper.appendChild(TableDesign);
    wrapper.appendChild(containerAddingUser);
    container.appendChild(wrapper);
  },
  code: `{

  const users = [
  {
    id: 1,
    name: "John Doe",
    email: "2b9hM@example.com",
    age: 25,
  },
];

const tableHeaders = [
  {
    name: "رقم",
    key: "id",
  },
  {
    name: "اسم المستخدم",
    key: "name",
  },
  {
    name: "البريد الألكتروني",
    key: "email",
  },
  {
    name: "العمر",
    key: "age",
  },
];

function renderUsers(tableBody) {
  tableBody.innerHTML = "";
  users.forEach((user) => {
    const tr = document.createElement("tr");
    tr.className =
      "border-b border-gray-200 hover:bg-gray-100 hover:bg-opacity-50 hover:cursor-pointer";
    tableHeaders.forEach((header) => {
      const td = document.createElement("td");
      td.textContent = user[header.key];
      td.className = "py-3 px-6 text-right whitespace-nowrap";
      tr.appendChild(td);
    });
    const tdOperationbuttons = document.createElement("td");
    tdOperationbuttons.className =
      "py-3 px-6 text-right whitespace-nowrap flex gap-2 justify-center";
    tdOperationbuttons.appendChild(DeleteButton(user.id));
    tdOperationbuttons.appendChild(updateUserButton(user.id));
    tr.appendChild(tdOperationbuttons);

    tableBody.appendChild(tr);
  });
}

function DeleteButton(id) {
  const deleteButton = document.createElement("button");
  deleteButton.id = "deleteButton";
  deleteButton.innerText = "حذف";
  deleteButton.className = "bg-red-500 text-white px-2 py-1 rounded";
  deleteButton.addEventListener("click", () => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      const tableBody = document.getElementById("tableBodyUsers");
      renderUsers(tableBody);
    }
  });

  return deleteButton;
}

function updateUserButton(id) {
  const updateButton = document.createElement("button");
  updateButton.id = "updateButton";
  updateButton.innerText = "تعديل";
  updateButton.className =
    "bg-green-500 text-white px-2 py-1 rounded mx-2 hover:bg-green-600";
  updateButton.addEventListener("click", () => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const updatedUser = prompt(
        "قم بتعديل المستخدم:",
        JSON.stringify(users[index])
      );
      if (updatedUser) {
        users[index] = JSON.parse(updatedUser);
        const tableBody = document.getElementById("tableBodyUsers");
        renderUsers(tableBody);
      }
    }
  });
  return updateButton;
}
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4 ";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "جدول المستخدمين",
      "text-4xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white  ",
      "h1"
    );
    const TableDesign = document.createElement("table");
    TableDesign.className =
      "w-full table-auto border border-gray-300 rounded-lg shadow-lg mb-4 border-separate ";
    TableDesign.style.direction = "rtl";
    TableDesign.id = "userTable";
    TableDesign.style.fontFamily = "Arial, sans-serif";

    const tableHead = document.createElement("thead");
    tableHead.dir = "rtl";
    tableHead.className =
      "bg-gray-200 text-gray-600 uppercase text-sm leading-normal";
    const tableBody = document.createElement("tbody");
    tableBody.id = "tableBodyUsers";
    tableBody.className = "text-gray-600 text-sm font-light";

    tableHeaders.forEach((header) => {
      const th = document.createElement("th");
      th.dir = "rtl";
      th.textContent = header.name;
      th.className =
        "border border-gray-300 px-4 py-2 py-3 px-6 text-right whitespace-nowrap font-semibold text-gray-900 text-xl";
      tableHead.appendChild(th);
    });

    const th = document.createElement("th");
    th.className =
      "border border-gray-300 px-4 py-2 py-3 px-6 text-right whitespace-nowrap font-semibold text-gray-900 text-xl";
    th.innerText = "العمليات";
    tableHead.appendChild(th);

    renderUsers(tableBody);

    const containerAddingUser = document.createElement("div");
    containerAddingUser.className = "flex justify-between items-center";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "اسم المستخدم";
    inputName.className = "border border-gray-300 p-2 rounded-lg";

    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "البريد الألكتروني";
    inputEmail.className = "border border-gray-300 p-2 rounded-lg";

    const inputAge = document.createElement("input");
    inputAge.type = "number";
    inputAge.placeholder = "العمر";
    inputAge.className = "border border-gray-300 p-2 rounded-lg";

    const buttonAddUser = document.createElement("button");
    buttonAddUser.textContent = "اضافة مستخدم";
    buttonAddUser.className =
      "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out";

    buttonAddUser.addEventListener("click", () => {
      const name = inputName.value;
      const email = inputEmail.value;
      const age = inputAge.value;
      const newUser = { id: users.length + 1, name, email, age };
      if (!name || !email || !age) {
        new NotificationsMessage(
          "بعض الحقول فارغه",
          "warning",
          4000,
          "bg-yellow-500"
        );
        return;
      } else {
        new NotificationsMessage(
          "تم اضافة المستخدم",
          "success",
          4000,
          "bg-green-400"
        )
        users.push(newUser);
        renderUsers(tableBody);
        inputName.value = "";
        inputEmail.value = "";
        inputAge.value = "";
      }
    });

    containerAddingUser.appendChild(inputName);
    containerAddingUser.appendChild(inputEmail);
    containerAddingUser.appendChild(inputAge);
    containerAddingUser.appendChild(buttonAddUser);

    TableDesign.appendChild(tableHead);
    TableDesign.appendChild(tableBody);

    wrapper.appendChild(title);
    wrapper.appendChild(TableDesign);
    wrapper.appendChild(containerAddingUser);
    container.appendChild(wrapper);
  
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
