var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

$(function() {
  $.ajaxSetup({ cache: false });
  tweetButtonInit();
  getQuote();
  $("#quotebutton").click(function() {
    getQuote();
  });
});

var getQuote = function() {
  $.getJSON(url, function(data) {
    $("#quotetext").html(data[0].content);
    if (data[0].title === '') data[0].title = "Unknown";
    $(".authortext").html('Author: ' + data[0].title);
    changeTweet()
  });
};

var changeTweet = function() {
  var tweetText = $("#quotetext").text() + $(".authortext").text();
   $("#tweet").html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="blank" data-size="large" data-text="' + tweetText + '" data-count="none">Tweet</a>');
  twttr.widgets.load();
}

var tweetButtonInit = function() {
  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
  }