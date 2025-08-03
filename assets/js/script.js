// The quiz questions
const questions = [
  {
    question: "Which element has the chemical symbol 'Fe'?",
    answers: ["Iron", "Fluorine", "Fermium"],
    correct: "Iron"
  },
  {
    question: "What year did World War I begin?",
    answers: ["1912", "1914", "1916"],
    correct: "1914"
  },
  {
    question: "Which chess piece can only move diagonally?",
    answers: ["Knight", "Bishop", "Queen"],
    correct: "Bishop"
  },
  {
    question: "What is the square root of 144?",
    answers: ["12", "14", "16"],
    correct: "12"
  },
  {
    question: "Which artist painted the ceiling of the Sistine Chapel?",
    answers: ["Michelangelo", "Da Vinci", "Raphael"],
    correct: "Michelangelo"
  },
  {
    question: "How many bones are in the adult human body?",
    answers: ["206", "210", "198"],
    correct: "206"
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace"],
    correct: "Marie Curie"
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Toronto", "Vancouver", "Ottawa"],
    correct: "Ottawa"
  },
  {
    question: "Which planet has the most moons?",
    answers: ["Jupiter", "Saturn", "Neptune"],
    correct: "Saturn"
  },
  {
    question: "Which Shakespeare play features Rosencrantz and Guildenstern?",
    answers: ["Hamlet", "Macbeth", "Othello"],
    correct: "Hamlet"
  },
  {
    question: "What is the tallest mountain in Africa?",
    answers: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon"],
    correct: "Mount Kilimanjaro"
  },
  {
    question: "Which scientist was born in Pisa, Italy?",
    answers: ["Galileo Galilei", "Einstein", "Newton"],
    correct: "Galileo Galilei"
  },
  {
    question: "What is the rarest blood type?",
    answers: ["O negative", "AB negative", "B negative"],
    correct: "AB negative"
  },
  {
    question: "Which desert is the largest in the world?",
    answers: ["Sahara", "Antarctic", "Gobi"],
    correct: "Antarctic"
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    answers: ["Central Processing Unit", "Computer Power Unit", "Control Process Utility"],
    correct: "Central Processing Unit"
  },
  {
    question: "How many sides does a dodecagon have?",
    answers: ["10", "12", "14"],
    correct: "12"
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yuan", "Won", "Yen"],
    correct: "Yen"
  },
  {
    question: "Which novel begins with the line 'Call me Ishmael'?",
    answers: ["Moby-Dick", "Dracula", "Frankenstein"],
    correct: "Moby-Dick"
  },
  {
    question: "Which planet is tilted on its side?",
    answers: ["Uranus", "Neptune", "Venus"],
    correct: "Uranus"
  },
  {
    question: "What does DNA stand for?",
    answers: ["Deoxyribonucleic Acid", "Dioxynuclear Acid", "Deoxyribosome Nucleic Atom"],
    correct: "Deoxyribonucleic Acid"
  },
  {
    question: "Which language has the most native speakers?",
    answers: ["English", "Mandarin Chinese", "Hindi"],
    correct: "Mandarin Chinese"
  },
  {
    question: "What number is represented by 'L' in Roman numerals?",
    answers: ["50", "100", "500"],
    correct: "50"
  },
  {
    question: "What type of animal is a Komodo dragon?",
    answers: ["Lizard", "Crocodile", "Snake"],
    correct: "Lizard"
  },
  {
    question: "Which city hosted the 2016 Summer Olympics?",
    answers: ["Tokyo", "Rio de Janeiro", "London"],
    correct: "Rio de Janeiro"
  },
  {
    question: "Which planet is closest to the sun?",
    answers: ["Venus", "Earth", "Mercury"],
    correct: "Mercury"
  },
  {
    question: "What is the capital of Turkey?",
    answers: ["Istanbul", "Ankara", "Izmir"],
    correct: "Ankara"
  },
  {
    question: "How many degrees are in a right angle?",
    answers: ["45", "90", "180"],
    correct: "90"
  },
  {
    question: "Who discovered penicillin?",
    answers: ["Alexander Fleming", "Louis Pasteur", "Gregor Mendel"],
    correct: "Alexander Fleming"
  },
  {
    question: "What is the longest river in the world?",
    answers: ["Amazon", "Nile", "Yangtze"],
    correct: "Nile"
  },
  {
    question: "Which organ produces insulin?",
    answers: ["Liver", "Pancreas", "Kidney"],
    correct: "Pancreas"
  }
];

// DOM elements
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const scoreDisplay = document.getElementById("score");
const questionNumber = document.getElementById("current-question");
const progressBar = document.getElementById("progress-bar");

let currentQuestionIndex = 0;
let score = 0;

// Fisher-Yates shuffle algorithm
// Credit: https://stackoverflow.com/a/2450976 by Laurens Holst
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Update progress bar width
function updateProgressBar() {
  const percent = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${percent}%`;
}

// Show a question
function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showEndScreen();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  updateProgressBar();
  answerButtons.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");
    button.dataset.correct = answer === currentQuestion.correct;

    button.addEventListener("click", handleAnswerClick);
    answerButtons.appendChild(button);
  });
}

// Handle answer click
function handleAnswerClick(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  // Highlight correct answer
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  // Update score
  scoreDisplay.textContent = `Score: ${score}`;

  // Move to next question
  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1000);
}

// Show end screen
function showEndScreen() {
  questionText.textContent = "🎉 Quiz Complete!";
  questionNumber.textContent = "";
  answerButtons.innerHTML = `
    <p>You scored ${score} out of ${questions.length}!</p>
    <button id="restart-btn">Play Again</button>
  `;

  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  progressBar.style.width = "0%";
  shuffleArray(questions);
  showQuestion();
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay.textContent = `Score: ${score}`;
  shuffleArray(questions);
  showQuestion();
});