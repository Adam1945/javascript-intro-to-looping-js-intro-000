// function forLoop(array) {
//   array = [];
//   for(var i = 0; i < 25; i++) {
//
//   }
//
// }

function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop();
  }
  while(array.length > 0 || maybeTrue());
  return array;
}
