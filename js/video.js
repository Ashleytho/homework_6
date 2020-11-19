var video = document.getElementById("myVideo");
var playbackSpeed = 1.0;
var current;
var soundStatus;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	playbackSpeed -= .1;
	video.playbackRate = playbackSpeed;
	console.log("Playback Speed: "+ playbackSpeed);
});

document.querySelector("#faster").addEventListener("click", function() {
	playbackSpeed += .1;
	video.playbackRate = playbackSpeed;
	console.log("Playback Speed: "+ playbackSpeed);
});

document.querySelector("#skip").addEventListener("click", function() { 
	video.pause();
	if (video.currentTime <= video.duration){
		current = video.currentTime;
		current += 5;
		video.currentTime = current;
		console.log(current);
		video.play();
	}
	else{
		video.currentTime = 5;
		video.play();
		console.log(current);
	}
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume >= 0){
		soundStatus = video.volume;
		video.volume = 0;
		document.getElementById('volume').innerHTML = video.volume;
		document.getElementById('mute').innerHTML = 'Unmute';
	}
	else if (video.volume == 0){
		document.getElementById('volume').innerHTML = soundStatus;
		document.getElementById('mute').innerHTML = 'Mute';
	}

});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = (document.querySelector("#volumeSlider").value)/ 100;
	document.getElementById('#volume').innerHTML = volumeSlider.value + "%";
	console.log(volumeSlider.value);
});


document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("old").classList.add("oldTime");
	console.log("oldtime");
};

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("original").classList.add("oldTime");
	console.log("orignal");
};