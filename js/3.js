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

const f = [1, 3, 4, 5, 6, 7];

const find = function () {
  const logins = [
    "trsddfsf",
    "sfdsgsb",
    "sdfafafagg",
    "czxvbwwtrb",
    "faqertqgfvxcb4tg",
    "asdfxbvxbgng",
  ];
};

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

function XO(str) {
  const a = 3;
  const b = 3;
  const c = a === b; // true or false
  return c;
}

console.log(XO());
