import HomePage from '/src/home-page.js'
import MenuPage from "/src/food-menu.js"
import HtmlGenerator from '/src/dom-manipulation.js'
import "./style.css";

const menuDom = HtmlGenerator();
menuDom.menu()
/* HomePage() */
MenuPage()

