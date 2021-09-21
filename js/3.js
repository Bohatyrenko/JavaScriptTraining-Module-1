// const fn = function (value) {
//   if (value < 10) {
//     return "Value меньше 10";
//   }
//   const result = value + 45;
//   return result;
// };

// console.log(fn(5));
// console.log(fn(100));
// console.log(fn(10));

// const value = "rty";

// const fnB = function (values) {
//   for (const value of values) {
//     console.log(values);
//   }
// };

// fnB([300, 45, 67, 46, 69]);

// const f = [1, 3, 4, 5, 6, 7];

// const find = function () {
//   const logins = [
//     "trsddfsf",
//     "sfdsgsb",
//     "sdfafafagg",
//     "czxvbwwtrb",
//     "faqertqgfvxcb4tg",
//     "asdfxbvxbgng",
//   ];
// };

// const logins = [
//   "trsddfsf",
//   "sfdsgsb",
//   "sdfafafagg",
//   "czxvbwwtrb",
//   "faqertqgfvxcb4tg",
//   "asdfxbvxbgng",
// ];
// const correctLogin = "sdfafafagg";

// const loginToFind = function (a, b) {
//   // console.log(a);
//   console.log(logins);
//   return b;
// };
// console.log(logins);
// console.log(loginToFind(logins, correctLogin));

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;

//     case "Chile":
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;

//     case "Australia":
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;

//     case "Jamaica":
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// getSubstring("Hello world", 3);
// getSubstring("Hello world", 5);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 0);

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normalizeMessage = message.toLowerCase();
//   result = normalizeMessage.includes("spam" || "sale");
//   // Change code above this line
//   console.log(normalizeMessage);
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// function XO(str) {
//   const a = 3;
//   const b = 3;
//   const c = a === b; // true or false
//   return c;
// }

// console.log(XO());

// function nbYear(p0, percent, aug, p) {
//   // your code
// }

// console.log(nbYear(1500, 5, 100, 5000), 15);
// console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
// console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

// function a(arr1, arr2) {
// return arr1.sort().toString() === arr2.sort().toString();
// if (arr1.length !== arr2.length) return false;
// arr1.sort();
// arr2.sort();
// for (let i = 0; i < arr1.length; i += 1) {
//   if (arr1[i] !== arr2[i]) return false;
// }
// return true;
//   console.log("arr1JSON", JSON.stringify(arr1.sort()));
//   console.log("arr2JSON", JSON.stringify(arr2.sort()));

//   return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
// }

// const arr1 = [2, 1, 2, 3, 4];
// const arr2 = [2, 1, 2, 4, 3];
// const arr3 = [2, 1, 2, 3, 4];
// const arr4 = [2, 1, 2, 4, 3];
// console.log(a(arr1, arr2));
// function arraySum(arr) {
//   const arr1 = arr.toString().split(",");
//   let total = 0;

//   for (const el of arr1) {
//     total += Number.isNaN(+el) ? 0 : +el;
//   }
//   return total;
// }

// console.log(arraySum([1, 2, [3, [4, 5]], [6, 7], 8, [9, [10]]]));

// const inputName = "color";
// const inputValue = "tomato";

// const colorPicker = {
//   [inputName]: inputValue,
// };

// console.log(colorPicker);

const playlist = {
  name: "Name",
  age: 13,
  tracks: [1, 2, 3],
  trackCount: 10,
  changename(newName) {
    this.name = newName;
  },
  changeAge(age) {
    console.log("befor", this.age);

    console.log("midle", this.age);

    this.age = age;

    console.log("after", this.age);
  },
  addTrack(track) {
    this.tracks.push(track);
    this.trackCount = this.tracks.length;
  },
};

playlist.addTrack("new Track");
console.log(playlist.tracks);
playlist.changename("Alex");
playlist.changeAge(209);

console.log(playlist.trackCount);
