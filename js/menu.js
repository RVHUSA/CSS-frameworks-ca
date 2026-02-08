export function initMobileMenu() {
  const toggle = document.querySelector("#menuToggle");
  const menu = document.querySelector("#mobileMenu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("d-none");
  });
}
