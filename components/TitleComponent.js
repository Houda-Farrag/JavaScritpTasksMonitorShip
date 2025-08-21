export default function CreateTitle(
  text,
  className = "text-2xl font-bold mb-4 text-center",
  elementType = "h2"
) {
  const title = document.createElement(elementType);
  title.textContent = text;
  title.className = className;
  return title;
}
