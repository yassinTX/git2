document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the copyright year.
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Find the navigation links and their matching sections.
  const navLinks = [
    ...document.querySelectorAll("#policy-nav a")
  ];

  const sections = navLinks
    .map(link =>
      document.querySelector(link.getAttribute("href"))
    )
    .filter(Boolean);

  // Highlight the section currently visible on the screen.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (!visible) return;

        navLinks.forEach(link => {
          const isActive =
            link.getAttribute("href") ===
            `#${visible.target.id}`;

          link.classList.toggle("active", isActive);
        });
      },
      {
        rootMargin: "-12% 0px -68% 0px",
        threshold: [0, 0.2, 0.5]
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  // Highlight the clicked navigation link immediately.
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});
