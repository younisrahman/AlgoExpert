function runLengthEncoding(string) {
  let encodedStringCharacter = [];
  let currentRunLength = 1;
  for (let i = 1; i < string.length; i++) {
    currentCharacter = string[i];
    previousCharacter = string[i - 1];
    if (previousCharacter != currentCharacter || currentRunLength == 9) {
      encodedStringCharacter.push(currentRunLength.toString());
      encodedStringCharacter.push(previousCharacter);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encodedStringCharacter.push(currentRunLength.toString());
  encodedStringCharacter.push(string[string.length - 1]);
  return encodedStringCharacter.join("");
}

console.log(runLengthEncoding("aaaaaaaaaaaaabbbccddd"));
