export function initializeMenu() {
  const menuButton = document.querySelector(".mobileMenu__linesContainer");
  const navLinks = document.querySelector(".nav__linksContainer");

  if (!menuButton || !navLinks) {
    return;
  }

  const mobileBreakpoint = window.matchMedia("(max-width: 768px)");

  const closeMenu = () => {
    menuButton.classList.remove("active");
    navLinks.classList.remove("active");
    document.body.classList.remove("stop-scrolling");

    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", function (_) {
    const isOpen = menuButton.classList.toggle("active");

    navLinks.classList.toggle("active", isOpen);

    document.body.classList.toggle("stop-scrolling", isOpen);

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileBreakpoint.addEventListener("change", function (event) {
    if (!event.matches) {
      closeMenu();
    }
  });
}
