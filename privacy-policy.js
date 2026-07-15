// ======================================
// Light40X Privacy Policy
// script.js
// ======================================

// Back To Top Button
const topButton = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {
        topButton.style.display = "block";
        topButton.style.opacity = "1";
    } else {
        topButton.style.opacity = "0";

        setTimeout(() => {
            if (window.scrollY <= 250)
                topButton.style.display = "none";
        }, 250);
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// Reveal Sections
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = ".7s ease";

    observer.observe(section);

});


// ================================
// Logo Animation
// ================================

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("mousemove", () => {

        logo.style.transform = "scale(1.08) rotate(-5deg)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.transform = "scale(1) rotate(0deg)";

    });

}


// ================================
// Mouse Glow Effect
// ================================

document.addEventListener("mousemove", e => {

    document.body.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
    rgba(0,174,255,.10),
    transparent 220px),
    linear-gradient(135deg,#071321,#0c1f38,#153c68)
    `;

});


// ================================
// Smooth Anchor Links
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


// ================================
// Page Loaded Animation
// ================================

window.addEventListener("load", () => {

    const container = document.querySelector(".container");

    container.animate([

        {
            opacity: 0,
            transform: "translateY(40px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)"
        }

    ], {

        duration: 800,
        easing: "ease-out"

    });

});


// ================================
// Console Message
// ================================

console.log(
"%cLight40X Privacy Policy",
"color:#4db8ff;font-size:18px;font-weight:bold;"
);
