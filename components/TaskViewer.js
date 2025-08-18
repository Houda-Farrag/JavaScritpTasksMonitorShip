import CodeBlock from "./CodeBlock.js";

export default function TaskViewer(
  container,
  task,
  directionDescription = "rtl"
) {
  container.innerHTML = "";
  container.className =
    "relative ms-4 p-4 pb-16 bg-white rounded shadow-md max-w-full  mx-auto w-full h-full overflow-y-auto rtl:text-right ltr:text-left relative  ";
  container.style.direction = directionDescription; // Set text direction for Arabic or other languages
  const title = document.createElement("h2");
  title.innerHTML = `<span>${task.title}</span> <a href="${task.github}" target="_blank" class="text-sm text-blue-500  w-full hover:underline mb-4 rtl:text-right ltr:text-left text-center py-2 my-4">(View on GitHub)</a>`;
  title.className =
    "sticky -top-4 bg-white text-2xl font-bold mb-4 w-full border-b border-gray-300 py-4 text-center z-10 rtl:text-right ltr:text-left";
  const desc = document.createElement("p");
  desc.innerHTML = `<strong>Description:</strong> ${task.description}`;
  desc.className = "text-gray-700 mb-4 rtl:text-right ltr:text-left";
  desc.style.direction = directionDescription; // Set direction to RTL for Arabic text
  const notes = document.createElement("p");
  notes.className = "text-gray-600 mb-4 rtl:text-right ltr:text-left";
  notes.innerHTML = `<strong>Notes:</strong> ${task.notes}`;
  notes.style.direction = directionDescription; // Set direction to RTL for Arabic text

  const uiContainer = document.createElement("div");
  task.render(uiContainer);
  uiContainer.className = "mb-8";

  const codeBlock = CodeBlock(task.code);
  codeBlock.style.direction = "ltr"; // Set direction to RTL for Arabic text

  // Show/Hide Code Button
  const toggleButton = document.createElement("button");
  toggleButton.className =
    "fixed bottom-4 right-8 bg-gray-200 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow hover:shadow-lg";

  toggleButton.style.zIndex = "1000"; // Ensure the button is above other elements

  toggleButton.innerText = "Hide Code";
  toggleButton.onclick = (e) => {
    e.preventDefault();
    codeBlock.classList.toggle("hidden");
    toggleButton.innerText = codeBlock.classList.contains("hidden")
      ? "Show Code"
      : "Hide Code";
  };

  const copyButton = document.createElement("button");
  copyButton.className =
    "absolute top-4 right-4 bg-gray-200 text-blue-500   px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow hover:shadow-lg";
  copyButton.innerText = "Copy Code";
  copyButton.onclick = () => {
    navigator.clipboard
      .writeText(task.code)
      .then(() => {
        copyButton.innerText = "Copied!";
        setTimeout(() => {
          copyButton.innerText = "Copy Code...";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  };
  codeBlock.className = "mt-4 bg-gray-100 p-4 rounded shadow-md relative";
  codeBlock.appendChild(copyButton);
  container.append(
    title,
    uiContainer,
    codeBlock,
    desc,
    notes,
    toggleButton
  );
}
