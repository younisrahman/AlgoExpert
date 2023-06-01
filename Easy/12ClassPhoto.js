function classPhotos(redShirtHeights, blueShirtHeights) {
  // Sort the redShirtHeights and blueShirtHeights arrays in reverse order.
  redShirtHeights.sort(function (a, b) {
    return b - a;
  });
  blueShirtHeights.sort(function (a, b) {
    return b - a;
  });

  // Get the shirt color of the first row.
  const shirtColorFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  // Loop through the redShirtHeights and blueShirtHeights arrays and check if the heights are in decreasing order.
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];

    if (shirtColorFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) {
        return false;
      }
    } else {
      if (redShirtHeight <= blueShirtHeight) {
        return false;
      }
    }
  }

  // Return true if the heights are in decreasing order.
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
