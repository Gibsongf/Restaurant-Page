import "./style.css";

function pageCreator() {
  const content = document.getElementById("content");
  const info = objNameCreator(["div", "class", "info", null], true);

  function elementsGenerator(element_obj) {
    const el = document.createElement(element_obj["type"]);
    if (element_obj["type"] == "IMG") {
      el.setAttribute("src", element_obj["src_img"]);
    }

    if (element_obj["selector_type"] == "class") {
      el.classList.add(element_obj["selector_name"]);
    }
    if (element_obj["selector_type"] == "id") {
      el.setAttribute("id", element_obj["selector_name"]);
    }

    el.textContent = element_obj["text_content"];
    return el;
  }

  function objNameCreator(lst, makeElement) {
    const obj = {
      type: lst[0],
      selector_type: lst[1],
      selector_name: lst[2],
      text_content: lst[3],
      src_img: lst[4],
    };
    if (makeElement) {
      const el = elementsGenerator(obj);
      return el;
    }
    return obj;
  }
  function menu() {
    const header = objNameCreator(["div", "class", "header", null], true);
    const restaurantName = objNameCreator([
      "h1",
      "class",
      "name-logo",
      "Van der Linde",
    ]);
    const btnHome = objNameCreator(["button", "class", "home", "Home"]);
    const btnMenu = objNameCreator(["button", "class", "menu", "Menu"]);
    const btnContact = objNameCreator([
      "button",
      "class",
      "contact",
      "Contact",
    ]);
    const arr = [restaurantName, btnHome, btnMenu, btnContact];

    content.appendChild(header);
    multipleDiv(arr, header);
  }
  function multipleDiv(el_info, parent) {
    el_info.forEach((toCreate) => {
      const el = elementsGenerator(toCreate);
      parent.appendChild(el);
    });
  }

  function objPattern(arr) {
    const keys = ["div-1-text", "pText", "img-src"];
    let obj = {};
    for (let k in keys) {
      obj[keys[k]] = arr[k];
    }
    return obj;
  }

  function pElement(text, parent) {
    const p = objNameCreator(["p", null, null, text], true);
    parent.appendChild(p);
  }

  function imgElement(imgSrc, parent, childAppend) {
    const imgTitle = objNameCreator(
      ["IMG", "class", "sub-containers-img", null, imgSrc, null],
      true
    );
    if (childAppend) {
      parent.firstChild.appendChild(imgTitle);
      return;
    }
    parent.appendChild(imgTitle);
  }

  function divWithChild(child_text) {
    const defaultContainer = objNameCreator(
      ["div", "class", "sub-containers"],
      true
    );
    const div_child = objNameCreator(
      ["div", "class", "title", child_text],
      true
    );
    defaultContainer.appendChild(div_child);
    return defaultContainer;
  }
  function defaultBodyCreator(arr) {
    const obj = objPattern(arr);
    const mainDiv = divWithChild(obj["div-1-text"]);
    pElement(obj["pText"], mainDiv);
    imgElement(obj["img-src"], mainDiv);
    info.appendChild(mainDiv);
    content.append(info);
  }
  /* console.log('order of info = div-1-text,  img-top-src, pText, img-bot-name, img-bot-src') */
  return { defaultBodyCreator, menu };
}
export default pageCreator;
