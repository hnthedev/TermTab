var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 
function fadeIn() { 
  createFade("bigText",0,0.1);
  createFade("surText",300,0.1);
  createFade("comp",300,0.1);
  createFade("links", 600, 0.1);
  createFade("code", 600, 0.1);
  createFade("timeuse", 0, 0.2);
} 

function createFade(name, time_wait, speed) {
  var MainObj = document.getElementById(name);
  setTimeout(function() {
    var Inter = setInterval(function() {
      currentOpacity = Number(window.getComputedStyle(MainObj).getPropertyValue("opacity"));
      if (currentOpacity < 1) {
        currentOpacity += speed;
        MainObj.style.opacity = currentOpacity;
      } else {
        clearInterval(Inter);
      }
    },50)
  },time_wait)
}

const hear = document.getElementById("CMD");
hear.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        const searched = hear.value;
        window.open("https://www.google.com/search?q="+searched, "_self")
    }
})
const clicked = document.getElementById("maintab")
clicked.addEventListener("click", () => {
    document.getElementById('CMD').focus(); return false;
})
const clicked2 = document.getElementById("timeuse")
clicked2.addEventListener("click", () => {
    document.getElementById('CMD').focus(); return false;
})
const clicked3 = document.getElementById("links")
clicked3.addEventListener("click", () => {
    document.getElementById('CMD').focus(); return false;
})


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('timing').innerHTML = h + ":" + m;
    t = setTimeout(function() {
      startTime()
    }, 5000);
  }
startTime();