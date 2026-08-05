/*==========================================
      LIGHT40X PRIVACY POLICY
==========================================*/

// ============================
// MOBILE MENU
// ============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

// ============================
// HEADER SHADOW
// ============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

// ============================
// PROGRESS BAR
// ============================

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

progress.style.width=scrolled+"%";

});

// ============================
// BACK TO TOP
// ============================

const topBtn=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ============================
// SCROLL REVEAL
// ============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".policy section,.toc,.effective").forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('.toc a').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});

// ============================
// ACTIVE TABLE OF CONTENTS
// ============================
