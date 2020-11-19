var video = document.getElementById("myVideo");
var playbackSpeed = 1.0;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = video.volume;
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
	
});