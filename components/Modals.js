function Modal({ show = false, onClose, fields = [], onSubmit, submitBtnText = "حفظ" }) {
  if (!show) return null;

  // Create overlay
  const overlay = document.createElement("div");

  overlay.className = "fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-[1000]";
  overlay.onclick = (e) => {
    e.stopPropagation();
    if (e.target === overlay) {
      if (typeof onClose === "function") onClose();
      overlay.remove();
    }
  }
  // Create modal
  const modal = document.createElement("div");

  modal.className = "bg-white p-4 rounded-lg shadow-md w-96 bg-white p-5 rounded-lg shadow-lg min-w-[300px] max-w-1/2 max-h-[500px] overflow-y-auto relative";

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.innerText = `${String.fromCharCode(10006)}`;
  closeBtn.style.fontSize = "14px";
  closeBtn.className = "absolute top-1 left-1  hover:text-gray-800 cursor-pointer  font-bold rounded-full  p-1 bg-gray-100 hover:bg-gray-200 rounded-full ";
  closeBtn.onclick = () => {
    if (typeof onClose === "function") onClose();
    overlay.remove();
  };

  // Form
  const form = document.createElement("form");
  form.className = "flex flex-col gap-4 rtl:text-right ltr:text-left mt-2";
  const formData = {};

  fields.forEach((field) => {
    const inputGroup = document.createElement("div");
    inputGroup.dir = "rtl";
    inputGroup.className = "mb-4 rtl:text-right ltr:text-left flex gap-2 pt-2";
    inputGroup.style.marginBottom = "15px";

    const label = document.createElement("label");
    label.innerText = field.label;
    label.className = "block text-gray-700 font-semibold  rtl:text-right ltr:text-left text-nowrap";
    const input = document.createElement("input");
    input.type = field.type || "text";
    input.name = field.name;
    input.required = !!field.required;
    input.value = "";
    input.className = "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
    input.oninput = (e) => {
      formData[field.name] = e.target.value;
    };

    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    form.appendChild(inputGroup);
  });

  // Submit button
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = submitBtnText;
  submitBtn.className = "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-fit mx-auto";
  form.appendChild(submitBtn);

  form.onsubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") onSubmit(formData);
    if (typeof onClose === "function") onClose();
    overlay.remove();
  };

  modal.appendChild(closeBtn);
  modal.appendChild(form);
  overlay.appendChild(modal);

  // Append to body
  document.body.appendChild(overlay);

  return overlay;
}

export default Modal;
