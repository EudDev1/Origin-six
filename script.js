/*Abre e fecha o menu ao clicar no icone*/

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* Quando clicar em algum iten do menu, esconder o menu */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* Mudar o header da pagina quando de scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeiht;

window.addEventListener("scroll", function () {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/* Testimonials SWIPER */

  const swiper = new Swiper ('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
    })

/* ScrollReveal : mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin:'top',
  distance: '30px' ,
  duration: 700 ,
  reset: true
})

scrollReveal.reveal(
  `#home .image , #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links

`,{ interval: 100})