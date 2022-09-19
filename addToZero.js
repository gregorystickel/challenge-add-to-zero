// Starting array
let array = [0, 1, 2, 3, 4, 5];

// Write your solution below:
// Find if any two numbers add to 0

let result = false;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i != j) {
      let diff = array[i] + array[j];
      if (diff === 0) {
        result = true;
      }
    }
  }
}
console.log(result);
