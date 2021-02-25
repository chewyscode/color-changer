//Declare global variables

const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'orange', 'yellow', 'blue', '#f10f1f', 'purple', "rgba(13,152,180)"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');
//getting a random number
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
// get random number between 0-3
const randomNumber = getRandomNumber();
console.log(getRandomNumber)

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});