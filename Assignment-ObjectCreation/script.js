// Without Object
let title = "Where is the capital of Jordan";
let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
let correctAnswerIndex = 1;
function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}
function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// Organize using object
let question1 = {
  title: "where is the capital of Jordan",
  options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  correctAnswerIndex: 1,
  isAnswerCorrect: function (index) {
    return index === correctAnswerIndex;
  },
  getCorrectAnswer: function () {
    return question1.options[correctAnswerIndex];
  },
};

// Use a function to create object
function createQuestion(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return index === question.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return question.options[correctAnswerIndex];
  };
  return question;
}

// Convert the function to use this keyword
function createQuestion(title, options, correctAnswerIndex) {
  let question = {};
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  question.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  question.getCorrectAnswer = function () {
    return this.options[this.correctAnswerIndex];
  };
  return question;
}

// Write test by creating two objects also test both methods.
