//Примеры переменных
// const BASE_URL = "https//gornot.com/start_page/";
// const numberSimple = 22;
// const stringSimple = "string";

// const b = 10;
// let a = b * 2;
// console.log("решение уравнения - ", a);

// b = 10;
// a = b * 2;
// console.log("решение уравнения без переменных - ", a);

//Пример массива
// const t = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log('массив - ', t);

//Применение свойства 'length'
// const c = "It is const c";
// const o = c.length;
// console.log(o);

// const d = c.length;
// console.log("Длинна переменной с - ", d);

//Применение метода 'toUpperCase()'.
// const f = c.toUpperCase();
// console.log(
//   "Применения метода toUpperCase() - делает все буквы заглавными: ",
//   f
// );

// const yearOfBirth = 2006;
// console.log(yearOfBirth);

//Оператор typeof

// undefined
// let a;
// console.log(typeof a); // "undefined"

// null
// const b = null;
// console.log(typeof null); // "object"

// Number
// const c = 5;
// console.log(typeof c); // "number"

// String
// const d = 'JavaScript is awesome!';
// console.log(typeof d); // "string"

// Boolean
// const e = false;
// console.log(typeof e); // "boolean"

//Примеры вывода в консоль или в модальное окно
// const message = "Вам есть 18 лет?";
// alert(message);
// console.log(message);

// confirm - выводит модальное окно с сообщением, и 2 кнопки, Ok и Cancel. При нажатии на Ok, на место вызова функции возвращается true, при нажатии на Cancel возвращается false.
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// prompt - выводит модальное окно с полем ввода и кнопками Ok и Cancel. При Ok возвращает то, что было введено в поле ввода, при Cancel возвращает null.
// const hotelName = prompt("Please enter desired hotel name:");
// console.log(hotelName);

//Приведение к числу
// const a = "5";
// console.log(a);
// console.log(typeof a);
// const b = Number(a);
// console.log(b);
// console.log(typeof b);

//Number.parseInt() - для отображения только целых чисел и Number.parseFloat() - для отображения только дробных чисел
// const a = prompt("Сколько Вам лет?");
// console.log(a);
// const b = Number.parseInt(a);
// console.log(b);

// Проверка на число Number.isNaN(val)
// const a = 5;
// const b = "ytr";
// const c = Number.isNaN(a);
// console.log(c);
// const d = Number.isNaN(b);
// console.log(d);

// const a = ["Jon", "Jenifer", "Tom", 5, 7];
// const b = "Hello, it is JavaScript";
// console.log(a.indexOf("Tom")); //indexOf() вернет позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено
// console.log(b.indexOf("S"));
// console.log(a.includes("Jon")); //includes() - один из наиболее часто используемых методов, в большинстве случаев заменяет indexOf, проверяет входит ли подстрока в строку, возвращает true или false
// console.log(b.includes("JavaScript"));

//Шаблонныые строки
// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// const message =
//   'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';

// console.log(message); // My name is Mango, I'm 2 years old and happy.

/*
 * Составлять строки с подставляемыми значениями
 * используя конкатенацию очень неудобно.
 * На помощь приходят шаблонные строки и интерполяция.
 */
// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// В интерполяции можно использовать любое валидное выражение
// console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.

// Инструкция if
// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }
// console.log(cost); // 100

// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// }
// console.log(cost); // 0

// Инструкция if...else
// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 0

// let cost;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 100

// Инструкция else...if
// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

//Тернарный оператор
//{условие} ? {выражение если условие правдиво} : {выражение если условие не правдиво}
// let cost;

//Инструкция switch (аналог else...if)
// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

// Цикл while - Инструкция while создает цикл, который выполняет блок кода, пока условие проверки оценивается как true
//делаем счетчик
// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }

//Цикл do...while
// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// Цикл for
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Инструкции break и continue
//break
// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log("Дошли до 5-й итерации, прерываем цикл!");
//     break;
//   }
// }
//continue
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

//Возведение в степень - Math.pow
// const q = Math.pow(2, 3); // аналогичная запись - const q = 2 ** 3;
// console.log(q);

// const base = Number(prompt("Введите число!"));
// console.log("число", base);

// const degree = Number(prompt("Введите степень!"));
// console.log("степень", degree);

// const result = base ** degree;
// console.log(
//   `Результат возведение числа - ${base} в степень - ${degree} равен ${result}`
// );

// Генерация чисел от min до max
const min = 10;
const max = 100;
const result = Math.random() * (max - min) + min;
console.log(Number.parseInt(result));
