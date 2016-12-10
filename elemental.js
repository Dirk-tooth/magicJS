function Element(type, props = {}, events = {}, children = []) {
  const fragment = document.createDocumentFragment();
  el = document.createElement(type);
  Object.keys(props).forEach(key => el.setAttribute(key, props[key]));
  Object.keys(events).forEach(key => el.addEventListener(key, events[key]));
  typeof children === 'object' ? children.forEach(child => (
                                  typeof child === 'function' ? el.appendChild(child(props))
                                                              : el.appendChild(child))) :
                                 el.innerText = children;
  fragment.appendChild(el);
  return fragment;
};

module.exports.Element = Element;
