import ButtonComponent from "../../components/Buttons.js";
import CreateTitle from "../../components/TitleComponent.js";
import { renderProduct, calculateTax1 } from "../tasks/task6.js";
const products = [
  { name: "منتج 1", price: 50, taxrate: 0.3 },

  { name: "منتج 2", price: 120, taxrate: 0.2 },

  { name: "منتج 3", price: 200, taxrate: 0.5 },

  { name: "منتج 4", price: 75, taxrate: 0.2 },
];

function filterProductsByPrice(products, minPrice, container) {
  const filteredProducts = products.filter(
    (product) => calculateTax1(product.price, product.taxrate) > minPrice
  );
  container.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productItem = renderProduct(product);
    container.appendChild(productItem);
  });
}
export default {
  title: "Task 7 - Interactive Product List with Map and Filter",
  description:
    "تعلم كيفية استخدام دوال map و filter في JavaScript لمعالجة وعرض قائمة المنتجات بشكل تفاعلي.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task7.js",
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
      "قائمة المنتجات",
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
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex justify-center gap-4";

    const buttonFilter = ButtonComponent({
      text: "بالضريبة عرض المنتجات الاعلي من 100 جنيه",
      className: "mt-4",
      onClick: () => {
        filterProductsByPrice(products, 100, productsList);
      },
    });

    const buttonfilter2 = ButtonComponent({
      text: "بالضريبة عرض المنتجات الاعلي من 200 جنيه",
      className: "mt-4",
      onClick: () => {
        filterProductsByPrice(products, 200, productsList);
      },
    });

    const buttonReset = ButtonComponent({
      text: "اعاده",
      className: "mt-4",
      onClick: () => {
        filterProductsByPrice(products, 0, productsList);
      },
    });

    buttonContainer.appendChild(buttonFilter);
    buttonContainer.appendChild(buttonfilter2);
    buttonContainer.appendChild(buttonReset);

    wrapper.appendChild(title);
    wrapper.appendChild(productsList);
    wrapper.appendChild(buttonContainer);
    container.appendChild(wrapper);
  },
  code: `{
    import ButtonComponent from "../components/Buttons.js";
    import CreateTitle from "../components/TitleComponent.js";
    import { renderProduct, calculateTax1 } from "../tasks/task6.js";
    const products = [
    { name: "منتج 1", price: 50, taxrate: 0.3 },

    { name: "منتج 2", price: 120, taxrate: 0.2 },

    { name: "منتج 3", price: 200, taxrate: 0.5 },

    { name: "منتج 4", price: 75, taxrate: 0.2 },
    ];

        function filterProductsByPrice(products, minPrice, container) {
    const filteredProducts = products.filter(
        (product) => calculateTax1(product.price, product.taxrate) > minPrice
    );
    container.innerHTML = "";
    filteredProducts.forEach((product) => {
        const productItem = renderProduct(product);
        container.appendChild(productItem);
    });
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
      "قائمة المنتجات",
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
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex justify-center gap-4";

    const buttonFilter = ButtonComponent({
      text: "بالضريبة عرض المنتجات الاعلي من 100 جنيه",
      className: "mt-4",
      onClick: () => {
        filterProductsByPrice(products, 100, productsList);
      },
    });

        const buttonfilter2 = ButtonComponent({
      text: "بالضريبة عرض المنتجات الاعلي من 200 جنيه",
      className: "mt-4",
      onClick: () => {
       filterProductsByPrice(products, 200, productsList);
      },
    });

    const buttonReset = ButtonComponent({
      text: "اعاده",
      className: "mt-4",
      onClick: () => {
       filterProductsByPrice(products, 0, productsList);
      },
    });

    buttonContainer.appendChild(buttonFilter);
    buttonContainer.appendChild(buttonfilter2);
    buttonContainer.appendChild(buttonReset);


    wrapper.appendChild(title);
    wrapper.appendChild(productsList);
    wrapper.appendChild(buttonContainer);
    container.appendChild(wrapper);
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};

const listsButtonsFilter = document.createElement("div");
listsButtonsFilter.className = "flex flex-row gap-4 justify-center";
listsButtonsFilter.style.direction = "rtl";

const filterButton = document.createElement("button");
filterButton.className =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
filterButton.innerText = "Filter";
filterButton.addEventListener("click", () => {
  // Add the filter logic here
});

const buttonsFilter = [
  {
    name: "filter products by price",
    fn: () => {
      // Add the filter logic here
    },
  },
  {
    name: "filter products by name",
    fn: () => {
      // Add the filter logic here
    },
  },
];
