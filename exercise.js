// 1. normal ver
  // for (let i = 1; i <= 5; i++) {
  //   if ( i % 3 == 0 && i % 5 == 0) {
  //     console.log('fizzbuzz');
  //   } else if ( i % 3 == 0 ) {
  //     console.log('fizz');
  //   } else if ( i % 5 == 0) {
  //     console.log('buzz');
  //   } else {
  //     console.log(i);
  //   }
  // }

  // 2. Biggest Number
  // var a = 10;
  // var b = 20;
  // var c = 30;

  // if( a > b && a > c) { 
  //   console.log(a);
  // } else if (b > a && b > c) {
  //   console.log(b);
  // } else {
  //   console.log(c);
  // }

  // 3. Word Position

  var word = "dolphin";
  var sentence = "Where did Jane get the dolphin from, John?";
  
  console.log(sentence.split(''));
console.log(sentence.split('').lastIndexOf('n',-3));
  
var indexOfD = sentence.indexOf(word);
console.log();
// 1. 첫번째 방법
var indexOfN = sentence.split('').lastIndexOf(word[word.length-1], -3);

console.log(indexOfD, indexOfN);

// 2. 2번째 방법
var indexOfD = sentence.indexOf(word);
console.log(word.length-1);
var indexOfN = indexOfD + word.length - 1

console.log(indexOfD, indexOfN);


