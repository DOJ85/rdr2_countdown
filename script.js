var clock = new Date("Oct 26, 2018 00:00:01").getTime();
// var clock = new Date("Oct 03, 2018 20:05:00").getTime();

  var x = setInterval(function() {
  var now = new Date().getTime();
  var lapse = clock - now;

  var days = Math.floor(lapse / (1000 * 60 * 60 * 24));
    var hours = Math.floor((lapse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((lapse % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((lapse % (1000 * 60)) / 1000);

    if(hours < 10){
      hours = "0" + hours;
    }

    if(minutes < 10){
      minutes = "0" + minutes;
    }

    if(seconds < 10){
      seconds = "0" + seconds;
    }

  document.getElementById("clock").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;

  if(lapse < 0){
    clearInterval(x);
    document.getElementById("clock").innerHTML = "OUT !!!";
  }
}, 1000);
