import {MenuPage,ContactPage,HomePage }from './createPages.js'
import {createElementDom} from "/src/dom-manipulation.js";


function navElement() {
  const domElements = createElementDom()
  console.log(domElements)
  const header = domElements.objNameCreator(["div", "class", "header", null], true);
  const restaurantName = domElements.objNameCreator([
    "h1",
    "class",
    "name-logo",
    "Van der Linde",
  ]);
  const btnHome = domElements.objNameCreator(["button", "class", "home", "Home"]);
  const btnMenu = domElements.objNameCreator(["button", "class", "menu", "Menu"]);
  const btnContact = domElements.objNameCreator([
    "button",
    "class",
    "contact",
    "Contact",
  ]);
  const arr = [restaurantName, btnHome, btnMenu, btnContact];

  content.appendChild(header);
  arr.forEach((toCreate) => {
    const el = domElements.elementsGenerator(toCreate);
    header.appendChild(el);
  })
  btnIconActive()
}

function btnIconActive() {
  const btnHome = document.querySelector(".home");
  btnHome.setAttribute("id", "icon-on");
  const callPages = {
    'Contact':ContactPage,
    'Menu': MenuPage,
    'Home': HomePage 
  }
  function clean_info(e) {
    const info = document.querySelector(".info");
    while (info.firstChild) {
      info.removeChild(info.lastChild);
    }
    callPages[e.textContent]()
  }

  function btnActive() {
    let current = document.getElementById("icon-on");
    current.setAttribute("id", "");
    this.setAttribute("id", "icon-on");
    clean_info(this);
  }
  let btns = document.querySelectorAll("button");
  btns.forEach((btn) => btn.addEventListener("click", btnActive));
}
export default navElement