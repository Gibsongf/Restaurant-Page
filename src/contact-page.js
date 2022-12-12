import HtmlGenerator from "/src/dom-manipulation.js";
import { getAllImgs, getNameDescriptionSrc } from "/src/getmultipleimgs.js";


function contact_page() {
    const description = [
        "Chef Cook and The Butcher",
        "Security and Waiter",
        "Finance Management",
        "Security and Waiter",
    ]
    const path_search = require.context(
      "/src/img/workers",
      false,
      /\.jpg/
    );
    const imgsObj = getAllImgs(path_search, description);
  
    const create = HtmlGenerator();
    let keys = Object.keys(imgsObj);
    for (let key of keys) {
      let img = getNameDescriptionSrc(imgsObj[key]);
      create.defaultBodyCreator(img);
    }
    create.smaller_img();

  }
export default contact_page