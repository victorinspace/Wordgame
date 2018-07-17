let turnsLeft = 10
let turnsTaken = 2 // hard coded for testing
let underscore = ''




// Generete random word to guess
let randomNumber = commonWords[Math.floor(Math.random() * (commonWords.length))]



// Calculate how many turns are left
let attempts = function() {
	if (turnsTaken > 0) {
		turnsLeft = turnsLeft - turnsTaken
	}
	return turnsLeft
}



for (let i = 0; i < randomNumber.length; i++) {
	underscore += '_ '
}


// Displaying shit to screen
// ==========================

// Display the random word with underscores
let displayWord = document.getElementById('word')
displayWord.innerHTML = underscore 


let displayAttempts = document.getElementById('attempts')
displayAttempts.innerHTML = `you have ${attempts()} attempts left.`
