
let calcBtn = document.getElementById("calcBtn");
let countInpt=document.getElementById("count");
let fruits=document.getElementById("fruits");


calcBtn.addEventListener("click", function() {


if (countInpt.value == "") {
  
    alert("input digit!");
  }
else{
    if(document.querySelector("." + fruits.value).innerHTML == "")
    {
        document.querySelector("." + fruits.value).innerHTML += "<li> <span>" + countInpt.value + " </span> " + fruits.value + "</li>";

    }
    else
    {
        document.querySelector("." + fruits.value + " span").textContent=+countInpt.value +Number(document.querySelector("." + fruits.value + " span").textContent);
    }
}
});

