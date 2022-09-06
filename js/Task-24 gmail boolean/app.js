const checkGmail = (gmail) => 
{
if(!gmail.endsWith('@gmail.com') || gmail.length < 15)
{
return false;
}
return true;
}

console.log(checkGmail('aytan@gmail.com'));
console.log(checkGmail('ayt@gmail.com'));