// function test() {
//   console.log(arguments);
//   count = 1;

//   for (i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//     count *= arguments[i];
//   }
//   console.log(count);
// }

// test(10, 2, 7, 3);

function getCentralElements() {
  centralArray = [];
  for (i = 0; i < arguments.length; i++) {
    cutItems = getCutElements(arguments[i]);
    centralArray = centralArray.concat(cutItems);
  }

  return centralArray;
}

function getCutElements(item) {
  count = item.length % 2 == 0 ? 2 : 1;
  position = Math.ceil(item.length / 2) - 1;
  return item.splice(position, count);
}

console.log(getCentralElements([1, 2, 3, 4, 5], [2, 3, 4, 5], [7, 8, 9]));
