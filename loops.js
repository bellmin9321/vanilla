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

// 4. 재귀를 사용하여 문자열 반전

function rever(str) {
  if (str === "") {
    return "";
  } else {
    return rever(str.substr(1)) + str.charAt(0);
  }
}

let reverseStringIs = rever("bellmin")
console.log(reverseStringIs);

console.log('2번째 퀴즈');
var longText = "0i1a2m3k4e5n"

for (let i = 0; i < longText.length; i = i+2) {

  console.log(longText[i].split("").join());
  
}
