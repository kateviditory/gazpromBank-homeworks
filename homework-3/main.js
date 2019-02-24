// Задание 1
function printWindowValues() {
  for (let key in window) {
    console.log(window[key]);
  }
}
printWindowValues();

// Задание 2
function expTen(valueNumber) {
  let resultExp = 1;
  for (let i = 0; i < 10; i++) {
    resultExp *= valueNumber;
  }
  return resultExp;
}
console.log(expTen(7));

//Задание 3

function getFuncRes(func, value) {
  return func(value);
}
getFuncRes(console.log, "Hello World");
