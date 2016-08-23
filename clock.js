console.log("is js working?");

setInterval(secondHand, 1000);
setInterval(minuteHand, 60000);
setInterval(hourHand, 3600000);

var secNow = 1;
var minNow = 1;
var hourNow = 1;

function secondHand () {
  var x = secRotation(secNow);
  var el = document.getElementById("second")
  el.style.transform = "rotate(" + x + "deg)";
}
function secRotation (seconds) {
  if (seconds !== 60) {
    secNow++;
    return (seconds / 60) * 360;  // returns degree of hand
  }
  else {
    secNow = 1;
    return 1;
  }
}

function minuteHand () {
  var x = minRotation(minNow);
  var el = document.getElementById("minute")
  el.style.transform = "rotate(" + x + "deg)";
}
function minRotation (mins) {
  if (mins !== 60) {
    minNow++;
    return (mins / 60) * 360;  // returns degree of hand
  }
  else {
    minNow = 1;
    return 1;
  }
}

function hourHand () {
  var x = hourRotation(hourNow);
  var el = document.getElementById("hour")
  el.style.transform = "rotate(" + x + "deg)";
}
function hourRotation (hours) {
  if (hours !== 60) {
    hourNow++;
    return (hours / 60) * 360;  // returns degree of hand
  }
  else {
    hourNow = 1;
    return 1;
  }
}
