// const menu = {};

// menu.firstBets = [];
// menu.meatDishes = [];
// menu.sideDishes = [];
// menu.desserts = [];
// console.log(menu);

// function getExtremeElements(array) {
//   // Change code below this line
//   const newArray = [];
//   newArray.push(array[0], array[array.length - 1]);
//   return newArray;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(5));
// console.log(calculateTotal(7));
// console.log(calculateTotal(9));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i <= order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   const arrayWords = string.split(" ");
//   let maxLengthWord = arrayWords[0];
//   for (const el of arrayWords) {
//     if (el.length > maxLengthWord.length) {
//       maxLengthWord = el;
//     }
//   }
//   return maxLengthWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));

// function filterArray(numbers, value) {
//   const newArray = [];

//   for (const el of numbers) {
//     if (el > value) {
//       newArray.push(el);
//     }
//   }

//   for (let i = 0; i < numbers.length; i += 1) {
//     const element = numbers[i];
//     if (element > value) {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (const el of array1) {
//     if (array2.includes(el)) {
//       newArray.push(el);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

function includes(array, value) {
  // Change code below this line
  for (const el of array) {
    if (el === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 8));
