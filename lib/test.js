const { Scalachess } = require('./scalachess.js');

(async function(){
	let sc = new Scalachess('crazyhouse')
	console.log(await sc.init())
	console.log(await sc.makeMoves(['e2e4','d7d5','e4d5','e7e6','p@g4']))
})()
