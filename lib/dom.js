export function createElement(tag, attributes, children) {
  const element = document.createElement(tag);
  if (attributes) {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
  if (children) {
    for (let child of children) {
      if (child) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        element.appendChild(child);
      }
    }
  }
  console.log(element);
  return element;
}
