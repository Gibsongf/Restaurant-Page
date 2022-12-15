import {defaultPagePattern} from "/src/dom-manipulation.js";
import { getAllImgs, getNameDescriptionSrc } from "/src/getmultipleimgs.js";
import ChefSpecial from "/src/img/pearson-stew.jpeg";
import Rdr2 from "/src/img/rdr2.jpeg";
import Restaurant from '/src/img/our-restaurant.jpg'
const create = defaultPagePattern();

function appendToPage(element_obj) {
  let keys = Object.keys(element_obj);
  for (let key of keys) {
    let img = getNameDescriptionSrc(element_obj[key]);
    create.defaultContentCreator(img);
  }
  create.smaller_img();
}



function MenuPage() {
  document.title = "Menu";
  const img_description = [
    "Fried Catfish, with greens and boiled beans.",
    "Lamb's Heart, with boiled cabbage.",
    "Lamb's Fry, with green peas and boiled potatoes.",
    "Prime Rib, with potatoes dauphinoise and spring salad.",
    "Roast Beef, with corn and glazed carrots.",
    "Roast Prairie Chicken, with green beans, mashed potatoes and gravy.",
  ];
  const path_search = require.context(
    "/src/img/restaurant-imgs-foods",
    false,
    /\.jpeg/
  );
  const imgsObj = getAllImgs(path_search, img_description);
  appendToPage(imgsObj);
}

function ContactPage() {
  document.title = "Contact";
  const description = [
    "Chef Cook and The Butcher",
    "Security and Waiter",
    "Finance Management",
    "Security and Waiter",
  ];
  const path_search = require.context("/src/img/workers", false, /\.jpg/);
  const imgsObj = getAllImgs(path_search, description);
  appendToPage(imgsObj);
}

function HomePage() {
  document.title = "Home";
  const container_chef = [
    "Chef Special",
    "Pearson's Stew (Beef Stew).",
    ChefSpecial,
  ];
  const container_location = [
    "Location",
    "Tahiti, Rte de Ceinture 1",
    Restaurant,
  ];
  const container_description = [
    "Old West Theme",
    "Here is our crew dress like a characters from Red Dead Redemption 2",
    Rdr2
  ]
  create.defaultContentCreator(container_description);
  create.defaultContentCreator(container_location);
  create.defaultContentCreator(container_chef);
  

}
export { MenuPage, ContactPage, HomePage };
