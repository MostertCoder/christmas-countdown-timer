let christmas = new Date("25 Dec " + new Date().getFullYear());

let timer = setInterval(function () {
	let timeUntil = christmas - new Date();

	let days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}, 1000);
