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

	if (type == 'repeat') {
		if ($("#repeat").hasClass('thumb-list')) {
			toggle_repeat('single');
		}
		else if ($("#repeat").hasClass('thumb-single')) {
			toggle_repeat('none');
		}
		else {
			toggle_repeat('list');
		}
	}

	if (type == 'shuffle') {
		if ($("#shuffle").hasClass('thumb-checked')) {
			toggle_shuffle('off');
		}
		else {
			toggle_shuffle('on');
		}
	}
}

function toggle_repeat(status) {
	//console.log(status);
	if (status == 'single') {
		$("#repeat").addClass('thumb-single');
		$("#repeat").removeClass('thumb-list');
	}
	else if (status == 'list') {
		$("#repeat").addClass('thumb-list');
		$("#repeat").removeClass('thumb-single');
	}
	else if (status == 'none') {
		$("#repeat").removeClass('thumb-single');
		$("#repeat").removeClass('thumb-list');
	}
}

function toggle_shuffle(status) {
	if (status == 'off') {
		$("#shuffle").removeClass('thumb-checked');
	}
	if (status == 'on') {
		$("#shuffle").addClass('thumb-checked');
	}
}

function toggle_thumb(status) {
	if (status == 'None') {
		$('#down').removeClass('thumb-checked');
		$('#up').removeClass('thumb-checked');
	}
	else if (status == 'Up') {
		$('#down').removeClass('thumb-checked');
		$('#up').addClass('thumb-checked');
	}
	else if (status == 'Down') {
		$('#down').addClass('thumb-checked');
		$('#up').removeClass('thumb-checked');
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
