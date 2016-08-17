var jsonUrl = "https://got-quotes.herokuapp.com/quotes";

$.getJSON(jsonUrl, function(json) {
  $(".blockquote").html("\" " + json.quote + " \"");
  $("div.author").html("-- " + json.character);
});

$("#next").on("click", function() {
  $.getJSON(jsonUrl, function(json) {
    $(".blockquote").html("\" " + json.quote + " \"");
    $("div.author").html("-- " + json.character);
  });
})