'use strict'

const button = document.querySelector("button");
button.addEventListener('click', function onButtonClick() {
  alert('Warning');
  button.textContent = "뷁";
})

const changeDiv = document.querySelector(".bellmin");
changeDiv.textContent.toggle() = 'jongmin'