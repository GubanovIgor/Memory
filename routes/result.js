const a = ['кот', 'собака', 'цветок'];
const b = ['собака', 'мышь', 'цветок'];

const result = (answer, userAnswer) => {
  let countMatchedOrder = 0;
  let countMatchedWord = 0;
  let length = answer.length;

  for (let i = 0; i < length; i++) {
    if (answer[i].toLowerCase() == userAnswer[i].toLowerCase()) {
      countMatchedOrder++;
    }
    if (userAnswer.indexOf(answer[i]) >= 0) {
      countMatchedWord++;
    }
  }
  return [countMatchedOrder, countMatchedWord];
};


module.exports = result;
