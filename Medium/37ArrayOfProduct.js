function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
  const leftProducts = new Array(array.length).fill(1);
  const rightProducts = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
}
