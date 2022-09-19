// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:

let arrNum = [1, 4, 11, 2, 37, -4];

for (let i = 0; i < arrNum.length; i++) {
  for (let j = 0; j < arrNum.length; j++) {
    if ( i != j) {
    let diff = arrNum[i] + arrNum[j];
    if (diff === 0) {
      //console.log(`${arrNum[i]} - ${arrNum[j]} = ${diff} true`);
      console.log(true);
    } else {
      //console.log(`${arrNum[i]} - ${arrNum[j]} = ${diff} false`);
      console.log(false);
    }
}
  }
}
