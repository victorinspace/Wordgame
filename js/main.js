

let randomNumber = Math.floor(Math.random() * (commonWords.length))
let randomWord = commonWords[randomNumber]


let displayWord = document.getElementById('word')
displayWord.innerHTML = randomWord



function goo() {
	let guess = document.getElementById('guess')
	document.getElementById('guess-btn').onclick = function() {
		guess.innerHTML = 'poop'
	}
}
goo()