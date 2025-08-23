const InputComponent = ({
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  ...props
}) => {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.className = `w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
    input.value = value;
    input.onChange = onChange;
    Object.assign(input, props);
    return input;
  
};

export default InputComponent;
