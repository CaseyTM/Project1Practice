$(document).ready(function(){
	$.getJSON("http://quotesondesign.com/wp-json/posts?", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
  console.log(a)
});

});
