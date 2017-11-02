const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

//init counter for value of Matrix and condition achive lengs Matrix
var count = 1;
//init counter for function setTimeout;
var countTime = 1;

// initMatrix;
var row = 6, col =5;
var arr = [];
for (var i = 0; i < row; i++) {
    arr[i] = new Array(col);
}

//index for row Matrix;
var indexRow = 0;

//main loop for all element Matrix
while (count < row*col) {
    //loop only for row Matrix
    for (indexRow; indexRow < row; indexRow++) {
        // condition row  - odd or not
        if (indexRow % 2 === 0) {
            for (var i = 0; i < col; i++) {
                arr[indexRow][i] = count;
                //call function for print Value
                renderValue(300, arr[indexRow][i], indexRow , i);
                count++;
            }
        }
        else {
            for (var i = col - 1; i >= 0; i--) {
                arr[indexRow][i] = count;
                renderValue(300, arr[indexRow][i], indexRow , i);
                count++;
            }
        }
    }
}

//print value into canvas
function renderValue(time, value, x, y) {
    countTime++;
    setTimeout(function () {
        ctx.fillText(value, y*25+25 ,x*25+25 );
    }, time * countTime);
}
