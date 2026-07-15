from pathlib import Path

js = r'''/* ===============================
   Light40X Portfolio - home.js
================================== */

// Sticky header
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (header) {
    header.style.boxShadow = window.scrollY > 20
      ? "0 10px 30px rgba(0,0,0,.35)"
      : "none";
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section,.card,.featured,.stats div,.skill-grid div").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all .7s ease";
  observer.observe(el);
});

// Animated counters
document.querySelectorAll(".stats h2").forEach(counter => {
  const original = counter.textContent;
  const target = parseInt(original);
  if (isNaN(target)) return;

  let value = 0;

  const start = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    const timer = setInterval(() => {
      value += Math.ceil(target / 50);

      if (value >= target) {
        value = target;
        clearInterval(timer);
      }

      counter.textContent = value + (original.includes("+") ? "+" : original.includes("%") ? "%" : "");

    }, 25);

    start.disconnect();

  });

  start.observe(counter);
});

// Hero image tilt
const heroImg = document.querySelector(".hero-right img");

if (heroImg) {

  document.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - .5) * 10;
    const y = (e.clientY / window.innerHeight - .5) * 10;

    heroImg.style.transform =
      `rotateY(${x}deg) rotateX(${-y}deg)`;

  });

}

// Active navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140)
      current = sec.id;
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute("href") === "#" + current ? "#00D4FF" : "";
  });

});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "backTop";

Object.assign(topBtn.style, {
  position: "fixed",
  right: "20px",
  bottom: "20px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  background: "#4F8CFF",
  color: "#fff",
  fontSize: "22px",
  cursor: "pointer",
  display: "none",
  zIndex: "9999"
});

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.onclick = () => window.scrollTo({
  top: 0,
  behavior: "smooth"
});

// Auto year
const footer = document.querySelector("footer");
if (footer) {
  footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());
}

console.log("Light40X Portfolio Ready 🚀");
'''

out="/mnt/data/home.js"
Path(out).write_text(js, encoding="utf-8")
print(out)
