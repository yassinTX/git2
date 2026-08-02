/*==========================================
        LIGHT40X COMING SOON
==========================================*/

// ============================
// LOADER
// ============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 900);

});

// ============================
// MOBILE MENU
// ============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

// Close menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// ============================
// HEADER SHADOW
// ============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ============================
// HERO CARD PARALLAX
// ============================

const card = document.querySelector(".coming-card");

document.addEventListener("mousemove", e => {

    if (!card) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ============================
// BUTTON RIPPLE EFFECT
// ============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const size = Math.max(this.clientWidth, this.clientHeight);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left = (e.offsetX - size / 2) + "px";
        ripple.style.top = (e.offsetY - size / 2) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ============================
// FLOATING ICON
// ============================

const icon = document.querySelector(".coming-card i");

if (icon) {

    let angle = 0;

    setInterval(() => {

        angle += 0.03;

        icon.style.transform =
            `translateY(${Math.sin(angle) * 8}px) rotate(${Math.sin(angle) * 3}deg)`;

    }, 16);

}

// ============================
// FADE IN ANIMATION
// ============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hero-text,.coming-card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ============================
// AUTO YEAR
// ============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());

}

// ============================
// CONSOLE
// ============================

console.log("🚀 Light40X Coming Soon Loaded");
