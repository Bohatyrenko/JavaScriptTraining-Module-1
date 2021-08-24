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

const logins = [
  "trsddfsf",
  "sfdsgsb",
  "sdfafafagg",
  "czxvbwwtrb",
  "faqertqgfvxcb4tg",
  "asdfxbvxbgng",
];
const correctLogin = "sdfafafagg";
let message = "This login is not correct";

// for (let i = 0; i < logins.length; i += 1) {
//   //   console.log(logins[i]);
//   if (logins[i] === correctLogin) {
//     message = `${logins[i]} - This login is correct`;
//     break;
//     // console.log(message);
//   }
// }

// console.log(message);

for (const login of logins) {
  if (login === correctLogin) {
    message = `${login} - This login is correct`;
    break;
  }
}

console.log(message);
