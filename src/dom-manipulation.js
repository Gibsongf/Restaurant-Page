function createElementDom() {
  
  function simple_el (type,selector_name,innerContent){
    const ell = document.createElement(type);
    ell.className = selector_name;
    ell.textContent = innerContent;
    return ell
  }
  function pElement (text){
    const p = document.createElement('p');
    p.textContent = text;
    return p
  }

  function imgElement(imgSrc) {
    const img = document.createElement("IMG");
    img.className = "sub-containers-img";
    img.src = imgSrc; 
    return img
    
  }
  
  function divWithChild(child_text) {
    const defaultContainer =  simple_el('div',"sub-containers")
    const div_child =  simple_el('div',"title", child_text);
    defaultContainer.appendChild(div_child);
    return defaultContainer;
  }
  return {divWithChild,pElement,imgElement,simple_el}

}



function defaultPagePattern (){
  const content = document.getElementById("content");
  const createElements = createElementDom()
  
  function has_info_div() {
    const info = document.querySelector(".info");
    if (info === null) {
      const info = createElements.simple_el('div',"info");
      return info;
    }
    return info;
  }

  function defaultContentCreator(arr) {
    const obj = {"divText":arr[0],"pText":arr[1],"imgSrc":arr[2]}
    const info = has_info_div();
    const mainDiv = createElements.divWithChild(obj["divText"]);
    const p = createElements.pElement(obj["pText"]);
    const img = createElements.imgElement(obj["imgSrc"]);
    
    mainDiv.append(p)
    mainDiv.append(img)
    info.appendChild(mainDiv);
    content.append(info);
    return mainDiv
  }

  function smaller_img() {
    const imgs = document.querySelectorAll(".sub-containers-img");
    imgs.forEach((img) => img.setAttribute("style", "width:85%"));
  }
  return {defaultContentCreator,smaller_img}
}

export {createElementDom, defaultPagePattern }