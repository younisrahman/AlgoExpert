function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Sort the redShirtSpeeds array in descending order
  redShirtSpeeds.sort(function (a, b) {
    return b - a;
  });

  // If fastest is true, sort the blueShirtSpeeds array in ascending order
  // Otherwise, sort the blueShirtSpeeds array in descending order
  if (fastest) {
    blueShirtSpeeds.sort();
  } else {
    blueShirtSpeeds.sort(function (a, b) {
      return b - a;
    });
  }

  // Initialize a variable to store the total speed
  let totalSpeed = 0;

  // Iterate through the redShirtSpeeds and blueShirtSpeeds arrays
  // and add the maximum of the two speeds to the totalSpeed variable
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  // Return the totalSpeed variable
  return totalSpeed;
}

const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = true;

const totalSpeed = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);

console.log(totalSpeed); // 22
