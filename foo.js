var seoul = ['Hwang', 'Kim', 'Lee', 'Park', 'Joo'];

function searchKim(seoul, element) {
  for (let i = 0; i < seoul.length; i++) {
    var element = seoul[i];
  }
  if (1 <= seoul.length <= 1000 && 1 <= element.length <= 20) {
    element.some()
  }
}

console.log(searchKim(seoul, 'Kim'));
