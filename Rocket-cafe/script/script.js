let openMenu= document.querySelector("#menuClick");
let closeMenu= document.querySelector("#closeClick");
let menu= document.querySelector(".listStyle");
let element3 =document.querySelector("#section3");
let element4 =document.querySelector("#section4");
let element5 =document.querySelector("#section5");
let elemen6 =document.querySelector("#section6");



openMenu.addEventListener("click",menuShow)
closeMenu.addEventListener("click", closeMenuF)

function menuShow(){
    closeMenu.style.display="initial"
    menu.style.display="block"
    openMenu.style.display="none"
    element3.style.display="none"
    element4.style.display="none"
    element5.style.display="none"
    elemen6.style.display="none"
}

function closeMenuF(){
    closeMenu.style.display="none"
    menu.style.display="none"
    openMenu.style.display="initial"
    element3.style.display="initial"
    element4.style.display="initial"
    element5.style.display="initial"
    elemen6.style.display="initial"
}


