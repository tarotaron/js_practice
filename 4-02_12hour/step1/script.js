'use stript'
const now = new Date;
console.log(now)
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
let ampm = '';
if (hour < 12) {
	ampm = 'a.m.';
} else {
	ampm = 'p.m.'
}
const output = `${year}/${month + 1}/${date} ${hour % 12}:${min}${ampm}`;
document.getElementById('time').textContent = output;