var name = "bellmin"

// 1. reverse 함수 사용
console.log(name.split("").reverse());


// 2. for loop
let reverse = '';

for (let i = 0; i < name.length; i++) {
  reverse = name.split("")[i]
}
console.log('-------------------');
console.log(reverse);
console.log('-------------------');
// 3. function 이용

function rev(str) {
  return str.split("").reverse().join("");
}

var bell = rev("bellmin")
for (let i = 0; i < bell.length; i++) {
  console.log(bell[i]);
}