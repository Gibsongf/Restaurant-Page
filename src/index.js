import {MenuPage,ContactPage,HomePage } from './createPages.js'
import HtmlGenerator from '/src/dom-manipulation.js'
import BtnIconActive from './MenuStyle.js';
import "./style.css";
const menuDom = HtmlGenerator();
menuDom.nav()
HomePage()
BtnIconActive ()
/* const btnHome = document.querySelector('.home')
btnHome.setAttribute('id','bullet')

const pagesObj = {
    'Contact':ContactPage,
    'Menu': MenuPage,
    'Home': HomePage 
  }
function clean_info (e){
    const info  = document.querySelector('.info')
    while (info.firstChild) {
        info.removeChild(info.lastChild);
    }
    pagesObj[e.textContent]()
}

function btnActive() {
    let current = document.getElementById('bullet')
    current.setAttribute('id','');
    this.setAttribute('id','bullet')
    clean_info(this)
  }
let btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click',btnActive) ) */

