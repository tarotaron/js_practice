'use stript'
const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');
if (agree === 'yse') {
	document.body.removeChild(panel);
} else {
	document.getElementById('agreebtn').onclick = function() {
		Cookies.set('cookie-agree', 'yse', {expires: 7});
		document.body.removeChild(panel);
	};
}

document.getElementById('testbtn').onclick = function() {
	Cookies.remove('cookie-agree');
};