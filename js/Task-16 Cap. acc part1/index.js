let randomNum = parseInt(Math.random() * 10 + 1);
let userNum= Number(prompt('Enter number: '));
let guess = 1;

//check nums equality
while (userNum !== randomNum) {
    userNum= Number(prompt('Enter number: '));
    guess++;
}
//Connection guess with acc money
if (guess === 1) {
    alert("You won 1000 azn!");
}
else if (2 <= guess && guess < 6) {
    alert("You won 750 azn!");
}
else if (6 <= guess && guess < 10) {
    alert("You won 750 azn!");
}
else if (guess => 10) {
    alert("You lost 250 azn!");
}
