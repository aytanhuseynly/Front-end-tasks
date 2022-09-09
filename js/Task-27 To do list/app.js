function myFunction() {
document.querySelector('#add')
{
   document.querySelector('#addedlist').innerHTML += `
            <div class="added">
            <span id="addedname">${document.querySelector('#list input').value} </span>
            <button class="delete"> <i class="glyphicon glyphicon-remove icon"></i></button>
            </div>`;
   let addedText = document.querySelectorAll(".delete");
    for(let i=0; i<addedText.length; i++){
    addedText[i].onclick = function() { this.parentNode.remove(); }
        }
    }
}
