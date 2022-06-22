// Mobile Menu
let nav = document.querySelector("nav"); 
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");


menuBtn.onclick = function (){
  navBar.classList.add("active");
  menuBtn.style.opacity ="0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
}

cancelBtn.onclick = function (){
  navBar.classList.remove("active");
  menuBtn.style.opacity ="1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
} 

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  })
}


// Scroll Fixed
window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    logoOne.classList.add("active");
    menuBtn.classList.add("active");
  }else{
    nav.classList.remove("sticky");
    logoOne.classList.remove("active");
    menuBtn.classList.remove("active");
  }



}


// staking Side NavBar

    