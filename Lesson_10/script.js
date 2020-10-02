// var arr = [];

// function myPush(value) {
//   this[this.length] = value;
//   console.log(this);
// }

// arr.myPush = myPush;

// arr.myPush(10);

var array = [1, 2, 3, 4, 5];

function myJoin(separator) {
  var str = "";
  for (var i = 0; i < this.length - 1; i++) {
    str += this[i] + separator;
  }

  str += this[this.length - 1];

  return str;
}

array.myJoin = myJoin;

console.log(array.myJoin("_"));

document.write(array.join("_"));
