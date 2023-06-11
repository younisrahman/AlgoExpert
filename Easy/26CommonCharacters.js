function commonCharacters(strings) {
  // Create a character count dictionary.
  const characterCounts = {};
  for (const string of strings) {
    // Get the unique characters in the string.
    const uniqueStringCharacters = new Set(string);
    // Increment the count for each character in the string.
    for (const character of uniqueStringCharacters) {
      if (!characterCounts.has(character)) {
        characterCounts[character] = 0;
      }
      characterCounts[character]++;
    }
  }

  // Create a list of common characters.
  const finalCharacters = [];
  for (const [character, count] of Object.entries(characterCounts)) {
    if (count === strings.length) {
      finalCharacters.push(character);
    }
  }

  // Return the list of common characters.
  return finalCharacters;
}

// Test the function.
const strings = ["abc", "bdcfd", "bdfgdfcdf"];
const commonCharacter = commonCharacters(strings);
console.log(commonCharacter); // ["c", "b"]
