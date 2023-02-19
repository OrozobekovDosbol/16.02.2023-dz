//1
function myName(name, surname) {
  console.log("My name is " + name, surname);
}

myName("Dosbol", "Orozobekov");

//3
function getLength(str) {
  console.log("длинна строки равна - "  + str.length);
}
getLength("Dosbol");

//4
function number(num) {
  if (num % 2 === 0) {
    console.log(num + " - четное");
  }
  else if (num % 2 === 1) {
    console.log(num + " - нечетное");
  }
}

number(15);
number(2);

//5
function kvadrat(a) {
  return a * a;
}

console.log(kvadrat(6));
console.log(kvadrat(4));


//7
function getpyatiygol(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(getpyatiygol(2, 3, 5, 2, 3));


//12
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
  	console.log(i);
  }
}


//13
for (let i = 0; i <= 15; i++) {
  if (i % 2 !== 0) {
  	console.log(i);
  }
}

//2
function printVolume(height, radius) {
  let result = 1 / 3 * 3.14 * radius * radius * height;
  console.log("Обьем конуса равен - " + result);
}

printVolume(20, 5);

//8
for (let i = 0; i <= 33; i++) {
  if (i % 3 === 0) console.log(i);
}


//9
let total = 8;
for (let i = 1; i <= 7; i++) {
  total = total * i;
}
console.log("факториал числа 8 равняется " + total);

//14
let str = ["dog", "dog"];
str.push("cat", "cat", "cat");
console.log(str);

//19
let sayHello = ["Dosbol", "Ermek", "Sanat"];
for (let i = 0; i < sayHello.length; i++) {
  console.log("Hello - " + sayHello[i]);
}

//18
let numss = ["one", "two", "three"];
console.log(numss.reverse());