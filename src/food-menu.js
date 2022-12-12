import HtmlGenerator from "/src/dom-manipulation.js";
import { getAllImgs, getNameDescriptionSrc } from "/src/getmultipleimgs.js";
function food_menu() {
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

  const create = HtmlGenerator();
  let keys = Object.keys(imgsObj);
  for (let key of keys) {
    let img = getNameDescriptionSrc(imgsObj[key]);
    create.defaultBodyCreator(img);
  }
  create.smaller_img();
}
export default food_menu;
