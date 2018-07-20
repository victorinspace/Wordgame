let randomWord     = commonWords[Math.floor(Math.random() * commonWords.length)]
let playerGuess    = document.querySelector("#player-guess")
let currentIndex   = word
let guessedLetters = []
let underscores    = ''

console.log(`The random word of the day is... "${randomWord}"!`)

for (var i = 0; i < randomWord.length; i += 1) {
	underscores += '_ '
}

document.querySelector('#guess-btn').addEventListener("click", function() {
	
	for(let i = 0; i < randomWord.length; i++) {
		
		if (playerGuess.value == randomWord.charAt(i)) { 
			
			let splitWord = underscores.split('')
			
			splitWord[i] = playerGuess.value
			underscores = splitWord.join('')
		}
	}

	document.querySelector('#player-guess').value = ''
	document.querySelector('#player-guess').focus()
	document.querySelector('#correct').innerHTML = underscores
})

document.querySelector('#correct').innerHTML = underscores