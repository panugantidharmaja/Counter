function startTimer() {
  var x = setInterval(function() {
    var countDownDate = document.getElementById("date").value;
    var currentDate = new Date().getTime();
    //console.log(currentDate);
    countDownDate = new Date(countDownDate).getTime();
    var diff = countDownDate - currentDate;
    console.log(diff);
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("result").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (diff < 0) {
      clearInterval(x);
      document.getElementById("result").innerHTML = "EXPIRED";
    }
  }, 1000);
}
