import HtmlGenerator from '/src/dom-manipulation.js'
import BtnIconActive from './Menubtn.js';
import "./style.css";
import {HomePage }from './createPages.js'

const menuDom = HtmlGenerator();
menuDom.nav()
/* put an icon when a menu btn is selected */
BtnIconActive()
HomePage()


