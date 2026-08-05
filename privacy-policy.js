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
// BACK TO TOP
// ============================

const topButton=document.getElementById("topButton");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// ============================
// REVEAL ANIMATION
// ============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

// ============================
// MOUSE GLOW
// ============================

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

Object.assign(glow.style,{

position:"fixed",
width:"400px",
height:"400px",
borderRadius:"50%",
pointerEvents:"none",
background:"radial-gradient(circle,#00D4FF22,transparent 70%)",
transform:"translate(-50%,-50%)",
zIndex:"-1"

});

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// ============================
// AUTO YEAR
// ============================

const footer=document.querySelector(".footer");

if(footer){

footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

}

// ============================
// CSS FOR REVEAL
// ============================

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;
transform:translateY(50px);
transition:.8s ease;

}

.show{

opacity:1;
transform:translateY(0);

}

`;

document.head.appendChild(style);

// ============================
// READY
// ============================

console.log("🔒 Privacy Policy Loaded");
