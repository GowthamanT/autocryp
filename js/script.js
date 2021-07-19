// Navbar Functionality
var header = document.querySelector('header');
var overlay = document.querySelector('.js-overlay');
var body = document.querySelector('body');
var navbarIcon = document.querySelector('.hamburger-icon');
var navLinks = document.querySelectorAll('.nav-link');

navbarIcon.addEventListener('click', showHideNavbar);
overlay.addEventListener('click', showHideNavbar);

navLinks.forEach(links => {
  links.addEventListener('click', closeNavbar);
});

function showHideNavbar() {
  header.classList.toggle('nav-active');
  overlay.classList.toggle('overlay-active');
  body.classList.toggle('body-fixed');
}

function closeNavbar() {
  header.classList.remove('nav-active');
  overlay.classList.remove('overlay-active');
  body.classList.toggle('body-fixed');
}