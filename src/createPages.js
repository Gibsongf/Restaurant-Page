import HtmlGenerator from "/src/dom-manipulation.js";
import { getAllImgs, getNameDescriptionSrc } from "/src/getmultipleimgs.js";
import ChefSpecial from "/src/img/pearson-stew.jpeg";
import FamilyPhoto from "/src/img/family-photo.jpeg";

const create = HtmlGenerator();

function appendElementsObj(element_obj) {
  let keys = Object.keys(element_obj);
  for (let key of keys) {
    let img = getNameDescriptionSrc(element_obj[key]);
    create.defaultBodyCreator(img);
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
  appendElementsObj(imgsObj);
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
  appendElementsObj(imgsObj);
  /* const create = HtmlGenerator(); */
}

function HomePage() {
  document.title = "Home";
  const container_chef = [
    "Chef Special",
    "Pearson's Stew (Beef Stew).",
    ChefSpecial,
  ];
  const container_family = [
    "The Family",
    "An old west theme restaurant",
    FamilyPhoto,
  ];

  /* const create = HtmlGenerator(); */
  create.defaultBodyCreator(container_family);
  create.defaultBodyCreator(container_chef);
}
export { MenuPage, ContactPage, HomePage };
