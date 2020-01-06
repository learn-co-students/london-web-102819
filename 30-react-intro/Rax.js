const Rax = {
  createElement: (tag, options = {}) => {
    const el = document.createElement(tag);

    if (options.innerText) el.innerText = options.innerText;
    if (options.onClick) el.addEventListener("click", options.onClick);
    if (options.children) el.append(...options.children);

    return el;
  }
};
