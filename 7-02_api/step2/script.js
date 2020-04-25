'use stript'
function success(pos) {
	ajaxRequest(pos.coords.latitude,pos.coords.longitude);
}
function fail(error) {
	alert('位置情報の習得に失敗しました。エラーコード:' + error.code)
}
navigator.geolocation.getCurrentPosition(success, fail);

function utcToJSTime(utcTime) {
	return utcTime * 1000;
}

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

		console.log('都市:' + data.city.name)
		console.log('国名:' + data.city.country)

		data.list.forEach(function(forecast, index){
			const dateTime = new Date(utcToJSTime(forecast.dt));
			const month = dateTime.getMonth() + 1;
			const date = dateTime.getDate();
			const hours = dateTime.get/Hours();
			const min = String(dateTime.getMinutes()).padStart(2, '0');
			const temperature = Math.round(forecast.main.temp);
			const description = forecast.weather[0].description;
			const iconPath = `images/${forecast.weather[0].icon}.svg`;

			console.log('日時:' + `${month}/${data} ${hours}:${min}`);
			console.log('気温:' + temperature);
			console.log('天気:' + description);
			console.log('画像パス:' + iconPath);


		})
	})
	.fail(function() {
		console.log('$.ajax failed!');
	})
}