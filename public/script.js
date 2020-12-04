function redHpUp() {
    var redHp = document.getElementById("red-h-counter").innerHTML;
    redHp ++;
    document.getElementById("red-h-counter").innerHTML = redHp;
}

function redHpDown() {
    var redHp = document.getElementById("red-h-counter").innerHTML;
    redHp --;
    document.getElementById("red-h-counter").innerHTML = redHp;
}

function blueHpUp() {
    var blueHp = document.getElementById("blue-h-counter").innerHTML;
    blueHp ++;
    document.getElementById("blue-h-counter").innerHTML = blueHp;
}

function blueHpDown() {
    var blueHp = document.getElementById("blue-h-counter").innerHTML;
    blueHp --;
    document.getElementById("blue-h-counter").innerHTML = blueHp;
}

function redPoisonUp() {
    var redPoison = document.getElementById("red-p-counter").innerHTML;
    redPoison ++;
    document.getElementById("red-p-counter").innerHTML = redPoison;
}

function redPoisonDown() {
    var redPoison = document.getElementById("red-p-counter").innerHTML;
    redPoison --;
    document.getElementById("red-p-counter").innerHTML = redPoison;
}

function bluePoisonUp() {
    var bluePoison = document.getElementById("blue-p-counter").innerHTML;
    bluePoison ++;
    document.getElementById("blue-p-counter").innerHTML = bluePoison;
}

function bluePoisonDown() {
    var bluePoison = document.getElementById("blue-p-counter").innerHTML;
    bluePoison --;
    document.getElementById("blue-p-counter").innerHTML = bluePoison;
}

function resetRedHp() {
    document.getElementById("red-h-counter").innerHTML = 20;
}

function resetBlueHp() {
    document.getElementById("blue-h-counter").innerHTML = 20;
}

function resetRedPoison() {
    document.getElementById("red-p-counter").innerHTML = 0;
}

function resetBluePoison() {
    document.getElementById("blue-p-counter").innerHTML = 0;
}