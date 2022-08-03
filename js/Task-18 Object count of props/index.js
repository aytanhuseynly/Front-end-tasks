let user = 
{
    name: "Aytan", 
    surname:"Huseynova",
    country:"Azerbaijan",
    age: 21, 
    height: 160,
    weight: 49,
    hobby: "design"
 };

 let count = 0;

 for(let properties in user)
 {
 alert(user[properties]);
 count++;
 }
 
 alert("Count of properties is " + count);
