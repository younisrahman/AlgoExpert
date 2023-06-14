function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let characterFrequencies = {};
  for (let i of string) {
    if (!characterFrequencies.hasOwnProperty(i)) characterFrequencies[i] = 0;
    characterFrequencies[i] += 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (characterFrequencies[string[i]] == 1) return i;
  }
  return -1;
}

console.log("====================================");
console.log(firstNonRepeatingCharacter("abcdcaf"));
console.log("====================================");
