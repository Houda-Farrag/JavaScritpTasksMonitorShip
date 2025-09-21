import ButtonComponent from "../../components/Buttons.js";
import Modal from "../../components/Modals.js";
import CreateTitle from "../../components/TitleComponent.js";

let modalshow = false;
const products = [
  {
    name: "لابتوب",
    price: 15000,
    description: "لابتوب عالي الأداء للألعاب والبرمجة",
  },

  { name: "هاتف", price: 8000, description: "هاتف ذكي مع شاشة AMOLED" },

  { name: "سماعات", price: 500, description: "سماعات أذن عالية الجودة" },
];

function renderProducts() {
  const productContainer = document.getElementById(
    "product-container-electronics"
  );
  productContainer.innerHTML = "";
  products.forEach((product, index) => {
    console.log(index);
    productContainer.appendChild(renderProduct(product, index));
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}

function updateProduct(index) {
  Modal({
    show: true,
    fields: [
      { name: "name", label: "اسم المنتج", required: true },
      { name: "price", label: "سعر المنتج", type: "number" },
      { name: "description", label: "وصف المنتج" },
    ],
    onSubmit: (data) => {
      products[index].name = data.name;
      products[index].price = data.price;
      products[index].description = data.description;
      renderProducts();
      modalshow = false;
    },
    onClose: () => {
      modalshow = false;
    },
  });
}

function renderProduct(product, index) {
  const productContainer = document.createElement("div");
  productContainer.className = "border border-gray-300 p-4 rounded-lg flex";
  productContainer.style.direction = "rtl";

  const productDetails = document.createElement("div");
  productDetails.className =
    "flex-1 flex flex-col  rtl:text-right ltr:text-left";
  productDetails.innerHTML = `<h3 class="text-xl font-semibold mb-2 rtl:text-right ltr:text-left">${product.name}</h3>
  <p class="text-gray-600 rtl:text-right ltr:text-left">السعر: <span class="text-green-600 font-semibold">${product.price}</span> جنيه</p>
  <p class="text-gray-600 rtl:text-right ltr:text-left">وصف المنتج: ${product.description}</p> 
  `;

  const deleteButton = ButtonComponent({
    text: "حذف",
    className: "bg-red-400 text-white hover:bg-red-600 h-fit",
    onClick: () => deleteProduct(index),
  });

  const updateButton = ButtonComponent(
    {
      text: "تعديل",
      className:
        "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 h-fit",
      onClick: () => updateProduct(index),
    },
    "bg-blue-400 text-white"
  );

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className =
    "flex justify-end gap-2 mt-4 rtl:text-right ltr:text-left";

  buttonsContainer.appendChild(deleteButton);
  buttonsContainer.appendChild(updateButton);

  productContainer.appendChild(productDetails);
  productContainer.appendChild(buttonsContainer);
  return productContainer;
}

export default {
  title: "Task 9 - Interactive Product List with Map and Filter",
  description:
    "تعلم كيفية إدارة قائمة المنتجات مع إمكانيات الحذف والتعديل باستخدام JavaScript.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task9.js",
  notes: "تم اضافه بعض المميزات مثل ظهور الموديل لادخال البيانات وتحديث البيانات وامكانيه اضافه عنصر او منتج جديد",
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
    productsList.className = "mt-4  pl-5 flex flex-col gap-4";
    productsList.style.direction = "rtl";
    productsList.id = "product-container-electronics";

    products.forEach((product, index) => {
      const productItem = renderProduct(product, index);
      productsList.appendChild(productItem);
    });

    const buttonAddProduct = ButtonComponent({
      text: "اضافة منتج جديد +",
      className: "mt-4",
      onClick: () => {
        Modal({
          show: true,
          fields: [
            { name: "name", label: "اسم المنتج", required: true },
            { name: "price", label: "سعر المنتج", type: "number" },
            { name: "description", label: "وصف المنتج" },
          ],
          onSubmit: (data) => {
            products.push(data);
            renderProducts();
            modalshow = false;
          },
          onClose: () => {
            modalshow = false;
          },
        });
      },
    })
    wrapper.appendChild(title);
    wrapper.appendChild(productsList);
    wrapper.appendChild(buttonAddProduct);
    container.appendChild(wrapper);
  },
  code: ` {
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
    productsList.className = "mt-4  pl-5 flex flex-col gap-4";
    productsList.style.direction = "rtl";
    productsList.id = "product-container-electronics";

    products.forEach((product, index) => {
      const productItem = renderProduct(product, index);
      productsList.appendChild(productItem);
    });

    const buttonAddProduct = ButtonComponent({
      text: "اضافة منتج جديد +",
      className: "mt-4",
      onClick: () => {
        Modal({
          show: true,
          fields: [
            { name: "name", label: "اسم المنتج", required: true },
            { name: "price", label: "سعر المنتج", type: "number" },
            { name: "description", label: "وصف المنتج" },
          ],
          onSubmit: (data) => {
            products.push(data);
            renderProducts();
            modalshow = false;
          },
          onClose: () => {
            modalshow = false;
          },
        });
      },
    })
    wrapper.appendChild(title);
    wrapper.appendChild(productsList);
    wrapper.appendChild(buttonAddProduct);
    container.appendChild(wrapper);
  }`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
