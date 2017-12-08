// Requires jQuery

$("#refresh").click(function(){
$("#refresh").html("LOADING...");
$("#quote").slideUp(330,function(){
$.getJSON(
  "//stch.tk/api/quote.php?t=json"
  ,function(data) {
    window.history.pushState("", "", '#'+data.id);
    $("#quote")
		.html('<h3>"'+data.quote+'"</h3><p style="font-style:italic;"> - '+data.author+'</p><p><a href="https://twitter.com/intent/tweet?hashtags=quotes&ref_src=twsrc%5Etfw&related=sorcerertech%2Cst-quickquote&text=Cool%20quote%20from%20'+encodeURIComponent(data.author)+'!&tw_p=tweetbutton&via=sorcerertech&url=http%3A%2F%2Fsorcerertech.pcriot.com%2Fquoted%2F%3Fid%3D'+data.id+'" class="twitter-share-button">Tweet</a></p>')
		.delay(500)
		.slideDown(330,function(){
			$("#refresh").html("New quote");});
}
  );

}).slideUp(499);});
