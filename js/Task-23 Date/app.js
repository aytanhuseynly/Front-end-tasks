
//getmonth
let yearmonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let m = new Date();
let month =yearmonths[m.getMonth()];
alert(`This month is: ${month}`);

//getday
let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = new Date();
let day = weekdays[today.getDay()];
alert(`This weekday is: ${day}`);

//age
let age=(prompt(`Enter your age: `));
let maxage=77;
let result=maxage-age;
alert(`Hey bro! You have ${result} years left to live :(`);