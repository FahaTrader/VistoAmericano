window.onscroll = function() {toggleNavbar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;  // Posição da barra no topo

function toggleNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed");  // Adiciona 'fixed' quando rolar
  } else {
    navbar.classList.remove("fixed");  // Remove 'fixed' quando voltar ao topo
  }
}

const menuToggle = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
