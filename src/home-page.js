import TitleBulletIcon from "/src/img/bullet-hole.png";
import ChefSpecial from "/src/img/fav-food.jpeg";
import FamilyPhoto from "/src/img/family-photo.jpeg";
import HtmlGenerator from '/src/dom-manipulation.js'

function homePage() {
  const container_chef = [
    "chef-special",
    "Chef Special",
    "bullet",
    TitleBulletIcon,
    "Prime Rib, with potatoes dauphinoise and spring salad.",
    "chef-food",
    ChefSpecial,
  ];
  const container_family = [
    "the-family",
    "The Family",
    "bullet",
    TitleBulletIcon,
    "An old west theme restaurant",
    "family-photo",
    FamilyPhoto,
  ];
  const content = document.getElementById("content");
  const create = HtmlGenerator();
  const family_content = create.defaultBodyCreator(container_family);
  console.log(family_content)
  create.defaultBodyCreator(container_chef);
  content.append(family_content);
  console.log(create);
}
export default homePage;
