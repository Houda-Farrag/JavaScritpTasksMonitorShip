export default {
  title: "Task 2 - Counter App",
  description: "A simple counter with increment and decrement buttons.",
  github: "https://github.com/yourusername/js-tasks/tree/main/task1",
  notes: "I learned about DOM manipulation and event listeners in this task.",

  // Renders UI for this task
  render: (container) => {
    container.innerHTML = ""; // clear previous content

    let value = 0;

    const wrapper = document.createElement("div");
    wrapper.className =
      "flex flex-col items-center space-y-4 p-4 bg-gray-50 border rounded shadow";

    const display = document.createElement("p");
    display.className = "text-xl font-semibold";
    display.innerText = `Value: ${value}`;

    const buttons = document.createElement("div");
    buttons.className = "space-x-4";

    const inc = document.createElement("button");
    inc.innerText = "Increment";
    inc.className =
      "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600";
    inc.onclick = () => {
      value++;
      display.innerText = `Value: ${value}`;
    };

    const dec = document.createElement("button");
    dec.innerText = "Decrement";
    dec.className = "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600";
    dec.onclick = () => {
      value--;
      display.innerText = `Value: ${value}`;
    };

    buttons.appendChild(inc);
    buttons.appendChild(dec);
    wrapper.appendChild(display);
    wrapper.appendChild(buttons);
    container.appendChild(wrapper);
  },

  // Code snippet for display
  code: `
let value = 0;

function increment() {
  value++;
  console.log("Value:", value);
}

function decrement() {
  value--;
  console.log("Value:", value);
}
  `,
};
