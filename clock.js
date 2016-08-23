console.log("is js working?");

// THINGS TO POLISH
// 1) CREATE FUNCTION TO MAKE HOUR HAND MOVE SMOOTHLY (NOT CHOPPY)


document.addEventListener('DOMContentLoaded', function() {
  var now = new Date();
  console.log(now);
  console.log(now.getMinutes());

  var secNow = now.getSeconds();
  var minNow = now.getMinutes();
  var hourNow = now.getHours();

  updateSec();
  updateMin();
  updateHour();

  setInterval(updateSec, 1000);
  setInterval(updateMin, 60000);
  setInterval(updateHour, 3600000);


  function updateSec () {
    console.log("inside updateSec function");
    var x = secRotation(secNow);
    var el = document.getElementById("second");
    el.style.transform = "rotate(" + x + "deg)";
  }
  function updateMin () {
    console.log("inside updateMin function");
    var x = minRotation(minNow);
    var el = document.getElementById("minute");
    el.style.transform = "rotate(" + x + "deg)";
  }
  function updateHour () {
    console.log("inside updateHour function");
    var x = hourRotation(hourNow);
    var el = document.getElementById("hour");
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

  function minRotation (m) {
    if (m !== 60) {
      minNow++;
      console.log("returning " + ((m / 60) * 360) + " degrees for mins");
      return (m / 60) * 360;  // returns degree of hand
    }
    else {
      minNow = 1;
      return 1;
    }
  }

  function hourRotation (h) {
    if (h !== 24) {
      hourNow++;
      return (h / 12) * 360;  // returns degree of hand
    }
    else {
      hourNow = 1;
      return 1;
    }
  }
});
