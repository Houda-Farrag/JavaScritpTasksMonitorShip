import CreateTitle from "../../components/TitleComponent.js";

const tax_rate = 0.14;
const products = [
  { name: "منتج 1", price: 53, taxrate: tax_rate },

  { name: "منتج 2", price: 100, taxrate: 0.2 },

  { name: "منتج 3", price: 200, taxrate: 0.3 },
  { name: "منتج 4", price: 250, taxrate: 0.4 },
];

export const calculateTax1 = (price, tax = tax_rate) => {
  return Number(price + price * tax).toFixed(2);
};

const valueTax = (price, tax = tax_rate) => {
  return Number(price * tax).toFixed(2);
};


export const renderProduct = (product, calculateTaxFunction = calculateTax1) => {
  const productItem = document.createElement("div");
  productItem.className =
    "w-full flex flex-col gap-2 p-2 rounded-lg shadow-md hover:shadow-lg hover:bg-green-100 hover:cursor-pointer bg-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:cursor-pointer  flex flex-col gap-2 py-5";
  productItem.innerHTML = `
      <div class="flex gap-2 justify-center">
        <h3 class="text-2xl font-bold text-center text-blue-800">${
          product.name
        }</h3>
      </div>
      <div class="flex gap-2 justify-center">
        <p class="text-gray-600 text-xl font-bold"> السعر <span class="text-green-600">${
          product.price
        }</span> <span class="text-red-500 text-sm">جنيه</span></p>
      </div>
      <div class="flex gap-2 justify-center">الضريبة: ${Number(
        product.taxrate * 100
      ).toFixed(2)}% = قيمة ${valueTax(product.price, product.taxrate)} <span class="text-red-500 ">جنيه</span></div>
      <div class="flex gap-2 justify-center">
        <p class="text-gray-600 text-xl font-bold"> السعر بالضريبة <span class="text-green-600">${calculateTaxFunction(
          product.price,
          product.taxrate
        )}</span> <span class="text-red-500 text-sm">جنيه</span></p>
      </div>
    `;
  return productItem;
};

export default {
  title: "Task 6 - Product Price Calculator",
  description:
    "تعلم كيفية حساب الأسعار النهائية للمنتجات مع تضمين الضريبة باستخدام JavaScript، مع تطبيق مبادئ البرمجة الوظيفية.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task6.js",
  notes: "",

  // Renders UI for this task
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
      "أسعار المنتجات بعد الضريبة",
      "text-2xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white  ",
      "h1"
    );

    const productsList = document.createElement("div");
    productsList.className =
      "mt-4 list-none pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4";
    productsList.style.direction = "rtl";

    products.forEach((product) => {
      const productItem = renderProduct(product);
      productsList.appendChild(productItem);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(productsList);

    container.appendChild(wrapper);
  },

  // Code snippet for display
  code: `
 {
    const tax_rate = 0.14;
    const products = [
    { name: "منتج 1", price: 53, taxrate: tax_rate },

    { name: "منتج 2", price: 100, taxrate: 0.2 },

    { name: "منتج 3", price: 200, taxrate: 0.3 },
    { name: "منتج 4", price: 250, taxrate: 0.4 },
    ];

    const calculateTax1 = (price, tax = tax_rate) => {
    return Number(price + price * tax).toFixed(2);
    };

    const valueTax = (price, tax = tax_rate) => {
    return Number(price * tax).toFixed(2);
    };


    const renderProduct = (product, calculateTaxFunction = calculateTax1) => {
    const productItem = document.createElement("div");
    productItem.className =
        "w-full flex flex-col gap-2 p-2 rounded-lg shadow-md hover:shadow-lg hover:bg-green-100 hover:cursor-pointer bg-white transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:cursor-pointer  flex flex-col gap-2 py-5";
    productItem.innerHTML = \`
        <div class="flex gap-2 justify-center">
            <h3 class="text-2xl font-bold text-center text-blue-800">\${
            product.name
            }</h3>
        </div>
        <div class="flex gap-2 justify-center">
            <p class="text-gray-600 text-xl font-bold"> السعر <span class="text-green-600">\${
            product.price
            }</span> <span class="text-red-500 text-sm">جنيه</span></p>
        </div>
        <div class="flex gap-2 justify-center">الضريبة: \${Number(
            product.taxrate * 100
        ).toFixed(2)}% = قيمة \${valueTax(product.price, product.taxrate)} <span class="text-red-500 ">جنيه</span></div>
        <div class="flex gap-2 justify-center">
            <p class="text-gray-600 text-xl font-bold"> السعر بالضريبة <span class="text-green-600">\${calculateTaxFunction(
            product.price,
            product.taxrate
            )}</span> <span class="text-red-500 text-sm">جنيه</span></p>
        </div>
        \`;
    return productItem;
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
      "أسعار المنتجات بعد الضريبة",
      "text-2xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white  ",
      "h1"
    );

    const productsList = document.createElement("div");
    productsList.className =
      "mt-4 list-none pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4";
    productsList.style.direction = "rtl";

    const productsList2 = document.createElement("div");
    productsList2.className =
      "mt-4 list-none pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4";
    productsList2.style.direction = "rtl";

    products.forEach((product) => {
      const productItem = renderProduct(product);
      productsList.appendChild(productItem);
    });

    const title2 = title.cloneNode(true);
    wrapper.appendChild(title);
    wrapper.appendChild(productsList);

    container.appendChild(wrapper);
  }
  `,
  directionDescription: "rtl",
}

