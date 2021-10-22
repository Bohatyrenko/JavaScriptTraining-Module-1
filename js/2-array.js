// const arr = ["Alex", "Vera", "Maksim"];
// arr[0] = "Alexej";
// arr[arr.length] = "Asol";
// arr.push("Dynamo");
// arr.length = 7;
// console.log(arr);

//Цикл for
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Logging clients: ", clients[i]);
// }

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }
// console.log("numbers: ", numbers); // ['label-0', 'label-1', 'label-2']

//Цикл for...of
//for (const variable of iterable) {
// statement
// }

// // Итерация по массиву
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
// }
// console.log(message);

// const colors = ["red", "green", "blue"];

// // Следующая операция помещает один новый элемент перед вторым элементом.
// colors.splice(2, 0, "purple");

// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
// console.log(colors); // ["red", "green", "purple", "blue"]

// // Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
// colors.splice(1, 0, "yellow", "pink");
// console.log(colors);

// const a = [1, 2, 3, 4, 5];
// let result = 0;
// for (const number of a) {
//   result += number;
// }

// console.log(result);

// 1. Перебрать массив
// 2. объявить переменную total
// 3. выбрать все четные числа
// 4. сложить все четные числа
// const numbers = [123, 1, 43, 12, 65, 48, 76, 54, 345, 32, 89, 34];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// console.log(total);

// const logins = [
//   "trsddfsf",
//   "sfdsgsb",
//   "sdfafafagg",
//   "czxvbwwtrb",
//   "faqertqgfvxcb4tg",
//   "asdfxbvxbgng",
// ];
// const correctLogin = "sdfafafagg";
// let message = "This login is not correct";

// for (let i = 0; i < logins.length; i += 1) {
//   //   console.log(logins[i]);
//   if (logins[i] === correctLogin) {
//     message = `${logins[i]} - This login is correct`;
//     break;
//     // console.log(message);
//   }
// }

// console.log(message);

// for (const login of logins) {
//   if (login === correctLogin) {
//     message = `${login} - This login is correct`;
//     break;
//   }
// }

// console.log(message);

// Нахождение самого маленького числа
// const array = [45, 34, 26, 74, 56, 96, 23, 46];

// let min = array[0];

// for (const number of array) {
//   if (number < min) {
//     min = number;
//   }
// }

// console.log(min);

// Нахождение самого большого числа
// const array = [45, 34, 26, 74, 56, 96, 23, 46];

// let max = array[0];

// for (const number of array) {
//   if (number > max) {
//     max = number;
//   }
// }

// console.log(max);

//Использование метода join
// const friends = ["Alex", "Frenk", "Olvin", "Stive"];
// const allFriends = friends.join(", ");
// console.log(allFriends);

// for (const friend of friends) {
//   allFriends += friend;
//   console.log(allFriends);
// }

// const string = "JavaScript";
// let letters = "";

// // const array = string.split("");
// // console.log(string);
// for (let letter of string) {
//   letters +=
//     letter === letter.toUpperCase()
//       ? letter.toLowerCase()
//       : letter.toUpperCase();
// }

// console.log(letters);

// const array = ["sTriNg", "iS", "mAnY", "LetTers"];

// const string = array.join(" ").toLowerCase().toUpperCase();

// console.log(string);
// // console.log(array);
// for (const letter of string) {
//   // console.log(letter);
// }

// const title =
//   "A selection of powerful news photographs taken around the world this week";

// const normalize = title.toLowerCase().split(" ").join("-");

// console.log(normalize);

// const array1 = [32, 43, 21, 57, 43];
// const array2 = [78, 32, 95, 74];
// const array3 = [65, 2, 46, 23];
// let total = 0;

// const allArray = array1.concat(array2, array3);
// for (const number of allArray) {
//   total += number;
// }

// console.log(total);

// привести все в нижний региср
// разбить в массив через метою split
// соединить методом join с разделителем тире

// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-");
// }

// console.log(slugify("Arrays for begginers"));

function makeArray(firstArray, secondArray, maxLength) {
  let allArray = firstArray.concat(secondArray);

  if (allArray.length > maxLength) {
    allArray = allArray.slice(0, maxLength);
  }
  return allArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
