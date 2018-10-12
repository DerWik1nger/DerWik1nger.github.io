
var h = document.getElementById('hour');
var m = document.getElementById('min');
var s = document.getElementById('sec');

setInterval( function(){
  var d=new Date();
  var hours =23-d.getHours();
  if (hours<10)
  hours="0"+hours;
  var mins = 59-d.getMinutes();
  if (mins<10)
  mins="0"+mins;
  var seconds = 59-d.getSeconds();
  if (seconds<10)
  seconds="0"+seconds;
  h.innerHTML = hours+":";
  m.innerHTML = mins+":";
  s.innerHTML = seconds;
},1000);
