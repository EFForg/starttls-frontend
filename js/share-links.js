$(function() {
  var url = window.location.href;
  $('.share-links a.share-twitter').click(function (e) {
    e.preventDefault();
    var params = $.param({
      text: "STARTTLS is essential for email security. Does " +
      window.location.search.substring(1) +
      " support it?",
      url: url
    });
    var tweetShare = "https://twitter.com/share?" + params;
    window.open(tweetShare,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=650');
  });

  $('.share-links a.share-facebook').click(function (e) {
    e.preventDefault();
    var facebookShare = "https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url);
    window.open(facebookShare, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=650');
  });

  $('.share-links a.share-google').click(function (e) {
    e.preventDefault();
    var googleShare = "https://plus.google.com/share?url="+encodeURIComponent(url);
    window.open(googleShare, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=436,width=400');
  });

  $('[class^="url-field-"] input').val(window.location.href);
  $('.copy-url-social').click(function (e) {
    $('.url-field-social').toggle().find('input').select();
    $('.url-field-social').toggleClass("social-copy-fix");
  });
  $('.copy-url-share').click(function (e) {
    $('.url-field-share').toggle().find('input').select();
    $( ".share-links" ).toggleClass( "link-input-fix" );
    $('.url-field-share').toggleClass("copy-fix");

  });
});
