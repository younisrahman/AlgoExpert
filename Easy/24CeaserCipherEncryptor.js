function caesarCipherEncryptor(string, key) {
  let newLetter = [];
  let newKey = key % 26;
  for (let i = 0; i < string.length; i++) {
    newLetter.push(getNewLetter(string[i], newKey));
  }
  return newLetter.join("");
}

function getNewLetter(letter, key) {
  let newLetterCode = letter.charCodeAt() + key;
  return String.fromCharCode(
    newLetterCode <= 122 ? newLetterCode : 96 + (newLetterCode % 122)
  );
}

console.log(caesarCipherEncryptor("xyz", 2));
