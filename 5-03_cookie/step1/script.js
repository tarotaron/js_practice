'use stript'
const agree = Cookies.get('cookie-agree');
if (agree === 'yse') {
	console.log('クッキーを確認しました');
} else {
	console.log('クッキーを確認できませんでした');
	document.getElementById('agreebtn').onclick = function() {
		Cookies.set('cookie-agree', 'yse', {expires: 7});
	};
}

document.getElementById('testbtn').onclick = function() {
	Cookies.remove('cookie-agree');
};