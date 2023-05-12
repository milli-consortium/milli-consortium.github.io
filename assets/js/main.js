/**
 * Main JS file for theme behaviours
 */

// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle');
if (menuToggle) {
  for (var i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener('click', function(e){
      document.body.classList.toggle('menu--opened');
      e.preventDefault();
    },false);
  }

  document.body.classList.remove('menu--opened');

  window.addEventListener('resize', function () {
    if (menuToggle[0].offsetParent === null) {
      document.body.classList.remove('menu--opened');
    }
  }, true);
}

// scroll to top of the page
scrollToTop = function () {
  var c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// show scroll button after x% scrolling
document.addEventListener("scroll", handleScroll);
// get a reference to the button
var scrollToTopBtn = document.querySelector("#to-top");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.1;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

