$.getJSON('https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=480503655.f59def8.b826b1f518c743bdbcad78929bff525f&callback=?', function(json) {

	// from each array (post) 
	$.each(json.data, function(i, post) {

		// find image source (url)
		var imageSrc = post.images.standard_resolution.url;

		// create <img> in memory
		// src = imageSrc from above
		var img = $('<img/>').attr('src', imageSrc);

		// append <img> to <div>
		$('div#lighthouse').append(img);
	});

	// add .active class to first <img> tag added to the div
	var startingImg = $('img:first').addClass('active');

	var cycleImages = setInterval(function() {
		// move .active class to next <img> tag
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		// see if nextImg is not there, go to start
		if (nextImg.length == 0) {
			nextImg = startingImg;
		}

		nextImg.addClass('active');
		currentImg.removeClass('active');

		// if .active is on the last <img> in array, move .active back to the beginning <img> of the array 
	}, 3000);


});