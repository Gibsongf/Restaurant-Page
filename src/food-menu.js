import HtmlGenerator from "/src/dom-manipulation.js";

function food_menu() {
  const food_description = [
    "Fried Catfish, with greens and boiled beans.",
    "Lamb's Heart, with boiled cabbage.",
    "Lamb's Fry, with green peas and boiled potatoes.",
    "Prime Rib, with potatoes dauphinoise and spring salad.",
    "Roast Beef, with corn and glazed carrots.",
    "Roast Prairie Chicken, with green beans, mashed potatoes and gravy.",
  ];
  const food_content = {};

  function folder_extractor_imgs(r) {
    const name_src = r.keys();
    name_src.forEach(
      (key) =>
        (food_content[key] = [r(key), food_description[name_src.indexOf(key)]])
    );
  }

  function getNameDescriptionSrc(value) {
    const name = value[1].split(",")[0];
    const description = "A" + " " + value[1];
    const src = value[0];
    return [name, description, src];
  }

  folder_extractor_imgs(
    require.context("/src/img/restaurant-imgs-foods", true, /\.jpeg/)
  );

  const create = HtmlGenerator();
  let keys = Object.keys(food_content);
  for (let key of keys) {
    let img = getNameDescriptionSrc(food_content[key]);
    create.defaultBodyCreator(img);
  }
}
export default food_menu;
