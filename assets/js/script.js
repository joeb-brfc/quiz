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

let currentQuestionIndex = 0;
let score = 0;

// Show a question
function showQuestion() {
  // If all questions are answered, end the quiz
  if (currentQuestionIndex >= questions.length) {
    showEndScreen();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  answerButtons.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("answer-btn");

    button.addEventListener("click", () => {
      handleAnswer(answer === currentQuestion.correct);
    });

    answerButtons.appendChild(button);
  });
}

// Handle user answer
function handleAnswer(isCorrect) {
  if (isCorrect) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }

  // Update score display
  scoreDisplay.textContent = `Score: ${score}`;

  // Move to next question
  currentQuestionIndex++;
  showQuestion();
}

// End-of-quiz message
function showEndScreen() {
  questionText.textContent = "🎉 Quiz Complete!";
  questionNumber.textContent = "";
  answerButtons.innerHTML = `<p>You scored ${score} out of ${questions.length}!</p>`;
}

// Start quiz on page load
document.addEventListener("DOMContentLoaded", () => {
  scoreDisplay.textContent = `Score: ${score}`;
  showQuestion();
});