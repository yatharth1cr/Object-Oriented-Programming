// Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
let questionMethod = {
  isAnswerCorrect: function (index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer: function (index) {
    return this.options[this.correctAnswerIndex];
  },
};

function createQuestion(title, options, correctAnswerIndex) {
  let question = Object.create({ questionMethod });
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  return question;
}

// Pseudoclassical Pattern (Put methods inside F.prototype and use new to call function)
function Question(title, options, correctAnswerIndex) {
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
  isAnswerCorrect: function (index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer: function (index) {
    return this.options[this.correctAnswerIndex];
  },
};
let firstQuestion = new Question(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new Question(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
console.log(firstQuestion);
console.log(secondQuestion);

// Create using class
class Ques {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer(index) {
    return this.options[this.correctAnswerIndex];
  }
}

let thirdQuestion = new Ques(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let fourthQuestion = new Ques(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);

console.log(thirdQuestion);
console.log(fourthQuestion);
