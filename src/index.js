import HomePage from '/src/home-page.js'
import HtmlGenerator from '/src/dom-manipulation.js'
const menuDom = HtmlGenerator();
menuDom.menu()
HomePage()

/* 
[
    Fried Catfish, with greens and boiled beans.,
    Lamb's Heart, with boiled cabbage.,
    Lamb's Fry, with green peas and boiled potatoes.,
    Roast Beef, with corn and glazed carrots.,
    Prime Rib, with potatoes dauphinoise and spring salad.,
    Roast Prairie Chicken, with green beans, mashed potatoes and gravy.,
Pearson's (Beef) Stew ]*/