document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Configuration
  const themeBtn = document.getElementById("theme-btn");
  const savedTheme = localStorage.getItem("theme") || "light";

  // Use body data-theme to match CSS selectors
  document.body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeBtn) {
      themeBtn.innerHTML =
        theme === "light"
          ? '<i class="fas fa-moon"></i>'
          : '<i class="fas fa-sun"></i>';
    }
  }

  // 2. Active Link Highlighting (Bootstrap 5 compatible)
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
    }
  });

  // 3. Smooth Scroll for Anchors
  document.querySelectorAll(".nav-anchor-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        window.scrollTo({
          top: targetElement.offsetTop - navHeight - 20,
          behavior: "smooth",
        });

        // Update active state in sidebar
        document
          .querySelectorAll(".nav-anchor-link")
          .forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // 4. Update Sidebar Active state on Scroll
  window.addEventListener("scroll", () => {
    let current = "";
    const navHeight = document.querySelector(".navbar").offsetHeight;
    const lessons = document.querySelectorAll("article.lesson-block");

    lessons.forEach((lesson) => {
      const lessonTop = lesson.offsetTop - navHeight - 100;
      if (pageYOffset >= lessonTop) {
        current = lesson.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-anchor-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
