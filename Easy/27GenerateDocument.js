function generateDocument(characters, document) {
  // Write your code here.
  let characterCounts = {};
  for (let character of characters) {
    if (!characterCounts.hasOwnProperty(character)) {
      characterCounts[character] = 0;
    }
    characterCounts[character] += 1;
  }
  for (let character of document) {
    if (
      !characterCounts.hasOwnProperty(character) ||
      characterCounts[character] == 0
    ) {
      return false;
    }
    characterCounts[character] -= 1;
  }
  return true;
}

console.log("====================================");
console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
console.log("====================================");
