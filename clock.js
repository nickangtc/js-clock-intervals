console.log("is js working?");

setInterval(updateSec, 1000);
setInterval(updateMin, 60000);
setInterval(updateHour, 3600000);

var secNow = 1;
var minNow = 1;
var hourNow = 1;

function updateSec () {
  var x = secRotation(secNow);
  var el = document.getElementById("second");
  el.style.transform = "rotate(" + x + "deg)";
}
function secRotation (s) {
  if (s !== 60) {
    secNow++;
    return (s / 60) * 360;  // returns degree of hand
  }
  else {
    secNow = 1;
    return 1;
  }
}

function updateMin () {
  var x = minRotation(minNow);
  var el = document.getElementById("minute");
  el.style.transform = "rotate(" + x + "deg)";
}
function minRotation (m) {
  if (m !== 60) {
    minNow++;
    return (m / 60) * 360;  // returns degree of hand
  }
  else {
    minNow = 1;
    return 1;
  }
}

function updateHour () {
  var x = hourRotation(hourNow);
  var el = document.getElementById("hour");
  el.style.transform = "rotate(" + x + "deg)";
}
function hourRotation (h) {
  if (h !== 60) {
    hourNow++;
    return (h / 60) * 360;  // returns degree of hand
  }
  else {
    hourNow = 1;
    return 1;
  }
}
