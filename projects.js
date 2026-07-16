/*==========================================
        PROJECTS.JS - PART 1
==========================================*/

/*=========================
      SEARCH PROJECTS
=========================*/

const searchInput = document.getElementById("searchInput");
const projectCards = document.querySelectorAll(".project-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        projectCards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();
            const text = card.textContent.toLowerCase();

            if (title.includes(value) || text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*=========================
      FILTER PROJECTS
=========================*/

const filterButtons = document.querySelectorAll(".filter");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

/*=========================
      SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================
      REVEAL ANIMATION
=========================*/

const hiddenItems=document.querySelectorAll(

".project-card,.stat-card,.contact-cta"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

else{

entry.target.classList.remove("show");

}

});

},{
threshold:.2
});

hiddenItems.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

/*=========================
      HEADER EFFECT
=========================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";
header.style.background="rgba(8,17,31,.97)";

}

else{

header.style.boxShadow="none";
header.style.background="rgba(8,17,31,.92)";

}

});

/*=========================
      ACTIVE NAV
=========================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================
      BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const size=Math.max(

this.clientWidth,

this.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

console.log("Projects.js Part 1 Loaded");
/*==========================================
        PROJECTS.JS - PART 2
==========================================*/

/*=========================
      IMAGE PREVIEW
=========================*/

const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".image-modal img");

if (imageModal && modalImage) {

    document.querySelectorAll(".project-card img, .hero-image img").forEach(img => {

        img.addEventListener("click", () => {

            imageModal.classList.add("active");
            modalImage.src = img.src;
            modalImage.alt = img.alt;

        });

    });

    imageModal.addEventListener("click", () => {

        imageModal.classList.remove("active");

    });

}

/*=========================
      BACK TO TOP
=========================*/

const backTop = document.createElement("button");

backTop.className = "back-top";

backTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backTop);

Object.assign(backTop.style,{

position:"fixed",
right:"25px",
bottom:"25px",
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

backTop.style.display =
window.scrollY>400 ? "block" : "none";

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/*=========================
      COUNTER ANIMATION
=========================*/

const statNumbers=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const original=counter.innerText;

const target=parseInt(original);

if(isNaN(target)) return;

let value=0;

const update=()=>{

value+=Math.ceil(target/40);

if(value<target){

counter.innerText=value+"+";
requestAnimationFrame(update);

}else{

counter.innerText=original;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

statNumbers.forEach(item=>{

counterObserver.observe(item);

});

/*=========================
      HERO PARALLAX
=========================*/

const heroImage=document.querySelector(".hero-image img");

document.addEventListener("mousemove",e=>{

if(heroImage){

const x=(e.clientX/window.innerWidth-.5)*10;
const y=(e.clientY/window.innerHeight-.5)*10;

heroImage.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

}

});

/*=========================
      PROJECT HOVER
=========================*/

projectCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*=========================
      ESC CLOSE IMAGE
=========================*/

document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

if(imageModal){

imageModal.classList.remove("active");

}

}

});

/*=========================
      AUTO YEAR
=========================*/

const footerText=document.querySelector("footer p");

if(footerText){

footerText.innerHTML=
footerText.innerHTML.replace(
"2026",
new Date().getFullYear()
);

}

/*=========================
      PAGE LOADER
=========================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},400);

}

});

/*=========================
      PERFORMANCE
=========================*/

window.addEventListener("resize",()=>{

document.body.style.overflowX="hidden";

});

console.log("🚀 Projects.js Ready");
