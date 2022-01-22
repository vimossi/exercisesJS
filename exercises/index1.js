
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  return str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]
}
console.log(reverseString("oi"));








// Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
// ["o", "l", "l", "e", "h"]




// Resolve
function solution(str){
  return str.split("").reverse().join("");
}
console.log(solution("oi"))
