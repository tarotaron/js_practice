'use stript'
document.getElementById('pi').textContent = Math.PI;
document.getElementById('floor').textContent = Math.floor(Math.PI);
document.getElementById('output').textContent = point(Math.PI, 2);

function point(num, digit) {
	const mover = 10 ** digit;
	return Math.floor(num * mover) / mover;
}

