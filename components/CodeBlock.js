setTimeout(() => window.Prism.highlightAll(), 0);
export default function CodeBlock(code) {
  const pre = document.createElement("pre");
  pre.style.whiteSpace = "pre-wrap"; // Preserve line breaks and wrap long lines
  pre.style.fontFamily = "monospace"; // Use monospace font for code
  pre.style.background = "#f5f5f5";   // Light background for code block
  pre.style.padding = "1em";
  pre.style.borderRadius = "6px";
  pre.style.overflowX = "auto";
  pre.style.position = "relative";
  const codeEl = document.createElement("code");
  codeEl.className = "language-js ";
  codeEl.textContent = code.trim();
  pre.appendChild(codeEl);

  // Use Prism.js for syntax highlighting
  setTimeout(() => Prism.highlightAll(), 0);
  return pre;
}

