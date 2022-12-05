console.log("Everything looks fine!!")


function elementsGenerator (type, name=false,selector) {
    const el = document.createElement(type)
    if(name != false){
        if (selector == 'class'){
            el.classList.add(name)
        }
        if (selector == 'id'){
            el.setAttribute('id',name)
        }
    }
    return el
}
function menu (){
    const content = document.getElementById('content')
    
    let y=elementsGenerator('div','upa','class')
    content.appendChild(y)
   
}
menu()