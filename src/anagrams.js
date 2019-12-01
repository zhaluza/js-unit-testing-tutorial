// function accepts two strings
// tells whether the strings are anagrams of one another
export const isAnagram = (str1, str2) => {
  if (!str1 || !str2) {
    return false;
  }
  const str1Arr = str1
    .toLowerCase()
    .split('')
    .sort();
  const str2Arr = str2
    .toLowerCase()
    .split('')
    .sort();

  let str1Obj = {};
  let str2Obj = {};

  str1Arr.forEach(letter => {
    str1Obj[letter] ? (str1Obj[letter] += 1) : (str1Obj[letter] = 1);
  });
  str2Arr.forEach(letter => {
    str2Obj[letter] ? (str2Obj[letter] += 1) : (str2Obj[letter] = 1);
  });
  if (str1Obj[' ']) {
    delete str1Obj[' '];
  }
  if (str2Obj[' ']) {
    delete str2Obj[' '];
  }
  if (JSON.stringify(str1Obj) === JSON.stringify(str2Obj)) {
    return true;
  } else return false;
};
