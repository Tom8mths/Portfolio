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

function openTab(evt, tabName) {
  var i, bodytext, tablinks;
  bodytext = document.getElementsByClassName("bodytext");
  for (i = 0; i < bodytext.length; i++) {
    bodytext[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < bodytext.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function changeImage() {
  console.log("teste")
  var image = document.getElementById("imgone");
  image.changeImage = "./imgs/site2.png"
}
