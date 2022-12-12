import HomePage from '/src/home-page.js'
import MenuPage from "/src/food-menu.js"
import ContactPage from "/src/contact-page.js"
import HtmlGenerator from '/src/dom-manipulation.js'
import "./style.css";
import Bullet from '/src/img/bullet-hole.png'
const menuDom = HtmlGenerator();
menuDom.menu()
const btnHome = document.querySelector('.home')
const btnContact = document.querySelector('.contact')
const btnMenu = document.querySelector('.menu')
HomePage()
btnHome.append(Bullet)
function clean_info (){
    const info  = document.querySelector('.info')
    while (info.firstChild) {
        info.removeChild(info.lastChild);
    }
    if (this.textContent == 'Contact'){
        ContactPage()
    }
    if (this.textContent == 'Menu'){
        MenuPage()
    }
    if (this.textContent == 'Home'){
        HomePage()
    }
}
btnHome.addEventListener('click',clean_info)
btnContact.addEventListener('click',clean_info)
btnMenu.addEventListener('click',clean_info)

