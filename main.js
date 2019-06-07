var nav = document.getElementById('navbar');

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    nav.style.background = '#1a0628'
    nav.style.boxShadow = '0px 4px 5px 0px rgba(0,0,0,0.75)'
  }
  else {
    nav.style.boxShadow = '1px 1px 1px 1px #ff5338'
    nav.style.background = 'transparent'
  }
}
