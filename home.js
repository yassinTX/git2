/*==========================================
      LIGHT40X PORTFOLIO
      HOME.JS - PART 1
==========================================*/

// ============================
// LOADER
// ============================

window.addEventListener("load", () => {

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},900);

}

});

// ============================
// MOBILE MENU
// ============================

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.onclick=()=>{

nav.classList.toggle("active");

};

}

// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

nav.classList.remove("active");

}

});

});

// ============================
// ACTIVE NAVIGATION
// ============================

const sections=document.querySelectorAll("section");

const links=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ============================
// REVEAL ANIMATION
// ============================

const hidden=document.querySelectorAll(".card,.featured-card,.timeline-item,.gallery img,.skill-grid div");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hidden.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// ============================
// HERO PARALLAX
// ============================

const heroImage=document.querySelector(".hero-image img");

document.addEventListener("mousemove",e=>{

if(heroImage){

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

}

});

// ============================
// COUNTERS
// ============================

const counters=document.querySelectorAll(".stats h3");

const speed=40;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let value=0;

const update=()=>{

const inc=Math.ceil(target/speed);

value+=inc;

if(value<target){

counter.innerText=value+

(counter.innerText.includes("+")?"+":"");

requestAnimationFrame(update);

}else{

counter.innerText=target+

(counter.innerText.includes("+")?"+":"");

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ============================
// FLOATING ELEMENTS
// ============================

const floating=document.querySelectorAll(".floating");

floating.forEach((item,index)=>{

item.style.animationDelay=index*.4+"s";

});

// ============================
// BUTTON RIPPLE
// ============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.className="ripple";

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

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

console.log("Light40X JS Part 1 Loaded");

/*==========================================
      LIGHT40X PORTFOLIO
      HOME.JS - PART 2
==========================================*/

// ============================
// IMAGE MODAL
// ============================

const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".image-modal img");

document.querySelectorAll(".gallery img,.card img,.featured-card img").forEach(img=>{

img.addEventListener("click",()=>{

if(imageModal){

imageModal.classList.add("active");

modalImage.src=img.src;

}

});

});

if(imageModal){

imageModal.addEventListener("click",()=>{

imageModal.classList.remove("active");

});

}

// ============================
// VIDEO MODAL
// ============================

const videoModal=document.querySelector(".video-modal");

const modalVideo=document.querySelector(".video-modal video");

document.querySelectorAll(".card video").forEach(video=>{

video.addEventListener("click",()=>{

video.pause();

if(videoModal){

modalVideo.src=video.currentSrc;

videoModal.classList.add("active");

modalVideo.play();

}

});

});

if(videoModal){

videoModal.addEventListener("click",()=>{

modalVideo.pause();

modalVideo.src="";

videoModal.classList.remove("active");

});

}

// ============================
// ESC KEY
// ============================

document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

imageModal?.classList.remove("active");

if(videoModal){

modalVideo.pause();

modalVideo.src="";

videoModal.classList.remove("active");

}

}

});

// ============================
// MOUSE GLOW
// ============================

const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",e=>{

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});

// ============================
// BACK TO TOP
// ============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="back-top";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

position:"fixed",

bottom:"30px",

right:"30px",

width:"55px",

height:"55px",

borderRadius:"50%",

border:"none",

background:"#4F8CFF",

color:"#fff",

fontSize:"20px",

cursor:"pointer",

display:"none",

zIndex:"9999",

transition:".3s"

});

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ============================
// TYPING EFFECT
// ============================

const title=document.querySelector(".hero-text h2");

if(title){

const text=title.textContent;

title.textContent="";

let i=0;

(function typing(){

if(i<text.length){

title.textContent+=text.charAt(i);

i++;

setTimeout(typing,70);

}

})();

}

// ============================
// CONTACT FORM
// ============================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",e=>{

e.preventDefault();

const name=form.querySelector("input[type=text]").value.trim();

const email=form.querySelector("input[type=email]").value.trim();

const message=form.querySelector("textarea").value.trim();

if(name===""||email===""||message===""){

alert("Please fill in all fields.");

return;

}

alert("Message sent successfully!");

form.reset();

});

}

// ============================
// AUTO YEAR
// ============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

}

// ============================
// PERFORMANCE
// ============================

window.addEventListener("resize",()=>{

document.body.style.overflowX="hidden";

});
console.log("🚀 Light40X Portfolio Ready");

const viewMoreBtn = document.querySelector(".view-more-btn");

if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", function () {
        window.location.href = "projects.html";
    });
}
