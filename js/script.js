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
console.log(pricingTabs);

monthPlan.addEventListener('click',activePricePlan);
yearPlan.addEventListener('click',activePricePlan);

function activePricePlan() {
  monthPlan.classList.toggle('pricing-plan-active');
  yearPlan.classList.toggle('pricing-plan-active');
  pricingTabs.forEach(plans => {
    plans.classList.toggle('pricing-tab-active');
  });
}