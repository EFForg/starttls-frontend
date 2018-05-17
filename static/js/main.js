window.onload = function jsChange(e){
  var x = document.getElementsByClassName("js-yes");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "inline-block";
  }
  var y = document.getElementsByClassName("js-no");
  var i;
  for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
  }
}
