let x=Number(prompt('Enter number: '));
let count=1;
y = parseInt(Math.random() * 10 + 1);

while (x !== y)
{
 x=Number(prompt('Wrong! Enter number again: '));
count++
    
}
if (x == y)
{
alert("Bravo! for " + count + " times you found the number.");
alert("Congrats! 1000 AZN has been transferred to your Capital bank account!")
}


