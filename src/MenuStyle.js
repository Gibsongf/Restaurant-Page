import {MenuPage,ContactPage,HomePage }from './createPages.js'

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
export default btnIconActive