
const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');


var row = canvas.width;
var col = canvas.height;
var countTime = 1;
var countObject = 0;
var arrayObject = [];

for (var i=0; i < row; i++) {
    for (var j=0 ; j < col; j++) {
        arrayObject[countObject] = {
            coorX: i,
            coorY: j
        };
        countObject++;
    }
}


//Function shufler array
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

shuffle(arrayObject);


//Print matrix
for (var i = 0; i < arrayObject.length; i++) {

        renderDot(1, arrayObject[i].coorX, arrayObject[i].coorY);

    }


function renderDot(time, x ,y) {
    countTime++;
    setTimeout (function () {
        ctx.fillStyle= `rgb(${255 - x},0,${255 - y})`;
        ctx.fillRect(x, y, 1, 1);
    }, time * countTime);
}



