var dices = ['&#9856;', '&#9857;', '&#9858;,', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;

function change() {
    var random = Math.floor(Math.random() * 6);
    dices.innerHTML = dices[random];
}

function stopstart() {
    if (stopped) {
        stopped = false;

        t = setInterval(change, 100)
    } else  {
        clearInterval(t);
        stopped = true;
    }
}
window.onload = fuction() {
    dice = document.getElementById("dice");
    stopstart();
}
