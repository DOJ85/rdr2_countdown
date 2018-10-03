// function clock() {
//   var currentTime = new Date();
//   var currentDay = currentTime.getDay();
//   var currentHours = currentTime.getHours();
//   var currentMinutes = currentTime.getMinutes();
//   var currentSeconds = currentTime.getSeconds();
//
//   currentDay = updateTime(currentDay);
//   currentHours = updateTime(currentHours);
//   currentMinutes = updateTime(currentMinutes);
//   currentSeconds = updateTime(currentSeconds);
//
//   document.getElementById('clock').innerHTML = currentDay + ":" + currentHours + ":" + currentMinutes + ":" + currentSeconds;
//   var refreshRate = setTimeout(clock, 1000);
// };
//
// function updateTime(i) {
//   if(i < 10) {
//     i = "0" + i
//   };
//   return i;
// };




var clock = new Date("Oct 26, 2018 09:00:00").getTime();
// var clock = new Date("Oct 03, 2018 20:05:00").getTime();

  var x = setInterval(function() {
  var now = new Date().getTime();
  var lapse = clock - now;

  var days = Math.floor(lapse / (1000 * 60 * 60 * 24));
    var hours = Math.floor((lapse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((lapse % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((lapse % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;

  if(lapse < 0){
    clearInterval(x);
    document.getElementById("clock").innerHTML = "DISPONIBLE !!!";
  }
}, 1000);
