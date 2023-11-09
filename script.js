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

//task_2
let array1 = ["hello1", 14, 24, "hello2"];
let newArray1 = array1.filter((item) => typeof item == "number");
console.log(newArray1);

//task_3
let array2 = [14, 150, "css", null, "javascript", 25];
let newArray2 = array2.map((item) => {
  if (typeof item == "number") {
    return item * item;
  } else if (typeof item == "string") {
    return item.toUpperCase();
  }
  return item;
});
console.log(newArray2);

//task_4
let info = "Good day";
let newResult2 = info.slice(5, 8);
console.log(newResult2);

//task_5
let newFunction = (x) => x.length;
let funcTest = "what a good day";
let result3 = newFunction(funcTest);
console.log(result3);

//task_6
let userAnswer = prompt("Capital Of georgia");
let correct = "tbilisi";
let lowercasdAnswer = userAnswer.toLowerCase();
if (lowercasdAnswer == correct) {
  console.log("სწორია");
} else {
  console.log("arasworia");
}

//task_7
let link = "https://google.com";
function http(element) {
  let item = element.indexOf("google");
  if (item == -1) {
    console.log("arasworia");
  } else {
    console.log("sworia");
  }
}
http(link);

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
let result1 = array7.map((item) => item / 3);
console.log(result1);

//task_14
let languages = ["html", "css", "javascript", "python", "php"];
let languageFilter = languages.filter((elements2) => elements2.length > 3);
console.log(languageFilter);

//task_15
let words = ["Madrid", "Rome", "Milan", "Berlin"];
let newresult = words.filter((item) => {
  if (item.toLowerCase().includes("m")) {
    return true;
  }
  return false;
});
let result2 = words.filter((item) => item.toLowerCase().includes("m"));
console.log(result2);

//task_16
let arr2 = [-1, -2, -3, 4];
let numberResults = (items) => items > 0;
console.log(arr2.some(numberResults));

//task_17
let array5 = [2, 15, 10, 24];
let Result3 = array5.splice(2, 1);
console.log(array5);
