"use strict";

//task_1
let array = "12345";
let result = array.split("");
let resultNumbers = result.map(Number);
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += resultNumbers[i];
}
console.log(sum);


//task_3
let array2 = [14, 150, "css", null, "javascript", 25];
let newresult = array2.map(function (value) {
  if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  }
  return null;
});
console.log(newresult);

//task_4
let info = "Good day";
let newResult2 = info.slice(5, 8);
console.log(newResult2);

//task_5
let newFunction = (x) => x.length;
let funcTest = "what a good day";
let result3 = newFunction(funcTest);
console.log(result3);


//task_7
let link = "https://google.com";
if (link.includes("https://")) {
  console.log("კი,მოიცავს");
} else {
  console.log("არ მოიცავს");
}


//task_8
let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawberry");
console.log(fruits);


//task_9
let newarray = [5, 25, 89, 120, 36];
newarray.push("javaScript", "Python");
newarray.unshift("html", "css");
console.log(newarray.length);
newarray.splice(0, 1);
newarray.splice(-1, 1);
let deleteElements = newarray.splice(0, 1).concat(newarray.splice(-1, 1));
console.log(deleteElements);


//task_10
let arrayFruits = ["ფორთოხალი", "ბანანი", "მსხალი"];
console.log(arrayFruits.length);
arrayFruits.push("ვაშლი", "ანანასი");
arrayFruits.unshift("საზამთრო");
console.log(arrayFruits.length);
arrayFruits.splice(2, 0, "მანგო");
arrayFruits.splice(0, 1);
arrayFruits.splice(-1, 1);
console.log(arrayFruits.length);


//task_11
let array6 = [1, 2, 3, 4, 5];
array6.splice(3, 0, "a", "b", "c");
console.log(array6);


//task_12
let arr1 = [1, 2, 3, 4, 5];
let sum2 = 0;
arr1.forEach((elements) => (sum2 += elements));
console.log(sum2);


//task_13
let array7 = [12, 25, 3, 6, 8, 14, 7, 23];
let newresult1 = array7.map((item) => item / 3);
console.log(newresult1);


//task_14
let languages = ["html", "css", "javascript", "python", "php"];
let languageFilter = languages.filter((elements2) => elements2.length > 3);
console.log(languageFilter);


//task_16
let arr2 = [-1, -2, -3, 4];
let numberResults = (items) => items > 0;
console.log(arr2.some(numberResults));


//task_17
let array5 = [2, 15, 10, 24];
let lastResult = array5.splice(2, 1);
console.log(array5);



//ცოტა არეულად მიწერია რომელიც მემარტივა ჯერ ის გავაკეთე.2,6 და 15 ვერ გავაკეთე.