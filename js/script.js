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

var pricingPlans = document.querySelectorAll('.js-plan');
var pricingTabs = document.querySelectorAll('.pricing-tabs');

pricingPlans.forEach( (plan,index) => {
  plan.addEventListener('click', function() {
    pricingPlanChange(index);
  }, false);
});

function pricingPlanChange(plan) {
  for(let i=0; i<pricingPlans.length; i++) {
    if(i == plan) {
      pricingPlans[i].classList.add('pricing-plan-active');
      pricingTabs[i].classList.add('pricing-tab-active');
    }
    else {
      pricingPlans[i].classList.remove('pricing-plan-active');
      pricingTabs[i].classList.remove('pricing-tab-active');
    }
  }
}





// Carousel

var carousel = document.querySelector('.carousel');
var indicators = document.querySelectorAll('.indicator');

indicators.forEach( (ind, index) => {
  ind.addEventListener('click', function() {
    slide(index);
  }, false);
});

function slide(count) {
  for(let i=0; i<indicators.length ;i++) {
    if(i == count) {
      carousel.classList.add('slide' + i);
      indicators[i].classList.add('indicator-active');
    }
    else {
      carousel.classList.remove('slide' + i);
      indicators[i].classList.remove('indicator-active');
    }
  }
}