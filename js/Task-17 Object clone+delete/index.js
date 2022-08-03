let user = 
{
    name: "Aytan", 
    surname:"Huseynova",
    country:"Azerbaijan",
    age: 21, 
    height: 160,
    weight: 49,
 };

let clone = {};
user.weight=48;
user.height=162;
delete user.height;

for (let property in user) 
{
   clone[property] = user[property];

    alert(clone[property]);
}
