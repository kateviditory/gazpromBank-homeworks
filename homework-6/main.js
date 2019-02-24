function getSevenCol(array) {
  let str = array.join();
  let matches = str.match(/7/g);
  if (matches) return matches.length;
  return 0;
}
console.log(getSevenCol([1, 7, 4, 77, 73]));

function arrToStr(array) {
  let result = array.reduce(function(str, current, index) {
    return str + current + array[array.length - index - 1];
  }, "");
  if (result) return result.substr(0, array.length);
  return "Входной массив пуст";
}

// более длинное решение с использованием рекурсии
// let result = "";
// function arrToStr(array) {
//   if (array.length > 1) result += array[0] + array[array.length - 1];
//   else result += array[0];
//   if (array.length > 2) {
//     array.shift();
//     array.pop();
//     arrToStr(array);
//   }
//   if (result) return result;
//   return "Входной массив пуст";
// }

console.log(arrToStr(["a", "b", "c", "d", "e", "f", "k"]));
