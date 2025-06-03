import "@hotwired/turbo-rails"
import "controllers"

$(document).on("turbo:load", function() {
  $(".ui.dropdown").dropdown();
});
