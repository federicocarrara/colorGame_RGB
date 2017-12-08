var squareNum = 6;
var colors = genereteRandomColors(squareNum);
var colorToGuess = pickColor(squareNum);
var squares = document.querySelectorAll(".square");
var colorToGuessDisplay = document.querySelector("#colorToGuess");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var newColBtn = document.querySelector('#newColBtn');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var selected = document.querySelector('.selected');
var hardSquares = document.getElementsByClassName('hardSquare');
var difficulty = document.getElementsByClassName('difficulty');

colorToGuessDisplay.textContent = colorToGuess;

for (var i = 0; i < colors.length; i++){
 squares[i].style.backgroundColor = colors[i];
 squares[i].addEventListener('click', function(){
   var clickedColor = this.style.backgroundColor;
   if (clickedColor === colorToGuess){
    changeColor(clickedColor);
    h1.style.backgroundColor = colorToGuess;
    selected = document.querySelector('.selected');
    selected.style.backgroundColor = colorToGuess;
   }
   else {
    this.style.backgroundColor = "rgb(255, 255, 255)";
   }
 });
}

newColBtn.addEventListener('click', function(){
  reset();
});

easyBtn.addEventListener('click', function(){
  squareNum = 3;
  reset();
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  for (var i = 0; i < colors.length; i++){
   hardSquares[i].style.backgroundColor = 'white';
  }
});

hardBtn.addEventListener('click', function(){
  squareNum = 6;
  reset();
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
});

function reset(){
  h1.style.backgroundColor = "#87ceeb";
  colors = genereteRandomColors(squareNum);
  colorToGuess = pickColor(squareNum);
  colorToGuessDisplay.textContent = colorToGuess;
  for (var i = 0; i < 2; i++){
   difficulty[i].removeAttribute('style')
  }
  for (var i = 0; i < colors.length; i++){
   squares[i].style.backgroundColor = colors[i];
  }
}

function genereteRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
function pickColor(num){
  var ranNumb = Math.floor(Math.random() * num);
  return colors[ranNumb];
}
function changeColor(color){
  for (var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
}
