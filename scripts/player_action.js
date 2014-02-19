function player_action(type) {
	chrome.tabs.sendRequest(parseInt(localStorage["tabID"]), {'action' : 'playback_action', 'type' : type},
		function(response) {
			// popup_prep();
		}
	);
	if (type == 'playPause' && $("#playPause").attr('title') == "Play") {
		toggle_play('playing');
	}
	else if (type == 'playPause' && $("#playPause").attr('title') == "Pause") {
		toggle_play('paused');
	}

	if (type == 'thumbUp' && $("#up").hasClass("thumb-checked")) {
		$('#up').removeClass('thumb-checked');
	}

	else if (type == 'thumbUp') {
		$('#up').addClass('thumb-checked');
		if ($('#down').hasClass("thumb-checked")) {
			$('#down').removeClass("thumb-checked");
		}
	}

	if (type == 'thumbDown' && $('#down').hasClass('thumb-checked')) {
		$('#down').removeClass('thumb-checked');
	}
	else if (type == 'thumbDown') {
		$('#down').addClass('thumb-checked');
		if ($('#up').hasClass('thumb-checked')) {
			$('#up').removeClass('thumb-checked');
		}
	}
}

function toggle_thumb(status) {
	if (status == 'None') {
		if ($('#down').hasClass('thumb-checked')) {
			$('#down').removeClass('thumb-checked');
		}
		if ($('#up').hasClass('thumb-checked')) {
			$('#up').removeClass('thumb-checked');
		}
	}
	else if (status == 'Up') {
		if ($('#down').hasClass('thumb-checked')) {
			$('#down').removeClass('thumb-checked');
		}
		if (!($('#up').hasClass('thumb-checked'))) {
			$('#up').addClass('thumb-checked');
		}
	}
	else if (status == 'Down') {
		if (!($('#down').hasClass('thumb-checked'))) {
			$('#down').addClass('thumb-checked');
		}
		if ($('#up').hasClass('thumb-checked')) {
			$('#up').removeClass('thumb-checked');
		}
	}
}

function toggle_play(status) {
	if (status == 'playing') {
		$('#playPause').addClass('goog-flat-button-checked');
		$('#song_indicator').addClass('playing-indicator');
		$('#song_indicator').removeClass('paused-indicator');
		$("#playPause").attr('title', 'Pause');
	}
	else if (status == 'paused') {
		// console.log('paused');
		$('#playPause').removeClass('goog-flat-button-checked');
		$('#song_indicator').addClass('paused-indicator');
		$('#song_indicator').removeClass('playing-indicator');
		$("#playPause").attr('title', 'Play');
	}

}
