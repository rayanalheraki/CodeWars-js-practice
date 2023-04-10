function getWordScore(word: string) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += word[i].charCodeAt(0) - 96;
  }
  return sum;
}

function high(x: string) {
  const words = x.toLowerCase().split(" ");
  let highestScoringWord = "";
  let highestScoring = 0;
  words.forEach((word) => {
    const sum = getWordScore(word);
    if (sum > highestScoring) {
      highestScoring = sum;
      highestScoringWord = word;
    }
  });
  return highestScoringWord;
}
