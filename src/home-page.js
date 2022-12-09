import ChefSpecial from "/src/img/pearson-stew.jpeg";
import FamilyPhoto from "/src/img/family-photo.jpeg";
import HtmlGenerator from '/src/dom-manipulation.js'

function homePage() {
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
  const content = document.getElementById("content");
  const create = HtmlGenerator();
  const family_content = create.defaultBodyCreator(container_family);
  create.defaultBodyCreator(container_chef);
  content.append(family_content);
}
export default homePage;
