function createElementDom() {


  function h1Element (selector_name,innerContent){
    const h1 = document.createElement('h1')
    h1.className = selector_name
    h1.textContent = innerContent
    return h1
  }
  function btnElement (selector_name,text){
    const btn = document.createElement('button');
    btn.className = selector_name
    btn.textContent = text
    return btn
  }
  
  function pElement (text,parent){
    const p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);
  }

  function imgElement(imgSrc, parent, childAppend) {
    const img = document.createElement("IMG");
    img.className = "sub-containers-img";
    img.src = imgSrc; 
    
    if (childAppend) {
      parent.firstChild.appendChild(img);
      return;
    }
    parent.appendChild(img);
  }
  function divElement (selector_name,text){
    const div = document.createElement('div')
    div.className = selector_name
    div.textContent = text
    return div
  }
  function divWithChild(child_text) {
    const defaultContainer = divElement("sub-containers")
    const div_child = divElement("title", child_text);
    defaultContainer.appendChild(div_child);
    return defaultContainer;
  }
  return {btnElement,divWithChild,divElement,pElement,imgElement,h1Element}

}



function defaultPagePattern (){
  const content = document.getElementById("content");
  const createElements = createElementDom()
  
  function has_info_div() {
    const info = document.querySelector(".info");
    if (info === null) {
      const info = createElements.divElement("info");
      return info;
    }
    return info;
  }
  function defaultContentCreator(arr) {
    const obj = {"divText":arr[0],"pText":arr[1],"imgSrc":arr[2]}
    const info = has_info_div();
    const mainDiv = createElements.divWithChild(obj["divText"]);
    createElements.pElement(obj["pText"], mainDiv);
    createElements.imgElement(obj["imgSrc"], mainDiv);
    info.appendChild(mainDiv);
    content.append(info);
  }

  function smaller_img() {
    const imgs = document.querySelectorAll(".sub-containers-img");
    imgs.forEach((img) => img.setAttribute("style", "width:85%"));
  }
  return {defaultContentCreator,smaller_img}
}

export {createElementDom, defaultPagePattern }