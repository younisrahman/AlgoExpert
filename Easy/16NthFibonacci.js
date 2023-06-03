function getNthFib(n) {
  // Write your code here.
  const prevTwo = [0, 1];
  for (let i = 3; i <= n; i++) {
    const nextFib = prevTwo[0] + prevTwo[1];
    prevTwo[0] = prevTwo[1];
    prevTwo[1] = nextFib;
  }

  return n > 1 ? prevTwo[1] : prevTwo[0];
}

//   # 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
console.log(getNthFib(20));
