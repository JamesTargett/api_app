$.getJSON('https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=480503655.f59def8.b826b1f518c743bdbcad78929bff525f&callback=?', function(json) {

	// from each array (post) 
	$.each(json.data, function(i, post) {

		// find image source (url)
		var imageSrc = post.images.standard_resolution.url;
		var captionSrc = post.caption.text;

		// create <img> in memory
		// src = imageSrc from above
		var img = $('<img/>').attr('src', imageSrc);
		var caption = $('<p>' + captionSrc + '</p>');

		// append <img> to <div>
		$('div#lighthouseimages').append(img);
		$('div#lighthousecaptions').append(caption);
	});

	// add .active class to first <img> tag added to the div
	var startingImg = $('img:first').addClass('active');
	var startingCaption = $('p:first').addClass('active');


	var cycleImages = setInterval(function() {
		// move .active class to next <img> tag
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		var currentCaption = $('.active');
		var nextCaption = currentCaption.next();

		// see if nextImg is not there, go to start
		if ((nextImg.length == 0) && (nextCaption.length == 0)) {
			nextImg = startingImg;
			nextCaption = startingCaption;
		}

		nextImg.addClass('active');
		nextCaption.addClass('active');
		currentImg.removeClass('active');
		currentCaption.removeClass('active');
	}, 3000);


});