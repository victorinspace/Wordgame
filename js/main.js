/*

let turnsLeft = 10 // counter to keep track of turns left
let turnsTaken = 2 // turns player has taken will be stored here.
let underscore = '' // used to place underscore on page
let playerGuess = ''

// Keep tracks of turns left
let attempts = function() {
	if (turnsTaken > 0) {
		turnsLeft = turnsLeft - turnsTaken
	}
	return turnsLeft
}



// Generete random word 
let randomWord = commonWords[ Math.floor(Math.random() * (commonWords.length)) ]
console.log("randomWord:", randomWord)




// Place underscore on the page
let underscoreToPage = function() {
	for (let i = 0; i < randomWord.length; i++) {
		underscore += '_ '
	}
	console.log('the printed underscores:', underscore)
}



document.querySelector('#guess-btn').addEventListener("click", function() {
    for(let i = 0; i < randomWord.length; i++){
        if(char.value == randomWord.charAt(i)){ 
                let spl = underscore.split('')
                    spl[i] = char.value
                        underscore = spl.join('')
        }
    }
    document.querySelector('#player-guess').value = ''
    document.querySelector('#player-guess').focus()
    document.querySelector('#player-guess').innerHTML = underscore
})
// document.querySelector('#correct').innerHTML = underscore
// document.querySelector('#turns-remaining').innerHTML = maxTurns + " turns remaining"



// Displaying things to the screen
// ==========================

// Display the random word with underscores
let displayWord = document.getElementById('word')
displayWord.innerHTML = underscoreToPage()

// Display number of turns left to the screen
let displayAttempts = document.getElementById('attempts')
displayAttempts.innerHTML = `you have ${attempts()} attempts left.`
*/

// ==========================================================

let randomWord = commonWords[Math.floor(Math.random() * commonWords.length)]
var playerGuess = document.querySelector("#player-guess")
var maxTurns      = 10
var turnsTaken    = 0
var currentIndex  = word
var guessedLetters= []
var hasFinished   = false
var underscores   = ''

console.log(`The random word of the day is... "${randomWord}"!`)

// place underscores where letters are supposed to be
for (var i = 0; i < randomWord.length; i += 1) {
	underscores += '_ '
}

document.querySelector('#guess-btn').addEventListener("click", function() {
	
	for(let i = 0; i < randomWord.length; i++) {
		
		if (playerGuess.value == randomWord.charAt(i)) { 
			
			let splitWord = underscores.split('')
			
			splitWord[i] = playerGuess.value
			underscores = splitWord.join('')

		} else if (playerGuess.value != randomWord.charAt(i)) {
			
			turnsTaken++

			if (turnsTaken > 0) {
				maxTurns = maxTurns - turnsTaken
			}
		}

	}

	

	document.querySelector('#player-guess').value = ''
	document.querySelector('#player-guess').focus()
	document.querySelector('#correct').innerHTML = underscores
})

// Keep tracks of turns left
// let attempts = function() {
// 	if (turnsTaken > 0) {
	// 	maxTurns = maxTurns - turnsTaken
	// }
// 	console.log(maxTurns)
// 	return maxTurns
// }

document.querySelector('#correct').innerHTML = underscores
document.querySelector('#turns-remaining').innerHTML = maxTurns + " turns remaining"