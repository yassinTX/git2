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
            const desc = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(value) || desc.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*=========================
      FILTER BUTTONS
=========================*/

const filters = document.querySelectorAll(".filter");

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/*=========================
      SCROLL REVEAL
=========================*/

const revealItems = document.querySelectorAll(
".project-card,.stat,.featured-project,.cta"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}else{

entry.target.classList.remove("show");

}

});

},{
threshold:.2
});

revealItems.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

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
     HEADER SHADOW
=========================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

/*=========================
     BUTTON RIPPLE
=========================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const size=Math.max(this.clientWidth,this.clientHeight);

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

console.log("Projects JS Part 1 Loaded");

/*==========================================
        PROJECTS.JS - PART 2
==========================================*/

/*=========================
      IMAGE MODAL
=========================*/

const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".image-modal img");

document.querySelectorAll(".project-card img,.featured-image img").forEach(img => {

    img.addEventListener("click", () => {

        if (imageModal) {

            imageModal.classList.add("active");
            modalImage.src = img.src;

        }

    });

});

if (imageModal) {

    imageModal.addEventListener("click", () => {

        imageModal.classList.remove("active");

    });

}

/*=========================
      VIDEO MODAL
=========================*/

const videoModal = document.querySelector(".video-modal");
const modalVideo = document.querySelector(".video-modal video");

document.querySelectorAll(".video-btn").forEach(button => {

    button.addEventListener("click", e => {

        e.preventDefault();

        const src = button.dataset.video;

        if (videoModal && src) {

            modalVideo.src = src;
            videoModal.classList.add("active");
            modalVideo.play();

        }

    });

});

if (videoModal) {

    videoModal.addEventListener("click", () => {

        modalVideo.pause();
        modalVideo.src = "";
        videoModal.classList.remove("active");

    });

}

/*=========================
      ESC CLOSE
=========================*/

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        imageModal?.classList.remove("active");

        if (videoModal) {

            modalVideo.pause();
            modalVideo.src = "";
            videoModal.classList.remove("active");

        }

    }

});

/*=========================
      BACK TO TOP
=========================*/

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.className = "back-top";

document.body.appendChild(topButton);

Object.assign(topButton.style, {

    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#4F8CFF",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    display: "none",
    zIndex: "9999",
    transition: ".3s"

});

window.addEventListener("scroll", () => {

    topButton.style.display =
    window.scrollY > 400 ? "block" : "none";

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=========================
      COUNTERS
=========================*/

const stats = document.querySelectorAll(".stat h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target =
            parseInt(counter.innerText);

            let value = 0;

            const update = () => {

                value += Math.ceil(target / 40);

                if (value < target) {

                    counter.innerText = value + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText =
                    counter.dataset.original ||
                    counter.innerText;

                }

            };

            counter.dataset.original =
            counter.innerText;

            update();

            counterObserver.unobserve(counter);

        }

    });

});

stats.forEach(stat => {

    counterObserver.observe(stat);

});

/*=========================
      MOUSE GLOW
=========================*/

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", e => {

    if (glow) {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    }

});

/*=========================
      PARALLAX
=========================*/

const featuredImage =
document.querySelector(".featured-image img");

document.addEventListener("mousemove", e => {

    if (featuredImage) {

        const x =
        (e.clientX / window.innerWidth - .5) * 12;

        const y =
        (e.clientY / window.innerHeight - .5) * 12;

        featuredImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

    }

});

/*=========================
      AUTO YEAR
=========================*/

const footer =
document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    footer.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );

}

/*=========================
      PERFORMANCE
=========================*/

window.addEventListener("resize", () => {

    document.body.style.overflowX = "hidden";

});

console.log("🚀 Projects.js Loaded Successfully");
