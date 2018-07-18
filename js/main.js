

let turnsLeft = 10 // counter to keep track of turns left
let turnsTaken = 2 // turns player has taken will be stored here.
let underscore = '' // used to place underscore on page

// Turns left
let attempts = function() {
	if (turnsTaken > 0) {
		turnsLeft = turnsLeft - turnsTaken
	}
	return turnsLeft
}



// Generete random word for player to guess
let randomWord = commonWords[ Math.floor(Math.random() * (commonWords.length)) ]


// Place underscore on the page
let underscoreToPage = function() {
	for (let i = 0; i < randomWord.length; i++) {
		underscore += '_ '
	}
}


// Displaying shit to screen
// ==========================

// Display the random word with underscores
let displayWord = document.getElementById('word')
displayWord.innerHTML = underscoreToPage()

// Display number of turns left to the screen
let displayAttempts = document.getElementById('attempts')
displayAttempts.innerHTML = `you have ${attempts()} attempts left.`


