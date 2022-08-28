const users=[
    {
        id:1, 
        username:`"The Notebook"`,
        img:'b.jpg',
        job:'Romantic-drama'
    },
    {
        id:2,
        username:'"Drunk"',
        img:'f.jpg',
        job:'Comedy-drama',
    },
    {
        id:3,
        username:'"Mid-90s"',
        img:'d.png',
        job:'Comedy-drama',
    },
    {
        id:4,
        username:'"Im not okay with this!"',
        img:'c.jpg',
        job:'Comedy-drama',
    },
    {
        id:5,
        username:'"Masculine & Feminine"',
        img:'a.jpg',
        job:'Romantic-drama',
    },
    {
        id:6,
        username:'"This is Sparta!"',
        img:'ali.jpg',
        job:'Action-thriller',
    },
    {
        id:7,
        username:'"Fight Club"',
        img:'ic.png',
        job:'Action-drama',
    },
    {
        id:8,
        username:'"La Planète Sauvage"',
        img:'dd.png',
        job:'Science-fiction',
    },
]
const root=document.getElementById('root')
users.forEach((userList) =>
{

const image = document.createElement("img");
image.src=userList.img;

const {id,username,job,img} = userList;

const block=document.createElement("div");
block.id=`block${userList.id}`;
block.className="block";

const h3=document.createElement("h3");
h3.textContent=userList.username;

const p=document.createElement("p");
p.textContent=userList.job;

block.append(h3, p, image);
root.append(block);


})



