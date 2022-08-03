let tapilanEded = parseInt(Math.random() * 10 + 1);
let userEded = Number(prompt('Enter number: '));
let cehdSayi = 1;

while (userEded !== tapilanEded) {
    userEded = Number(prompt('Enter number: '));
    cehdSayi++;
}

if (cehdSayi === 1) {
    alert("You won 1000 azn!");
}
else if (2 <= cehdSayi && cehdSayi < 6) {
    alert("You won 750 azn!");
}
else if (6 <= cehdSayi && cehdSayi < 10) {
    alert("You won 750 azn!");
}
else if (cehdSayi => 10) {
    alert("You lost 250 azn!");
}
