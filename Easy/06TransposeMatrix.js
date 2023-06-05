function transposeMatrix(matrix) {
  // Create a new array to store the transposed matrix.
  let transposedMatrix = [];

  // Iterate over the columns of the original matrix.
  for (let col = 0; col < matrix[0].length; col++) {
    // Create a new row to store the elements of the current column.
    let newRow = [];

    // Iterate over the rows of the original matrix.
    for (let row = 0; row < matrix.length; row++) {
      // Add the element at the current row and column to the new row.
      newRow.push(matrix[row][col]);
    }

    // Add the new row to the transposed matrix.
    transposedMatrix.push(newRow);
  }

  // Return the transposed matrix.
  return transposedMatrix;
}
