import TitleBulletIcon from "/src/img/bullet-hole.png" ;
import './style.css';
function elementsGenerator (element_obj) {
    const el = document.createElement(element_obj['type']);
    if (element_obj['type']=="IMG"){
        el.setAttribute("src", element_obj["src_img"]);
    }
    
    if (element_obj['selector_type'] == 'class'){
        el.classList.add(element_obj['selector_name']);
    }
    if (element_obj['selector_type'] == 'id'){
        el.setAttribute('id',element_obj['selector_name']);
    }
    
    el.textContent = element_obj['text_content'];
    return el;
}
function homeCreator () {
    const content = document.getElementById('content');
    function objCreator (lst , makeElement){
        const obj = {
            'type': lst[0], 
            'selector_type': lst[1],
            'selector_name':lst[2],
            'text_content': lst[3],
            'src_img':lst[4]
        };
        if (makeElement){
            const el = elementsGenerator(obj);;
            return el;
        }
        return obj;
    }
    function menu (){
        const header = objCreator(['div', 'class','header',null],true);
        const restaurantName = objCreator(['h1','class','name-logo','Van der Linde']);
        const btnHome = objCreator(['button','class','home','Home']);
        const btnMenu = objCreator(['button','class','menu','Menu']);
        const btnContact = objCreator(['button','class','contact','Contact']);
        const arr = [restaurantName,btnHome,btnMenu,btnContact];

        content.appendChild(header);
        multipleDiv(arr, header);
    }
    function multipleDiv(el_info,parent) {
        el_info.forEach(toCreate => {  
            const el = elementsGenerator(toCreate);
            parent.appendChild(el);      
        });
         ;
    }
    function body (){
        const info = objCreator(['div', 'class','info',null],true);
        
        
        function objPattern(arr){
            const keys = ['container-name','div-1-text','img-top-name', 'img-top-src', 'pText', 'img-bot-name', 'img-bot-src']
            let obj = {}
            for (let k in keys){
                obj[keys[k]] = arr[k] 
            }
            return obj
        }
        function pElement (text,parent){
            const p = objCreator(['p',null,null,text],true);
            parent.appendChild(p)
        }
        function imgElement (imgSelectorName,imgSrc,parent){
            const imgTitle = objCreator(['IMG', 'class',imgSelectorName,null,imgSrc,null],true);
            parent.firstChild.appendChild(imgTitle)
        }
        function divWithChild (main_name,child_text){
            console.log(main_name)
            const defaultContainer = objCreator(['div', 'class',main_name],true);
            const div_child = objCreator(['div', 'class','title',child_text],true);
            defaultContainer.appendChild(div_child)
            return defaultContainer            
        }
        function defaultDiv (arr){
            const obj = objPattern(arr)   
            const mainDiv = divWithChild(obj['container-name'], obj['div-1-text'])
            pElement(obj['pText'],mainDiv)
            imgElement(obj['img-top-name'],obj['img-top-src'],mainDiv)
            info.appendChild(mainDiv)
            
        }
        const container_chef = ['chef-special','Chef Special','bullet',
                                TitleBulletIcon,'Prime Rib, with potatoes dauphinoise and spring salad.']

        defaultDiv(container_chef)
        content.appendChild(info)
    }
    menu()
    body()
}
homeCreator()
