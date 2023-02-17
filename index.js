//1
function myName(name, surname) {
  console.log("My name is " + name, surname);
}

myName("Dosbol", "Orozobekov");



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

function getpyatiygol(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(getpyatiygol(2, 3, 5, 2, 3));

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
  	console.log(i);
  }
}

for (let i = 0; i <= 15; i++) {
  if (i % 2 !== 0) {
  	console.log(i);
  }
}

//2
function printVolume(height, radius) {
  let result = height * radius;
  console.log("Обьем конуса равен - " + result);
}

printVolume(5, 5);

