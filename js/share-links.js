$(function() {
  var url = window.location;
  $('.share-links a.share-twitter').click(function (e) {
    e.preventDefault();
    tweetShare = "https://twitter.com/share?url="+encodeURIComponent(url);
    window.open(tweetShare,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=650');
  });

  $('.share-links a.share-facebook').click(function (e) {
    e.preventDefault();
    facebookShare = "https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url);
    window.open(facebookShare, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=650');
  });

  $('.share-links a.share-google').click(function (e) {
    e.preventDefault();
    googleShare = "https://plus.google.com/share?url="+encodeURIComponent(url);
    window.open(googleShare, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=436,width=400');
  });

  $('.url-field input').val(window.location.href);
  $('.copy-url').click(function (e) {
    $('.url-field').toggle().find('input').select();
  });
});
