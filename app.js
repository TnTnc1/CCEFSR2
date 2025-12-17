(() => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (!burger || !nav) return;

  const openMenu = () => {
    nav.classList.add("is-open");
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    nav.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  };

  burger.addEventListener("click", toggleMenu);
  links.forEach(a => a.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (e) => {
    const isInside = nav.contains(e.target) || burger.contains(e.target);
    if (!isInside && nav.classList.contains("is-open")) closeMenu();
  });
})();
