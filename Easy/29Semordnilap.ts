function semordnilap(words) {
  // Write your code here.
  let wordSet = new Set(words);
  let semordnilapPairs: string[][] = [];
  //   let semordnilapPairs = [];

  for (let word of words) {
    let reversed = word.split("").reverse().join("");
    if (wordSet.has(reversed) && reversed != word) {
      semordnilapPairs.push([word, reversed]);
      wordSet.delete(word);
      wordSet.delete(reversed);
    }
  }
  return semordnilapPairs;
}

console.log("====================================");
console.log(semordnilap(["dog", "dog", "desserts", "god", "stressed"]));
console.log("====================================");
