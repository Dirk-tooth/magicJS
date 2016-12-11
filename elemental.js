function attachProps(element, props){
  typeof props === 'string' ? element.setAttribute('class', props) :
  Object.keys(props).forEach(key =>
    key === 'onclick' ? element.addEventListener('click', props[key]) :
                        element.setAttribute(key, props[key])
  )
}

function addChildren(element, children){
  typeof children === 'object' ? children.forEach(child => (
      typeof child === 'function' ? element.appendChild(child(props))
                                  : element.appendChild(child))
  ) : element.innerText = children;
}

function Element(type) {
  return function(props = {}, children = []) {
    const fragment = document.createDocumentFragment();
    el = document.createElement(type);
    if(props){ attachProps(el, props); }
    if(children){ addChildren(el, children); }
    fragment.appendChild(el);
    return fragment;
  }
};

['div', 'a', 'img', 'span', 'h1', 'h2', 'h3', 'h4', 'ul', 'li', 'input', 'button'].forEach(
  el => module.exports[el] = Element(el)
);

module.exports.Element = Element;
