function ButtonComponent({ text = "", className = "", onClick, ...props }) {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = `px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mx-auto w-1/2 block ${className}`;

  Object.entries(props).forEach(([key, val]) => {
    button[key] = val;
  });

  if (typeof onClick === "function") {
    button.addEventListener("click", onClick);
  }

  return button;
}

export default ButtonComponent;
