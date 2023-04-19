const hamburger = document.querySelector(".nav_hamburger")
const closeBtn = document.querySelector(".mobile_menu--close")
const menu = document.querySelector(".nav_mobile--menu")


hamburger.addEventListener("click" , ()=> {
    menu.classList.add("show")
    // document.getElementById("body-color").style.backgroundColor="rgba(102,102,102,.4)";
    document.getElementById("body-color").style.display="block";

})


closeBtn.addEventListener("click" , ()=> {
    menu.classList.remove("show")
    // document.getElementById("body-color").style.backgroundColor="rgba(102,102,102,0)";
    document.getElementById("body-color").style.display="none";
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  
    document.getElementById("nav_logo--img").style.width ="50%";
    document.getElementById("nav").style.backgroundColor="rgba(255,255,255,.9)";
    document.getElementById("nav").style.padding="0";
    document.getElementById("nav").style.height="80px";


  } else {
    document.getElementById("nav_logo--img").style.width ="80%";
    document.getElementById("nav").style.backgroundColor="rgba(255,255,255,1)";
    document.getElementById("nav").style.padding="0 0";
    document.getElementById("nav").style.height="100px";
    
  }
}
