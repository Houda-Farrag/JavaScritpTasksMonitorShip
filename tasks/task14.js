import CreateTitle from "../components/TitleComponent.js";

const usersWithoutSet = ["Osama", "Ahmed", "Ali", "Osama", "Ahmed", "Ali"];

const productsMap = new Map([
  ["Laptop", { price: 15000, quantity: 3 }],
  ["Mobile", { price: 10000, quantity: 5 }],
  ["Tablet", { price: 8000, quantity: 2 }],
]);

export default {
  title: "Task 14 - Map and Set Data Structures in js",
  description: "",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task14.js",
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

    const title2 = CreateTitle(
      "المنتجات with map",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const usrsContainer = document.createElement("div");
    usrsContainer.className = "flex flex-col gap-2";
    usrsContainer.innerHTML = `<p class="text-gray-600 text-xl font-bold"> المستخدمين المتكررين: ${usersWithoutSet}</p>`;

    usrsContainer.innerHTML += `<div> <p class="text-gray-600 text-xl font-bold"> المستخدمين بعد استخدام Set:</p> </div>`;
    const usrsSet = new Set(usersWithoutSet);

    usrsSet.forEach((value) => {
      usrsContainer.querySelector(
        "div"
      ).innerHTML += `<p class="text-gray-600 text-xl font-bold inline">${value} </p>`;
    });
    const productsContainer = document.createElement("div");
    productsContainer.className = "flex flex-col gap-2";

    productsMap.forEach((value, key) => {
      productsContainer.innerHTML += `<p class="text-gray-600 text-xl font-bold">  ${key} - السعر: ${value.price} - الكمية: ${value.quantity}</p>`;
    });

    const buttonAddAttributeToProduct = document.createElement("button");
    buttonAddAttributeToProduct.className =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit focus:outline-none focus:shadow-outline";
    buttonAddAttributeToProduct.textContent = "اضافة منتج";
    buttonAddAttributeToProduct.addEventListener("click", () => {
      // Random product Create to adding to the Map
      const nameProd = prompt("ادخل اسم المنتج");
      productsMap.set(nameProd, {
        price: prompt("ادخل سعر المنتج"),
        quantity: prompt("ادخل كمية المنتج"),
      });

      productsContainer.innerHTML = "";
      productsMap.forEach((value, key) => {
        productsContainer.innerHTML += `<p class="text-gray-600 text-xl font-bold">  ${key} - السعر: ${value.price} - الكمية: ${value.quantity}</p>`;
      });
    });

    wrapper.appendChild(title);
    wrapper.appendChild(usrsContainer);
    wrapper.appendChild(title2);
    wrapper.appendChild(productsContainer);
    wrapper.appendChild(buttonAddAttributeToProduct);
    container.appendChild(wrapper);
  },
  code: `{

  const usersWithoutSet = ["Osama", "Ahmed", "Ali", "Osama", "Ahmed", "Ali"];

const productsMap = new Map([
  ["Laptop", { price: 15000, quantity: 3 }],
  ["Mobile", { price: 10000, quantity: 5 }],
  ["Tablet", { price: 8000, quantity: 2 }],
]);

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

    const title2 = CreateTitle(
      "المنتجات with map",
      "text-3xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-gray-200  ",
      "h1"
    );

    const usrsContainer = document.createElement("div");
    usrsContainer.className = "flex flex-col gap-2";
    usrsContainer.innerHTML = \`<p class="text-gray-600 text-xl font-bold"> المستخدمين المتكررين: \${usersWithoutSet}</p>\`;

    usrsContainer.innerHTML += \`<div> <p class="text-gray-600 text-xl font-bold"> المستخدمين بعد استخدام Set:</p> </div>\`;
    const usrsSet = new Set(usersWithoutSet);

    usrsSet.forEach((value) => {
      usrsContainer.querySelector(
        "div"
      ).innerHTML += \`<p class="text-gray-600 text-xl font-bold inline">\${value} </p>\`;
    });
    const productsContainer = document.createElement("div");
    productsContainer.className = "flex flex-col gap-2";

    productsMap.forEach((value, key) => {
      productsContainer.innerHTML += \`<p class="text-gray-600 text-xl font-bold">  \${key} - السعر: \${value.price} - الكمية: \${value.quantity}</p>\`;
    });

    const buttonAddAttributeToProduct = document.createElement("button");
    buttonAddAttributeToProduct.className =
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit focus:outline-none focus:shadow-outline";
    buttonAddAttributeToProduct.textContent = "اضافة منتج";
    buttonAddAttributeToProduct.addEventListener("click", () => {
      
      // Random product Create to adding to the Map
      const nameProd = prompt("ادخل اسم المنتج");
      productsMap.set(nameProd, {
        price: prompt("ادخل سعر المنتج"),
        quantity: prompt("ادخل كمية المنتج"),
      });


      productsContainer.innerHTML = "";
      productsMap.forEach((value, key) => {
        productsContainer.innerHTML += \`<p class="text-gray-600 text-xl font-bold">  \${key} - السعر: \${value.price} - الكمية: \${value.quantity}</p>\`;
      });
    });

    wrapper.appendChild(title);
    wrapper.appendChild(usrsContainer);
    wrapper.appendChild(title2);
    wrapper.appendChild(productsContainer);
    wrapper.appendChild(buttonAddAttributeToProduct);
    container.appendChild(wrapper);
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
