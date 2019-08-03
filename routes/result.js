const a = ['кот', 'собака', 'цветок'];
const b = ['собака', 'мышь', 'Цветок'];

const result = (answer, userAnswer) => {
  let order = 0;
  let allRight = 0;
  let length = answer.length;
  
  for(let i = 0; i < userAnswer.length; i++) {
    userAnswer[i] = userAnswer[i].toLowerCase();
  }

  for (let i = 0; i < length; i++) {
    if (answer[i].toLowerCase() == userAnswer[i].toLowerCase()) {
      order++;
    }
    if (userAnswer.indexOf(answer[i].toLowerCase()) >= 0) {
      allRight++;
    }
  }
  return [order, allRight];
};


module.exports = result;
