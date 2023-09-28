// O(nm) time | O(nm) space
function levenshteinDistance(str1, str2) {
  const edits = Array.from({ length: str2.length + 1 }, (_, y) =>
    Array.from({ length: str1.length + 1 }, (_, x) => (y === 0 ? x : 0))
  );

  for (let i = 1; i <= str2.length; i++) {
    edits[i][0] = edits[i - 1][0] + 1;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i][j - 1], edits[i - 1][j]);
      }
    }
  }

  return edits[str2.length][str1.length];
}
