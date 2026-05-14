gsap.registerPlugin(SplitText);

const splitText = new SplitText(".mesaje", { type: "chars" });

gsap
  .timeline()
  .set(".preloader", { opacity: 1 }, 0)
  .from(
    ".mesaje",
    {
      scale: 0.7,
      duration: 4,
      ease: "none",
    },
    0,
  )
  .from(
    splitText.chars,
    {
      opacity: 0,
      duration: 0.1,
      stagger: 0.1,
      ease: "none",
    },
    0,
  )
  .from(
    splitText.chars,
    {
      rotationY: 360,
      duration: 0.5,
      stagger: 0.1,
      ease: "none",
    },
    0.1,
  )
  .to(
    ".preloader",
    {
      autoAlpha: 0,
      duration: 4,
      ease: "power1.Out",
    },
    1,
  )
  .to(
    "nav",
    {
      opacity: 1,
      duration: 1,
    },
    3,
  )
  .to(
    "section",
    {
      opacity: 0.5,
      duration: 1,
    },
    4.5,
  );

// Script para el menú hamburguesa
const menuBtn = document.querySelector(".nav_menu_btn");
const navLinks = document.querySelector(".nav_links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const icon = menuBtn.querySelector("i");
  if (navLinks.classList.contains("open")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

// Cerrar el menú al hacer clic en un enlace
const navItems = document.querySelectorAll(".nav_links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("open");
    const icon = menuBtn.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  });
});

//Animate on scroll
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about_container .section_description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".about_container .img", {
  ...scrollRevealOption,
  delay: 1500,
});
