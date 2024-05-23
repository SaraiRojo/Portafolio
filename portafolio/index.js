$(document).ready(function() {
    $('.sidebar a').click(function() {
      var href = $(this).attr('href');
      if (href.startsWith('#')) {
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 500);
        return false;
      } else {
        window.location.href = href;
      }
    });
  });
  