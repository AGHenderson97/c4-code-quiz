// Set up quiz questions
var questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "High Text Markup Language", correct: false }
      ]
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Creative Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false }
      ]
    },
    {
      question: "What does JS stand for?",
      answers: [
        { text: "Java Symbol", correct: false },
        { text: "Java Syntax", correct: false },
        { text: "JavaScript", correct: true },
        { text: "Java Statement", correct: false }
      ]
    }
  ];

  // Set up variables
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var resultContainer = document.getElementById("result-container");
var scoreEl = document.getElementById("score");
var initialsInput = document.getElementById("initials");
var submitScoreButton = document.getElementById("submit-score");
var highscoresContainer = document.getElementById("highscores-container");
var highscoresList = document.getElementById("highscores-list");
var clearScoresButton = document.getElementById("clear-scores");
var shuffledQuestions, currentQuestionIndex;
var timeLeft, timerId;

// Add event listeners
startButton.addEventListener("click", startQuiz);
answerButtonsEl.addEventListener("click", selectAnswer);
submitScoreButton.addEventListener("click", submitScore);
clearScoresButton.addEventListener("click", clearScores);

  