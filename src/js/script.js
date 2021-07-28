// Navbar Functionality
var header = document.querySelector('header');
var overlay = document.querySelector('.js-overlay');
var body = document.querySelector('body');
var navbarIcon = document.querySelector('.hamburger-icon');
var navLinks = document.querySelectorAll('.nav-link');

function toggleNavbar() {
  header.classList.toggle('nav-active');
  overlay.classList.toggle('overlay-active');
  body.classList.toggle('body-fixed');
}

function closeMobileNavbar() {
  header.classList.remove('nav-active');
  overlay.classList.remove('overlay-active');
  body.classList.remove('body-fixed');
}

navbarIcon.addEventListener('click', toggleNavbar);
overlay.addEventListener('click', toggleNavbar);

navLinks.forEach(links => {
  links.addEventListener('click', closeMobileNavbar);
});





// Pricing Tab

var pricingPlans = document.querySelectorAll('.js-plan');
var pricingTabs = document.querySelectorAll('.pricing-tabs');

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

pricingPlans.forEach( (plan,index) => {
  plan.addEventListener('click', function() {
    pricingPlanChange(index);
  }, false);
});





// Carousel

var carousel = document.querySelector('.carousel');
var cards = document.querySelectorAll('.card');
var carouselIndicatorContainer = document.querySelector('.carousel-indicators');

function createIndicator() {
  let indicator = document.createElement('span');
  indicator.classList.add('indicator');
  
  carouselIndicatorContainer.append(indicator);
}

for(let i=0; i<cards.length; i++) {
  createIndicator();
}




var indicators = document.querySelectorAll('.indicator');

const moveDistance = 370;
indicators[0].classList.add('indicator-active');


function slideToCard(count) {
  let slideDistance = count * moveDistance;
  carousel.style.transform = "translateX(-" + slideDistance + "px)";
  carousel.style.transition = "0.5s ease";
  indicators.forEach(indicator => {
    if(indicator == indicators[count]) {
      indicator.classList.add('indicator-active');
    }
    else {
      indicator.classList.remove('indicator-active');
    }
  });
}


indicators.forEach( (ind, index) => {
  ind.addEventListener('click', function() {
    slideToCard(index);
  }, false);
});