var Track = {

	artist : '',
	album : '',
	album_art : '',
	song_title : '',
	current_time : '',
	total_time : '',
	status : '',
	thumb_status : '',
	repeat_status : '',
	shuffle_status : '',

	now_playing : function() {
		this.song_title = $("#playerSongTitle").text();
		this.artist = $("#player-artist").text();
		this.album = $(".player-album:first").text();
		this.album_art = "http://" + $("#playingAlbumArt").attr('src');
		this.current_time = $("#time_container_current").text();
		this.total_time = $("#time_container_duration").text();
		var status = 'Play', thumb_status = 'None', repeat_status = 'none', shuffle_status = 'off';
		if ($('button[data-id="play-pause"]').hasClass('playing')) {
			// console.log('this is playing');
			status = 'Pause';
		}
		if ($('li[title="Thumbs up"]').hasClass('selected')) {
			thumb_status = 'Up';
		}
		if ($('li[title="Thumbs down"]').hasClass('selected')) {
			thumb_status = 'Down';
		}

		if ($('button[data-id="shuffle"]').attr("value") == "ALL_SHUFFLE") {
			shuffle_status = 'on';
		}
		if ($('button[data-id="repeat"]').attr("value") == "LIST_REPEAT") {
			repeat_status = 'list';
		}
		if ($('button[data-id="repeat"]').attr("value") == "SINGLE_REPEAT") {
			repeat_status = 'single';
		}
		// else {
		// 	console.log('this is not playing');
		// }
		this.status = status;
		this.thumb_status = thumb_status;
		this.shuffle_status = shuffle_status;
		this.repeat_status = repeat_status;

		return this;
	}
};