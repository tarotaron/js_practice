'use stript'
function success(pos) {
	ajaxRequest(pos.coords.latitude,pos.coords.longitude);
}
function fail(error) {
	alert('位置情報の習得に失敗しました。エラーコード:' + error.code)
}
navigator.geolocation.getCurrentPosition(success, fail);

function ajaxRequest(lat, long) {
	const url = 'http://api.openweathermap.org/data/2.5/forecast';
	const appId = 'eb5982e0ac7e674e5045139a2bc1ab08';

	$.ajax({
		url: url,
		data: {
			appid: appId,
			lat: lat,
			lon: long,
			units: 'metric',
			lang: 'ja'
		}
	})

	.done(function(data) {
		console.log(data);
	})
	.fail(function() {
		console.log('$.ajax failed!');
	})
}