import HomePage from '/src/home-page.js'
import MenuPage from "/src/food-menu.js"
import ContactPage from "/src/contact-page.js"
import HtmlGenerator from '/src/dom-manipulation.js'
import "./style.css";
const menuDom = HtmlGenerator();
menuDom.nav()
const btnHome = document.querySelector('.home')
const btnContact = document.querySelector('.contact')
const btnMenu = document.querySelector('.menu')
btnHome.className += " active";
HomePage()
function clean_info (e){
    const info  = document.querySelector('.info')
    while (info.firstChild) {
        info.removeChild(info.lastChild);
    }
    if (e.textContent == 'Contact'){
        ContactPage()
    }
    if (e.textContent == 'Menu'){
        MenuPage()
    }
    if (e.textContent == 'Home'){
        HomePage()
    }
}
function btnActive (){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    clean_info(this)
}
let btns = document.querySelectorAll('button');

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    clean_info(this)
  });
}
