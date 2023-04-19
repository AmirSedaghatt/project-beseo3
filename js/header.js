const hamburger = document.querySelector(".nav_hamburger")
const closeBtn = document.querySelector(".mobile_menu--close")
const menu = document.querySelector(".nav_mobile--menu")


hamburger.addEventListener("click" , ()=> {
    menu.classList.add("show")
    

})


closeBtn.addEventListener("click" , ()=> {
    menu.classList.remove("show")
    
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  
    document.getElementById("nav_logo--img").style.width ="50%";
    document.getElementById("nav").style.backgroundColor="rgba(255,255,255,.9)";
    document.getElementById("nav").style.padding="0";
    document.getElementById("nav").style.height="62px";


  } else {
    document.getElementById("nav_logo--img").style.width ="80%";
    document.getElementById("nav").style.backgroundColor="rgba(255,255,255,1)";
    document.getElementById("nav").style.padding="0 0";
    document.getElementById("nav").style.height="100px";
    
  }
}
