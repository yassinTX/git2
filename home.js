// ---------- PRELOADER ----------
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ---------- STICKY HEADER ----------
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 30);
});

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:"smooth"});
  });
});

// ---------- ACTIVE NAV ----------
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav(){
  let current = "";
  sections.forEach(sec=>{
    if(window.scrollY >= sec.offsetTop - 150){
      current = sec.id;
    }
  });

  navLinks.forEach(link=>{
    link.classList.toggle(
      "active",
      link.getAttribute("href")==="#" + current
    );
  });
}

window.addEventListener("scroll", updateActiveNav);

// ---------- REVEAL ----------
const reveal = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.15});

document.querySelectorAll("section,.card,.tool,.featured-card,.stats div")
.forEach(el=>reveal.observe(el));

// ---------- COUNTERS ----------
document.querySelectorAll(".stats h3").forEach(counter=>{
  const text = counter.textContent;
  const target = parseInt(text);
  if(isNaN(target)) return;

  let value = 0;

  const obs = new IntersectionObserver(entries=>{
    if(!entries[0].isIntersecting) return;

    const timer = setInterval(()=>{
      value += Math.ceil(target/50);
      if(value >= target){
        value = target;
        clearInterval(timer);
      }
      counter.textContent = value + (text.includes("+")?"+":"");
    },25);

    obs.disconnect();

  });

  obs.observe(counter);
});

// ---------- PARALLAX HERO ----------
const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove",e=>{
  if(!heroImage) return;

  const x=(e.clientX/window.innerWidth-.5)*15;
  const y=(e.clientY/window.innerHeight-.5)*15;

  heroImage.style.transform=
  rotateY(${x}deg) rotateX(${-y}deg);
});

// ---------- BACK TO TOP ----------
const topBtn=document.createElement("button");
topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
topBtn.className="backTop";
document.body.appendChild(topBtn);

topBtn.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

window.addEventListener("scroll",()=>{
  topBtn.style.opacity=window.scrollY>400?"1":"0";
  topBtn.style.pointerEvents=window.scrollY>400?"auto":"none";
});

// ---------- RIPPLE ----------
document.querySelectorAll(".buttons a").forEach(btn=>{
  btn.addEventListener("click",function(e){

    const ripple=document.createElement("span");

    ripple.className="ripple";

    const rect=this.getBoundingClientRect();

    ripple.style.left=(e.clientX-rect.left)+"px";
    ripple.style.top=(e.clientY-rect.top)+"px";

    this.appendChild(ripple);

    setTimeout(()=>ripple.remove(),600);

  });
});

// ---------- TYPING ----------
const subtitle=document.querySelector(".hero-content h2");

if(subtitle){

const original=subtitle.textContent;

subtitle.textContent="";

let i=0;

(function type(){

 if(i<original.length){

   subtitle.textContent+=original.charAt(i);

   i++;

   setTimeout(type,55);

 }

})();

}

// ---------- YEAR ----------
const footer=document.querySelector("footer");
if(footer){
 footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());
}

console.log("Light40X Portfolio Ready 🚀");
"""

path="/mnt/data/home.js"
Path(path).write_text(js, encoding="utf-8")
print(path)
