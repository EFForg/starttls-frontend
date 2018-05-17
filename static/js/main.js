window.onload = function(e){
  var x = document.getElementsByClassName("js-yes");
  var i;
  for (i = 0; i < x.length; i++) {
    alert(i);
      x[i].style.display = "inline-block";
  }
  var y = document.getElementsByClassName("js-no");
  var i;
  for (i = 0; i < y.length; i++) {
    alert(i);
      y[i].style.display = "none";
  }
}
