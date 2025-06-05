import "@hotwired/turbo-rails"
import "controllers"
import $ from "jquery"
window.$ = $
window.jQuery = $

function scroll_bottom() {
  console.log("scroll_bottom called");
  const messages = $("#messages");
  if (messages.length > 0) {
    console.log("Scrolling to bottom of #messages");
    messages.scrollTop(messages[0].scrollHeight);
  } else {
    console.log("#messages not found");
  }
}

$(document).on("turbo:load", function() {
  console.log("turbo:load event fired");
  $(".ui.dropdown").dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  scroll_bottom();
})

import "channels"
