

var num1 = Math.random();
num1 = num1 * 6;
num1 = Math.floor(num1) + 1;

var num2 = Math.random();
num2 = num2 * 6;
num2 = Math.floor(num2) + 1;

var playerOne = document.querySelectorAll("img")[0].src = "images/dice" +num1+ ".png";
var playerTwo = document.querySelectorAll("img")[1].src = "images/dice" +num2+ ".png";

if(num1>num2){
    document.querySelectorAll("h1")[0].innerHTML = "<em>Player1 Wins!!</em>";
}   
else if(num2>num1){
    document.querySelectorAll("h1")[0].innerHTML = "<em>Player2 Wins!!</em>";
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "<em>Tie!!</em>";
}