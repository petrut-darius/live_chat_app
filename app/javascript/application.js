import "@hotwired/turbo-rails"
import "controllers"

$(document).on("turbo:load", function() {
  $(".ui.dropdown").dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
});


