// Renders a list of tasks in the given container, calls onSelect(task) when clicked
export default function TaskList(container, tasks, onSelect) {
  container.innerHTML = ""; // clear previous

  const list = document.createElement("ul");
  list.className = "space-y-2";

  tasks.forEach((task, idx) => {
    const item = document.createElement("li");
    item.className = "cursor-pointer px-3 py-2 rounded hover:bg-gray-100 border border-gray-200";
    item.innerText =  `Task ${idx + 1}`;
    item.onclick = (item) => {
      onSelect(task);
      item.target.classList.add("bg-gray-200");
      const siblings = item.target.parentElement.children;
      Array.from(siblings).forEach((sibling) => {
        if (sibling !== item.target) {
          sibling.classList.remove("bg-gray-200");
        }
      });
    };
    list.appendChild(item);
  });

  container.appendChild(list);
}