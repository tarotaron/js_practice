'use stript'
let todo = ['デザインカップ作成','データ整理','勉強会申し込み','牛乳買う'];
todo.push('歯医者に行く')
todo.unshift('a')
for(let item of todo) {
	console.log(item);
}