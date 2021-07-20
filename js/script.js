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
  body.classList.remove('body-fixed');
}

// Pricing Tab

var monthPlan = document.querySelector('.monthly');
var yearPlan = document.querySelector('.yearly');
var pricingTabs = document.querySelectorAll('.pricing-tabs');
// console.log(pricingTabs);

monthPlan.addEventListener('click',activateMonthlyPlan);
yearPlan.addEventListener('click',activateYearlyPlan);

function activateMonthlyPlan() {
  monthPlan.classList.add('pricing-plan-active');
  yearPlan.classList.remove('pricing-plan-active');
  pricingTabs[0].classList.add('pricing-tab-active');
  pricingTabs[1].classList.remove('pricing-tab-active');
}

function activateYearlyPlan() {
  monthPlan.classList.remove('pricing-plan-active');
  yearPlan.classList.add('pricing-plan-active');
  pricingTabs[0].classList.remove('pricing-tab-active');
  pricingTabs[1].classList.add('pricing-tab-active');
}