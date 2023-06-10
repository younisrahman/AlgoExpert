function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] == string[j]) {
      i += 1;
      j -= 1;
    } else return false;
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
