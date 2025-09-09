import { CustomNotificationMessage } from "../components/NotificationsMessage.js";
import CreateTitle from "../components/TitleComponent.js";

export default {
  title: "Task 16 - Form Validation",
  description:
    "تعلم كيفية التحقق من صحة البيانات المدخلة في النماذج باستخدام JavaScript لضمان إدخال بيانات صحيحة وسليمة.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task16.js",
  notes: "تم استخدام الداله setCustomValidity لاضافه رسائل مخصصه",
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
      "صفحة تسجيل الدخول",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const form = document.createElement("form");
    form.className = "flex flex-col gap-4";

    const useremail = document.createElement("input");
    useremail.type = "email";
    useremail.placeholder = "البريد الإلكتروني";
    useremail.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    useremail.required = true;
    useremail.setCustomValidity("هذا الحقل مطلوب")

    useremail.addEventListener("input", () => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (useremail.value === "") {
        useremail.setCustomValidity("هذا الحقل مطلوب");
        useremail.reportValidity();
        useremail.classList.remove("focus:ring-blue-500");
        useremail.classList.add("border-red-500", "focus:ring-red-500");
      } else if (!emailPattern.test(useremail.value)) {
        useremail.setCustomValidity("البريد الإلكتروني غير صحيح");
        useremail.reportValidity();
        useremail.classList.remove("focus:ring-blue-500");
        useremail.classList.add("border-red-500", "focus:ring-red-500");
      } else {
        useremail.setCustomValidity("");
        useremail.classList.remove("border-red-500", "focus:ring-red-500");
        useremail.classList.add("focus:ring-blue-500");
      }
    });

    const password = document.createElement("input");
    password.type = "password";
    password.placeholder = "كلمة المرور";
    password.className =
      "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    password.required = true;
    password.minLength = 6;
    password.setCustomValidity("كلمه المرور مطلوبه");
    password.addEventListener("input", () => {
      if (password.value.length < 6) {
        password.setCustomValidity("يجب أن تكون كلمة المرور 6 أحرف على الأقل");
        password.reportValidity();
        password.classList.remove("focus:ring-blue-500");
        password.classList.add("border-red-500", "focus:ring-red-500");
      } else {
        password.setCustomValidity("");
        password.classList.remove("border-red-500", "focus:ring-red-500");
        password.classList.add("focus:ring-blue-500");
      }
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "تسجيل الدخول";
    submitButton.className =
      "bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition mx-auto";

    form.appendChild(useremail);
    form.appendChild(password);
    form.appendChild(submitButton);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      new CustomNotificationMessage(
        `<div dir="rtl" class="text-green-600  font-semibold  flex flex-col gap-2">
       <p>تم تسجيل الدخول بنجاح </span></p></div>`,
        3000,
        "right-1/2  translate-x-1/2 w-fit top-1/2 "
      );
      form.reset();
      useremail.classList.remove(
        "border-red-500",
        "focus:ring-red-500",
        "focus:ring-blue-500"
      );
      password.classList.remove(
        "border-red-500",
        "focus:ring-red-500",
        "focus:ring-blue-500"
      );
    });

    wrapper.appendChild(title);
    wrapper.appendChild(form);
    container.appendChild(wrapper);
  },
  code: `{
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
