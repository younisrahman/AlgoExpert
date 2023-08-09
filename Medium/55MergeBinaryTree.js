// // This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// exports.BinaryTree = BinaryTree;

// function mergeBinaryTrees(tree1, tree2) {
//   if (tree1 == null) {
//     return tree2;
//   }
//   if (tree2 == null) {
//     return tree1;
//   }
//   tree1.value += tree2.value;
//   tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
//   tree1.right = mergeBinaryTrees(tree1.right, tree2.right);

//   return tree1;
// }

// // Do not edit the line below.
// exports.mergeBinaryTrees = mergeBinaryTrees;

// This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// exports.BinaryTree = BinaryTree;

// function mergeBinaryTrees(tree1, tree2) {
//   if (tree1 == null) {
//     return tree2;
//   }
//   let tre1Stack = [tree1];
//   let tre2Stack = [tree2];
//   while (tre1Stack.length > 0) {
//     let tre1Node = tre1Stack.pop();
//     let tre2Node = tre2Stack.pop();

//     if (tre2Node == null) {
//       continue;
//     }

//     tre1Node.value += tre2Node.value;

//     if (tre1Node.left == null) {
//       tre1Node.left = tre2Node.left;
//     } else {
//       tre1Stack.push(tre1Node.left);
//       tre2Stack.push(tre2Node.left);
//     }

//     if (tre1Node.right == null) {
//       tre1Node.right = tre2Node.right;
//     } else {
//       tre1Stack.push(tre1Node.right);
//       tre2Stack.push(tre2Node.right);
//     }
//   }

//   return tree1;
// }

// // Do not edit the line below.
// exports.mergeBinaryTrees = mergeBinaryTrees;
// console.log(factorial(13));

// function factorial(number) {
//   let result = 1;
//   for (let i = number; i > 0; i--) {
//     console.log("======new value========");
//     console.log({ result });
//     console.log({ i });
//     result *= i;
//     console.log({ result });
//   }

//   return result;
// }

function years(array) {
  let leapYear = [];

  console.log("array of leap years :", leapYear);

  let normalYear = [];

  console.log("array of normal years :", normalYear);

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value % 4 == 0) {
      console.log(value, "this is leap year");
      leapYear.push(value);
    } else {
      console.log(value, "this is not a leap year");
      normalYear.push(value);
    }
  }
  return { array, normalYear, leapYear };
}

let x = [2023, 2024, 2025, 2028, 2030];
let result = years(x);
console.log(result);
