// código de animación de navbar

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links2 = document.querySelectorAll(".nav-links .link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links2.forEach(link => {
    link.classList.toggle("fade");
  });
});

  


