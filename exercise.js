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
  var a = 10;
  var b = 20;
  var c = 30;
// a>b>c a>c>b / b>a>c b>c>a / c>a>b c>b>a
function maxNum() {
  if( a > b && a > c) { 
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
console.log(maxNum());
