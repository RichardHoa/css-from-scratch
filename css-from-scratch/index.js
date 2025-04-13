window.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(
    '[aria-controls="primary-nav"]'
  );
  const navBar = document.getElementById("primary-nav");

  hamburgerButton.addEventListener("click", () => {
    const ariaExpanded = hamburgerButton.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
      hamburgerButton.setAttribute("aria-expanded", "false");
    } else {
      hamburgerButton.setAttribute("aria-expanded", "true");
    }
  });
});
