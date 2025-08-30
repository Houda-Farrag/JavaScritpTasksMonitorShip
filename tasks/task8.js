import CreateTitle from "../components/TitleComponent.js";

const libraryBooks = {
  fiction: [
    { title: "Neon Dreams", author: "Author Cyber", pages: 150 },

    { title: "Electric Shadows", author: "Author Spark", pages: 200 },
  ],

  science: [
    { title: "Quantum Realms", author: "Author Quark", pages: 300 },

    { title: "Cosmic Light", author: "Author Astro", pages: 250 },
  ],

  history: [
    { title: "Ancient Legends", author: "Author Ancient", pages: 400 },

    { title: "Modern History", author: "Author Modern", pages: 350 },
  ],
};

export default {
  title: "Task 8 - Library Book Catalogue",
  description:
    "تعلم كيفية عرض الكتب وتصنيفها باستخدام JavaScript، مع حساب إجمالي عدد الصفحات في المكتبة.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task8.js",
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
      "مكتبتنا",
      "text-5xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white text-blue-800 ",
      "h1"
    );

    function calculateTotalPagesForCategory(books) {
      return books.reduce((total, book) => total + book.pages, 0);
    }
    
    function calculateTotalPages() {
      return Object.values(libraryBooks).reduce(
        (total, books) => total + calculateTotalPagesForCategory(books),
        0
      );
    }

    wrapper.appendChild(title);

    Object.entries(libraryBooks).forEach(([category, books]) => {
      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = `كتب ${category}`;
      categoryTitle.className =
        "py-2 px-4 rounded capitalize bg-gray-200 text-3xl font-bold mb-2 text-right   bg-white text-blue-800 mt-5";
      wrapper.appendChild(categoryTitle);

      const booksList = document.createElement("div");
      booksList.className =
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ";

      books.forEach((book) => {
        const bookItem = document.createElement("div");
        bookItem.className =
          "flex flex-col gap-2 border border-gray-300 p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer";
        bookItem.innerHTML = `
          <h3 class="text-2xl font-bold text-center text-blue-800">${book.title}</h3>
          <p class="text-gray-600 text-xl font-bold">المؤلف: ${book.author}</p>
          <p class="text-gray-600 text-xl font-bold">عدد الصفحات: <span class="text-blue-500">${book.pages}</span></p>
        `;
        booksList.appendChild(bookItem);
        wrapper.appendChild(booksList);
      });
    });

    const totalPages = calculateTotalPages();
    const totalPagesElement = document.createElement("p");
    totalPagesElement.className =
      "text-2xl font-bold text-center text-blue-800 mt-4";
    totalPagesElement.innerHTML = ` عدد كل الصفحات : <span class="text-green-600">${totalPages}</span> صفحة`;
    wrapper.appendChild(totalPagesElement);

    container.appendChild(wrapper);
  },
  code: `{
  const libraryBooks = {
    fiction: [
      { title: "Neon Dreams", author: "Author Cyber", pages: 150 },

      { title: "Electric Shadows", author: "Author Spark", pages: 200 },
    ],

    science: [
      { title: "Quantum Realms", author: "Author Quark", pages: 300 },

      { title: "Cosmic Light", author: "Author Astro", pages: 250 },
    ],

    history: [
      { title: "Ancient Legends", author: "Author Ancient", pages: 400 },

      { title: "Modern History", author: "Author Modern", pages: 350 },
    ],
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
      "مكتبتنا",
      "text-5xl font-bold mb-4 text-center border-b border-gray-300 p-6 bg-white text-blue-800 ",
      "h1"
    );

    function calculateTotalPagesForCategory(books) {
      return books.reduce((total, book) => total + book.pages, 0);
    }
    
    function calculateTotalPages() {
      return Object.values(libraryBooks).reduce(
        (total, books) => total + calculateTotalPagesForCategory(books),
        0
      );
    }

    wrapper.appendChild(title);

    Object.entries(libraryBooks).forEach(([category, books]) => {
      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = \`كتب \${category}\`;
      categoryTitle.className =
        "py-2 px-4 rounded capitalize bg-gray-200 text-3xl font-bold mb-2 text-right   bg-white text-blue-800 mt-5";
      wrapper.appendChild(categoryTitle);

      const booksList = document.createElement("div");
      booksList.className =
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ";

      books.forEach((book) => {
        const bookItem = document.createElement("div");
        bookItem.className =
          "flex flex-col gap-2 border border-gray-300 p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer";
        bookItem.innerHTML = \`
          <h3 class="text-2xl font-bold text-center text-blue-800">\${book.title}</h3>
          <p class="text-gray-600 text-xl font-bold">المؤلف: \${book.author}</p>
          <p class="text-gray-600 text-xl font-bold">عدد الصفحات: <span class="text-blue-500">\${book.pages}</span></p>
        \`;
        booksList.appendChild(bookItem);
        wrapper.appendChild(booksList);
      });
    });

    const totalPages = calculateTotalPages();
    const totalPagesElement = document.createElement("p");
    totalPagesElement.className =
      "text-2xl font-bold text-center text-blue-800 mt-4";
    totalPagesElement.innerHTML = \` عدد كل الصفحات : <span class="text-green-600">\${totalPages}</span> صفحة\`;
    wrapper.appendChild(totalPagesElement);

    container.appendChild(wrapper);

}`,
  directionDescription: "rtl", // This can be used to set the text direction for Arabic
};
