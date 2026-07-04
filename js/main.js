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
      opacity: 0.9,
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
  delay: 1000,
});

ScrollReveal().reveal(".portafolio_card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".service_container .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".service_container .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".service_card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

document
  .getElementById("formReserva")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // 1. Capturar los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const domicilio = document.getElementById("domicilio").value;
    const servicio = document.getElementById("servicio").value;

    // 2. Tu número de teléfono (debe incluir el código de país, sin el símbolo +)
    // Ejemplo para México: 52 seguido de los 10 dígitos (525512345678)
    const telefonoRestaurante = "524271272768";

    // 3. Crear el mensaje
    const mensaje =
      `¡Hola! Me gustaría reservar un servicio de maquillaje.%0A%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Fecha:* ${fecha}%0A` +
      `*Hora:* ${hora}%0A` +
      `*Domicilio:* ${domicilio}%0A` +
      `*Servicio:* ${servicio}%0A%0A` +
      `¿Tienenes disponibilidad?`;

    // 4. Crear la URL de WhatsApp y redirigir al usuario
    const urlWhatsApp = `https://wa.me/${telefonoRestaurante}?text=${mensaje}`;
    window.open(urlWhatsApp, "_blank");
  });
