const quebank = [
  {
    question: " What is C++?",
    a: "An object oriented programming language",
    b: "A procedural programming language",
    c: "C++ supports both procedural and object oriented programming language",
    d: " Functional programming language",
    correct: "c",
  },

  {
    question:
      "Which of the following is the correct syntax of including a user defined header files in C++?",
    a: "#include [userdefined]",
    b: "#include “userdefined”",
    c: "#include < userdefined.h>",
    d: "#include < userdefined>",
    correct: "b",
  },

  {
    question:
      "Which of the following user-defined header file extension used in c++?",
    a: "hg",
    b: "cpp",
    c: "h",
    d: "hf",
    correct: "c",
  },

  {
    question: "Which of the following is a correct identifier in C++?",
    a: "VAR_1234",
    b: "$var_name",
    c: "7VARNAME",
    d: "7var_name",
    correct: "a",
  },

  {
    question: "Which of the following is not a type of Constructor in C++?",
    a: "Default constructor",
    b: "Parameterized constructor",
    c: "Copy constructor ",
    d: "Friend constructor",
    correct: "d",
  },
];

const quesEle = document.getElementById("question");
const scoreEle = document.getElementById("score");
const aEle = document.querySelector('label[for="a"]');
const bEle = document.querySelector('label[for="b"]');
const cEle = document.querySelector('label[for="c"]');
const dEle = document.querySelector('label[for="d"]');

const answers = document.querySelectorAll('input[name="answer"]');

const submitBtn = document.getElementById("next");
const quizEle = document.getElementById("quiz");

let quizCount = 0;
let score = 0;

const LoadQuiz = () => {
  deselectAnswer();
  let currQuiz = quebank[quizCount];
  scoreEle.innerHTML = `<h4>Score: ${score}</h4>`;
  quesEle.innerHTML = currQuiz.question;
  aEle.innerHTML = currQuiz.a;
  bEle.innerHTML = currQuiz.b;
  cEle.innerHTML = currQuiz.c;
  dEle.innerHTML = currQuiz.d;
};

const getSelectedAnswer = () => {
  let selectedAnswer = false;

  answers.forEach((ele) => {
    if (ele.checked) {
      selectedAnswer = ele.id;
    }
  });

  return selectedAnswer;
};

const deselectAnswer = () => {
  answers.forEach((ele) => {
    ele.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  let selectedAnswer = getSelectedAnswer();
  if (quizCount < quebank.length - 1) {
    if (selectedAnswer) {
      if (selectedAnswer == quebank[quizCount].correct) {
        score++;
      }
      quizCount++;
      LoadQuiz();
    } else {
      alert("Please select an answer and try again!");
    }
  } else {
    quizEle.innerHTML = `<h1>Your Score: ${score} / ${quebank.length}.</h1><button onclick="location.reload();">Play Again</button>`;
  }
});

LoadQuiz();
