const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answers-text"));
    // Array.from source: https://www.w3schools.com/jsref/jsref_from.asp


// questions sources: 
    // https://www.triviawell.com/questions/stranger-things
    // https://netflixlife.com/2022/07/20/stranger-things-season-4-quiz-trivia/
    // https://www.buzzfeed.com/jamiejirak1/quiz-stranger-things-2

const listOfQuestions = [
    {
        question: "Where did the boys discover Eleven?",

        answer1: "In the hospital.",
        answer2: "In a diner.",
        answer3: "In the woods.",   
        answer4: "In an arcade.",

        rightAnswer: 3
    },
    {
        question: "Who is Vecna?",

        answer1: "001.",
        answer2: "011.",
        answer3: "010.",
        answer4: "111.",

        rightAnswer: 1
    },
    {
        question: "Which actress did Dustin say his girlfriend is hotter than?",

        answer1: "Phoebe Fox.",
        answer2: "Phoebe Robinson.",
        answer3: "Phoebe Tonkin.",
        answer4: "Phoebe Cates.",

        rightAnswer: 4
    },
    {
        question: "What California town did the Byers family and Eleven move to?",

        answer1: "Lenora Hills.",
        answer2: "Los Angeles.",
        answer3: "Virgin River.",
        answer4: "Sacramento.",

        rightAnswer: 1
    },
    {
        question: "Which city does the show mainly take place in?",

        answer1: "Phoenix.",
        answer2: "Hawkins.",
        answer3: "Lenora Hills",
        answer4: "Virgin River",

        rightAnswer: 2
    },
    {
        question: "In Season 3, what does Alexei demand he get in order for him to talk?",

        answer1: "Watermelon Slurpee.",
        answer2: "Grape Slurpee.",
        answer3: "Strawberry Slurpee.",
        answer4: "Cherry Slurpee.",

        rightAnswer: 4
    },
    {
        question: "In Season 3, how many languages does Robin claim to speak?",

        answer1: "1.",
        answer2: "2.",
        answer3: "3.",
        answer4: "4.",

        rightAnswer: 4
    },
    {
        question: "Who doesn't die in season 4?",

        answer1: "Dr. Brenner.",
        answer2: "Alexei.",
        answer3: "Chrissy Cunningham.",
        answer4: "Eddie Munson.",

        rightAnswer: 2
    },
    {
        question: "What is the name of the shadow monster?",

        answer1: "The Mind Flayer.",
        answer2: "Demogorgon.",
        answer3: "Vecna.",
        answer4: "The Viner.",

        rightAnswer: 1
    },
    {
        question: "What is the name of Yuri's helicopter?",

        answer1: "Anya.",
        answer2: "Kamchatka.",
        answer3: "Katinka.",
        answer4: "Ekaterina.",

        rightAnswer: 3
    },
];


let currentQuestion = {}; // {} declares an object
let score = 0;
let questionNumber = 0;
let questionsLeftInList = [];
// {} and [] source: https://stackoverflow.com/questions/33514915/what-s-the-difference-between-and-while-declaring-a-javascript-array#:~:text=%7B%7D%20is%20declaring%20an%20object,an%20array%20is%20an%20object.


const correctPoints = 10;
const maxQuestions = 10;


// playGame function
playGame = () => {
    // arrow functions source: https://www.w3schools.com/js/js_arrow_function.asp

    // start fresh with 0
    questionNumber = 0;
    score = 0;

    questionsLeftInList = [ ... listOfQuestions];
    // spread syntax source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    console.log(questionsLeftInList);
    getNewQuestion();
};


// getNewQuestion function
getNewQuestion = () => {
    if(questionsLeftInList.length === 0 || questionNumber >= maxQuestions) {
        return window.location.assign("/results-game.html"); // goes to the end page
        // window.location.assign source: https://developer.mozilla.org/en-US/docs/Web/API/Location/assign
    };

    questionNumber++;

    const questionsIndex = Math.floor(Math.random() * questionsLeftInList.length);
    // Math.floor() source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    // Math.random() source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    
    currentQuestion = questionsLeftInList[questionsIndex];
    question.innerText = currentQuestion.question;

    answers.forEach( answers => {
        const number = answers.dataset["number"];
        // HTMLelement.dataset source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        
        answers.innerText = currentQuestion["answer" + number];
    });

    questionsLeftInList.splice(questionsIndex, 1); //splice removes used question so no repeats
    // splice source: https://www.w3schools.com/jsref/jsref_splice.asp
};


answers.forEach( answers => {
    answers.addEventListener("click", e => {
        const clickedAnswer = e.target;
        // e.target source: https://www.w3schools.com/jsref/event_target.asp

        const selectedAnswer = clickedAnswer.dataset["number"];

        console.log(selectedAnswer == currentQuestion.rightAnswer)
        if (selectedAnswer == currentQuestion.rightAnswer) {
            score += correctPoints;
            displayScore.innerText = score;
            console.log("score: " + score);
            getNewQuestion();
        } else {
            getNewQuestion();
        };
    });
});


// call playGame function
playGame();