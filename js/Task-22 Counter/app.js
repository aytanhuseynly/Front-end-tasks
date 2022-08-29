var counter = document.getElementById("digit");
var countertext = Number(counter.textContent);

const Increase = document.getElementById("Increase");
Increase.addEventListener("click", () => 
{
counter.textContent = countertext += 1;
if (counter.textContent>0) 
{
    counter.className="green";
}
    
});

const Decrease = document.getElementById("Decrease");
Decrease.addEventListener("click", () => 
{
counter.textContent = countertext -= 1;
if (counter.textContent<0) 
{
    counter.className="red";
}
});

const Reset = document.getElementById("Reset");
Reset.addEventListener("click", () =>
 {
    counter.textContent = 0;
    counter.className="black";
});
