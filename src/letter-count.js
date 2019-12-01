export const getLetterCount = string => {
  const letters = string.split('');
  let letterCount = {};
  letters.forEach(letter => {
    letterCount[letter]
      ? (letterCount[letter] += 1)
      : (letterCount[letter] = 1);
  });
  return letterCount;
};
