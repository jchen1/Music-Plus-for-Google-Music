var Track = {

	artist : '',
	album : '',
	album_art : '',
	song_title : '',
	current_time : '',
	total_time : '',
	status : '',
	thumb_status : '',

	now_playing : function() {
		this.song_title = $("#playerSongTitle").text();
		this.artist = $("#player-artist").text();
		this.album = $('#player-album').text();
		this.album_art = "http://" + $("#playingAlbumArt").attr('src');
		this.current_time = $("#time_container_current").text();
		this.total_time = $("#time_container_duration").text();
		var status = 'Play', thumb_status = 'None';
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
		// else {
		// 	console.log('this is not playing');
		// }
		this.status = status;
		this.thumb_status = thumb_status;

		return this;
	}
};