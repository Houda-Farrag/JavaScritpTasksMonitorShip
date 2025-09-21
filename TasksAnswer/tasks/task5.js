import ButtonComponent from "../../components/Buttons.js";
import InputComponent from "../../components/InputComponent.js";
import CreateTitle from "../../components/TitleComponent.js";

function createProductItem(product) {
  const li = document.createElement("li");
  li.className =
    "mb-2 p-2 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:cursor-pointer  flex flex-col gap-2 py-5";
  li.innerHTML = `
    <div class="flex gap-2 justify-center">
      <h3 class="text-2xl font-bold text-center text-blue-800">${product.nameAr}</h3>
    </div>
    <div class="flex gap-2 justify-center">
      <p class="text-gray-600 text-xl font-bold"> السعر <span class="text-green-600">${product.price}</span> <span class="text-red-500 text-sm">جنيه</span></p>
    </div>      

  `;
  return li;
}

function renderProductsList(products, container) {
  container.innerHTML = "";
  products.forEach((product) => {
    container.appendChild(createProductItem(product));
  });
  if (products.length === 0) {
    container.innerText = "لا يوجد منتجات لعرضها";
  }
}

export default {
  title: "Task 5 - Products list Filter based on price",
  description:
    "تعلم كيفية إنشاء قائمة منتجات تفاعلية مع فلترة ديناميكية باستخدام JavaScript، مع تطبيق مبادئ تصميم الويب الحديثة.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task5.js",
  notes: "",

  render: (container) => {
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";

    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "قائمة المنتجات",
      "text-2xl font-bold mb-4 text-center",
      "h1"
    );

    const containerInputfilterAndButton = document.createElement("div");
    containerInputfilterAndButton.className =
      "inline-flex gap-2 justify-center items-center w-full ";

    const productsListElement = document.createElement("ul");
    productsListElement.className =
      "mt-4 list-none pl-5 bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  transition-discrete ";
    productsListElement.style.direction = "rtl";

    renderProductsList(productsList, productsListElement);

    const inputFilter = InputComponent({
      type: "number",
      value: "",
      placeholder: "السعر الاقصي",
      className:
        " border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto max-w-lg",
      onChange: (e) => {
        const regInput = /^[0-9]+$/;
        if (e.target.value < 0 || !regInput.test(e.target.value)) {
          e.target.value = "";
        }
      },
    });

    inputFilter.addEventListener("keypress", (e) => {
      inputFilter.classList.remove("border-red-500");
    });
    inputFilter.addEventListener("focus", (e) => {
      inputFilter.classList.remove("border-red-500");
    });

    const buttonFilter = ButtonComponent({
      text: "تصفية بالسعر",
      className:
        " hover:bg-blue-700 text-white font-bold  px-4 rounded text-nowrap  w-fit mb-2",

      onClick: () => {
        if (!inputFilter.value || inputFilter.value <= 0) {
          inputFilter.classList.add("border-red-500");
          renderProductsList(productsList, productsListElement);
          return;
        }
        inputFilter.classList.remove("border-red-500");
        const maxPrice = Number(inputFilter.value);
        if (maxPrice > 0) {
          const filtered = productsList.filter((p) => p.price <= maxPrice);
          renderProductsList(filtered, productsListElement);
        } else {
          renderProductsList(productsList, productsListElement);
        }
      },
    });

    wrapper.appendChild(title);
    containerInputfilterAndButton.appendChild(inputFilter);
    containerInputfilterAndButton.appendChild(buttonFilter);
    wrapper.appendChild(containerInputfilterAndButton);
    wrapper.appendChild(productsListElement);
    container.appendChild(wrapper);
  },

  code: `
   {
    function createProductItem(product) {
    const li = document.createElement("li");
    li.className =
        "mb-2 p-2 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:cursor-pointer  flex flex-col gap-2 py-5";
    li.innerHTML = \`
        <div class="flex gap-2 justify-center">
        <h3 class="text-2xl font-bold text-center text-blue-800">\${product.nameAr}</h3>
        </div>
        <div class="flex gap-2 justify-center">
        <p class="text-gray-600 text-xl font-bold"> السعر <span class="text-green-600">\${product.price}</span> <span class="text-red-500 text-sm">جنيه</span></p>
        </div>      

    \`;
    return li;
    }

    function renderProductsList(products, container) {
        container.innerHTML = "";
        products.forEach((product) => {
            container.appendChild(createProductItem(product));
        });
        if (products.length === 0) {
            container.innerText = "لا يوجد منتجات لعرضها";
        }
    }
    container.innerHTML = "";
    container.className =
      "p-4 bg-green-500 rounded-lg shadow-md border border-gray-200";

    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-5xl mx-auto border border-gray-300 p-6 bg-white rounded-lg shadow-lg";
    wrapper.style.direction = "rtl";
    wrapper.style.fontFamily = "Arial, sans-serif";

    const title = CreateTitle(
      "قائمة المنتجات",
      "text-2xl font-bold mb-4 text-center",
      "h1"
    );

    const containerInputfilterAndButton = document.createElement("div");
    containerInputfilterAndButton.className =
      "inline-flex gap-2 justify-center items-center w-full ";

    const productsListElement = document.createElement("ul");
    productsListElement.className =
      "mt-4 list-none pl-5 bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition duration-300 ease-in-out";
    productsListElement.style.direction = "rtl";

    renderProductsList(productsList, productsListElement);

    const inputFilter = InputComponent({
      type: "number",
      value: "",
      placeholder: "السعر الاقصي",
      className:
        " border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto max-w-lg",
      onChange: (e) => {
        const regInput = /^[0-9]+$/;
        if (e.target.value < 0 || !regInput.test(e.target.value)) {
          e.target.value = "";
        }
      },
    });

    inputFilter.addEventListener("keypress", (e) => {
      inputFilter.classList.remove("border-red-500");
    });
    inputFilter.addEventListener("focus", (e) => {
      inputFilter.classList.remove("border-red-500");
    });

    const buttonFilter = ButtonComponent({
      text: "تصفية بالسعر",
      className:
        " hover:bg-blue-700 text-white font-bold  px-4 rounded text-nowrap  w-fit mb-2",

      onClick: () => {
        if (!inputFilter.value || inputFilter.value <= 0) {
          inputFilter.classList.add("border-red-500");
          renderProductsList(productsList, productsListElement);
          return;
        }
        inputFilter.classList.remove("border-red-500");
        const maxPrice = Number(inputFilter.value);
        if (maxPrice > 0) {
          const filtered = productsList.filter((p) => p.price <= maxPrice);
          renderProductsList(filtered, productsListElement);
        } else {
          renderProductsList(productsList, productsListElement);
        }
      },
    });

    wrapper.appendChild(title);
    containerInputfilterAndButton.appendChild(inputFilter);
    containerInputfilterAndButton.appendChild(buttonFilter);
    wrapper.appendChild(containerInputfilterAndButton);
    wrapper.appendChild(productsListElement);
    container.appendChild(wrapper);
  }
  `,
  directionDescription: "rtl",
};

const productsList = [
  {
    id: 1,
    name: "Product 1",
    nameAr: "المنتج 1",
    price: 10,
    category: "Category A",
  },
  {
    id: 2,
    name: "Product 2",
    nameAr: "المنتج 2",
    price: 20,
    category: "Category B",
  },
  {
    id: 3,
    name: "Product 3",
    nameAr: "المنتج 3",
    price: 30,
    category: "Category C",
  },
  {
    id: 4,
    name: "Product 4",
    nameAr: "المنتج 4",
    price: 50,
    category: "Category A",
  },
  {
    id: 5,
    name: "Product 5",
    nameAr: "المنتج 5",
    price: 12,
    category: "Category A",
  },
  {
    id: 6,
    name: "Product 6",
    nameAr: "المنتج 6",
    price: 27,
    category: "Category B",
  },
  {
    id: 7,
    name: "Product 7",
    nameAr: "المنتج 7",
    price: 33,
    category: "Category C",
  },
  {
    id: 8,
    name: "Product 8",
    nameAr: "المنتج 8",
    price: 55,
    category: "Category A",
  },
];
