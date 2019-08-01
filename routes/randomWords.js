const testArr = [
  {value: 'Dog'},
  {value: 'Cat'},
  {value: 'Wolf'},
  {value: 'Parrot'},
  {value: 'Rabbit'},
  {value: 'Fox'},
  {value: 'Frog'},
  {value: 'Horse'},
  {value: 'Bear'},
  {value: 'Monkey'},
];

// console.log(testArr)

const randomWords = (arr) => {
  const wordsForTest = [];
  const length = arr.length;
  const set = {
    1: true
  };

  for (let i = 0; i < 5; i++) {
    let randomN = Math.floor(Math.random() * length);
    if (set[randomN] === undefined) {
      set[randomN] = true;
      wordsForTest.push(arr[randomN].value);
    } else {
      i--;
    }
  };
  return wordsForTest;
}

console.log(randomWords(testArr));
