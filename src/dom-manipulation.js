function pageCreator() {
  const content = document.getElementById("content");

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
  function nav() {
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

  function imgElement(imgSrc, parent, childAppend, default_selector) {
    let img_info = ["IMG", "class", "sub-containers-img", null, imgSrc, null];
    if (default_selector >= 1) img_info[2] = default_selector;
    const imgTitle = objNameCreator(img_info, true);
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
  function has_info_div() {
    const info = document.querySelector(".info");
    if (info === null) {
      const info = objNameCreator(["div", "class", "info", null], true);
      return info;
    }
    return info;
  }
  function defaultBodyCreator(arr) {
    const info = has_info_div();
    const obj = objPattern(arr);
    const mainDiv = divWithChild(obj["div-1-text"]);
    pElement(obj["pText"], mainDiv);
    imgElement(obj["img-src"], mainDiv);
    info.appendChild(mainDiv);
    content.append(info);
  }

  function smaller_img() {
    const imgs = document.querySelectorAll(".sub-containers-img");
    imgs.forEach((img) => img.setAttribute("style", "width:650px"));
  }

  return { defaultBodyCreator, nav, smaller_img, imgElement };
}
export default pageCreator;
