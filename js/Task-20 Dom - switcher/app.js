document.getElementById('purpleButton').onclick = switchPurple;
document.getElementById('pinkButton').onclick = switchPink;
document.getElementById('greenButton').onclick = switchGreen;
document.getElementById('khakiButton').onclick = switchKhaki;

function switchPurple() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'Rebeccapurple'; 
  document.getElementsByTagName('body')[0].style.color = 'wheat'; 
}

function switchPink() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'lightpink'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}

function switchGreen() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'seagreen'; 
  document.getElementsByTagName('body')[0].style.color = 'wheat'; 
}

function switchKhaki() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkkhaki'; 
  document.getElementsByTagName('body')[0].style.color = 'black'; 
}
