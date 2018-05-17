window.onload = function main(e){
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
  function addDomainFields(){
    var addAnother = document.getElementsByClassName('add-another');
    var addDomains = document.getElementById('add-domains');

    for(var i = 0; i < addAnother.length; i++) {
      var addAnother = addAnother[i];
      addAnother.onclick = function() {
        var addDomain = document.createElement("input");
        addDomain.type = "text";
        addDomain.value = "mx.domain.org";
        addDomains.appendChild(addDomain);
        addDomains.insertBefore(addDomain, addAnother.childNodes[0])
      }
    }
  }
  addDomainFields();
}
