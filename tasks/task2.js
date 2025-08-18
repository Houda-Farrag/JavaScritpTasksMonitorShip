export default {
  title: "Task 2 - Calculator App",
  description:
    "Create a simple calculator app that performs basic arithmetic operations (addition, subtraction, multiplication, division) and additional operations like modulus, exponentiation, square, square root, absolute value, negation, increment, and decrement. The app should have a user interface with input fields for two numbers and buttons for each operation. The result should be displayed dynamically when an operation is performed.",
  github:
    "https://github.com/Houda-Farrag/JavaScritpTasksMonitorShip/blob/main/tasks/task2.js",
  notes:
    "This task involves creating a simple calculator app that performs various arithmetic operations. The app should have a user interface with input fields for two numbers and buttons for each operation. The result should be displayed dynamically when an operation is performed. The code includes validation to ensure that inputs are numbers and handles errors gracefully.",

  // Renders UI for this task
  render: (container) => {
    container.innerHTML = ""; // clear previous content
    container.className =
      "p-4 bg-white rounded shadow-md max-w-full mx-auto overflow-y-auto";

    const firstNumberInput = document.createElement("input");
    firstNumberInput.type = "number";
    firstNumberInput.placeholder = "First Number";
    firstNumberInput.className = "border p-2 rounded w-full mb-4";

    const secondNumberInput = document.createElement("input");
    secondNumberInput.type = "number";
    secondNumberInput.placeholder = "Second Number";
    secondNumberInput.className = "border p-2 rounded w-full mb-4";

    const operations = [
      { name: "Add", fn: add },
      { name: "Subtract", fn: subtract },
      { name: "Multiply", fn: multiply },
      { name: "Divide", fn: divide },
      {
        name: "Modulus",
        fn: (a, b) => {
          validateNumbers(a, b);
          return a % b;
        },
      },
      {
        name: "Exponentiation",
        fn: (a, b) => {
          validateNumbers(a, b);

          return a ** b;
        },
      },
      {
        name: "Square firstNumber",
        fn: (a) => {
          validateNumbers(a, 0);
          return a * a;
        },
      },
      {
        name: "Square Root firstNumber",
        fn: (a) => {
          validateNumbers(a, 0);
          if (a < 0) {
            throw new Error(
              "Cannot calculate square root of a negative number"
            );
          }
          return Math.sqrt(a);
        },
      },
      {
        name: "Absolute Value firstNumber",
        fn: (a) => {
          validateNumbers(a, 0);
          return Math.abs(a);
        },
      },
      {
        name: "Negation firstNumber",
        fn: (a) => {
          validateNumbers(a, 0);
          return -a;
        },
      },
      {
        name: "Increment firstNumber",
        fn: (a) => {
          validateNumbers(a, 0);
          return a + 1;
        },
      },
      {
        name: "Decrement firstNumber",
        fn: (a) => {
          validateNumbers(a, 0);
          return a - 1;
        },
      },
    ];

    const inputsContainer = document.createElement("div");
    inputsContainer.className = "mb-4 grid grid-cols-2 gap-4";
    inputsContainer.appendChild(firstNumberInput);
    inputsContainer.appendChild(secondNumberInput);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "mt-4 w-full grid grid-cols-2 gap-4";

    operations.forEach(({ name, fn }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded";
      btn.innerText = name;
      btn.addEventListener("click", () =>
        handleOperation(fn, firstNumberInput, secondNumberInput)
      );
      buttonsContainer.appendChild(btn);
    });

    const resultContainer = document.createElement("div");
    resultContainer.className = "mt-4 text-lg font-bold mb-4";
    resultContainer.id = "result";
    resultContainer.innerHTML = `<p>function: <strong class="text-blue-500">${
      add.name
    }</strong></p> <p> Result: = <strong class="text-blue-500">${add(
      0,
      0
    )}</strong></p>`;

    container.appendChild(resultContainer);
    container.appendChild(inputsContainer);
    container.appendChild(buttonsContainer);
  },

  // Code snippet for display
  code: ` {
    container.innerHTML = ""; // clear previous content
    container.className =
      "p-4 bg-white rounded shadow-md max-w-full mx-auto overflow-y-auto border border-gray-200";

    const firstNumberInput = document.createElement("input");
    firstNumberInput.type = "number";
    firstNumberInput.placeholder = "First Number";
    firstNumberInput.className = "border p-2 rounded w-full mb-4";

    const secondNumberInput = document.createElement("input");
    secondNumberInput.type = "number";
    secondNumberInput.placeholder = "Second Number";
    secondNumberInput.className = "border p-2 rounded w-full mb-4";

    const operations = [
      { name: "Add", fn: add },
      { name: "Subtract", fn: subtract },
      { name: "Multiply", fn: multiply },
      { name: "Divide", fn: divide },
      { name: "Modulus", fn: (a, b) => {
        validateNumbers(a, b);
        return a % b;
      } },
      { name: "Exponentiation", fn: (a, b) => {
        validateNumbers(a, b);
    
        return a ** b;
      } },
      { name: "Square firstNumber", fn: (a) => {
        validateNumbers(a, 0);
        return a * a;
      } },
      { name: "Square Root firstNumber", fn: (a) => {
        validateNumbers(a, 0);
        if (a < 0) {
          throw new Error("Cannot calculate square root of a negative number");
        }
        return Math.sqrt(a);
      } },
      { name: "Absolute Value firstNumber", fn: (a) => {
        validateNumbers(a, 0);
        return Math.abs(a);
      } },
      { name: "Negation firstNumber", fn: (a) => {
        validateNumbers(a, 0);
        return -a;
      } },
      { name: "Increment firstNumber", fn: (a) => {
        validateNumbers(a, 0);
        return a + 1;
      } },
      { name: "Decrement firstNumber", fn: (a) => {
        validateNumbers(a, 0);
        return a - 1;
      } },
    ];

    const inputsContainer = document.createElement("div");
    inputsContainer.className = "mb-4 grid grid-cols-2 gap-4";
    inputsContainer.appendChild(firstNumberInput);
    inputsContainer.appendChild(secondNumberInput);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "mt-4 w-full grid grid-cols-2 gap-4";

    operations.forEach(({ name, fn }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded";
      btn.innerText = name;
      btn.addEventListener("click", () =>
        handleOperation(fn, firstNumberInput, secondNumberInput)
      );
      buttonsContainer.appendChild(btn);
    });

    const resultContainer = document.createElement("div");
    resultContainer.className = "mt-4 text-lg font-bold mb-4";
    resultContainer.id = "result";
     resultContainer.innerHTML = \`<p>function: <strong class="text-blue-500">\${add.name}</strong></p> <p> Result: = <strong class="text-blue-500">\${add(0, 0)}</strong></p>\`;

    container.appendChild(resultContainer);
    container.appendChild(inputsContainer);
    container.appendChild(buttonsContainer);
  }`,
};

function handleOperation(operationFn, firstNumberInput, secondNumberInput) {
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  try {
    const result = operationFn(firstNumber, secondNumber);
    const resultContainer = document.getElementById("result");
    //  `<p>function: <strong class="text-blue-500">${add.name}</strong></p> <p> Result: = <strong class="text-blue-500">${add(0, 0)}</strong></p>`
    resultContainer.innerHTML = `<p>function: <strong class="text-blue-500">${operationFn.name}</strong></p> <p> Result: = <strong class="text-blue-500">${result}</strong></p>`;
  } catch (error) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `Error: ${error.message}`;
  }
}

function validateNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Arguments must not be NaN");
  }
}

// additional function for two numbers
function add(a, b) {
  validateNumbers(a, b);
  return a + b;
}

// multiply function
function multiply(a, b) {
  validateNumbers(a, b);
  return a * b;
}

// divide function
function divide(a, b) {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// subtract function
function subtract(a, b) {
  validateNumbers(a, b);
  if (b > a) {
    throw new Error(
      "Second number must be less than or equal to the first number"
    );
  }
  return a - b;
}
