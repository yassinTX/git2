/*==========================================
        LIGHT40X PROJECTS
==========================================*/

// ============================
// MOBILE MENU
// ============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.onclick = () =>{

nav.classList.toggle("active");

};

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
// SEARCH
// ============================

const search=document.getElementById("search");

const cards=document.querySelectorAll(".card");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

// ============================
// FILTERS
// ============================

const filters=document.querySelectorAll(".filter");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category=button.dataset.filter;

cards.forEach(card=>{

if(category==="all"){

card.style.display="block";

}

else if(card.classList.contains(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

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

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

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

topBtn.style.display=window.scrollY>350?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

// ============================
// CARD HOVER
// ============================

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x/rect.width-.5)*10;

const rotateX=(y/rect.height-.5)*-10;

card.style.transform=
`perspective(900px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// ============================
// HIDDEN / SHOW ANIMATION
// ============================

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;
transform:translateY(60px);
transition:.8s;

}

.show{

opacity:1;
transform:translateY(0);

}

`;

document.head.appendChild(style);

// ============================
// AUTO YEAR
// ============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=
footer.innerHTML.replace("2026",new Date().getFullYear());

}

console.log("🚀 Projects Page Loaded");
