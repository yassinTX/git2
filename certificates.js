// ==========================
// Scroll To Top Button
// ==========================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// Fade-in Animation
// ==========================

const cards = document.querySelectorAll(".certificate-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});

// ==========================
// View Certificate
// ==========================

const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        const image = this.parentElement.querySelector("img").src;

        window.open(image, "_blank");

    });

});
