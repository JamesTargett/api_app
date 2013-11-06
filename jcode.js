$.getJSON('https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=480503655.f59def8.b826b1f518c743bdbcad78929bff525f&callback=?', function(json) {

	var div = $('<div></div>');
	var post = json['data'][0];
	console.log(post);

	// get the source of the image so we can set it on the <img> tag later
	var imageSrc = post.images.standard_resolution.url;
	
	// Create <img> tag in memory, with src = whatever instagram gives us
	var img = $('<img/>').attr('src', imageSrc);

	// append the <img> tag to our DIV
	$('div#lighthouse').append(img)




	// var img = $('<img />').attr('src', imageSrc);
	// div.append(img);
});