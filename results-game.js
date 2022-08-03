const playerName = document.getElementById("playerName"); // get id from results-game.html

const submitScoreButton = document.getElementById("submitScoreButton"); //get id from results-game.html

const totalScore = document.getElementById('totalScore'); // get id from results-game.html

const newTotalScore = localStorage.getItem('newTotalScore'); //get newTotalScore from getNewQuestion function from trivia-game.js

const listOfScores = JSON.parse(localStorage.getItem("listOfScores")) || [];
// source: https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68;


totalScore.innerText = newTotalScore; // displays total score


// submitScore function
submitScore = (e) => {
    e.preventDefault(); // prevents form from doing default action (submitting to a new page)
    // e.preventDefault source: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    const score = {
        score: newTotalScore,
        name: playerName.value
    };
    listOfScores.push(score); // adds new submits into scores array
    console.log(listOfScores);
};
