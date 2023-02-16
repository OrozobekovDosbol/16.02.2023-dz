function myName(name, surname) {
  console.log("My name is " + name, surname);
}

myName("Dosbol", "Orozobekov")

function number(num) {
  if (num % 2 === 0) {
    console.log(num + " - четное");
  }
  else if (num % 2 === 1) {
    console.log(num + " - нечетное");
  }
}

number(15)
number(2)