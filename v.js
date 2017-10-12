var list = [];
var canvas;
var ctx;

function generateData() {
    var x, i;
    for (x = 0; x < 50; x++) {  //random 50 numbers
        i = Math.floor(Math.random() * 100) + 25 //from 25 to 100,
        list.push(i);
    }
}

function wait(ms) {
   return new Promise(r => setTimeout(r, ms))
}

async function draw(i, j) {
    var k;
    ctx.clearRect(0, 0, 800, 800);
    for (k = 0; k < 50; k++) {
        ctx.fillStyle = (k == i || k == j) ? '#0000ff' : '#ff0000';
        ctx.fillRect((k+10) * 10, 400 - list[k] * 2, 8, list[k] * 2);
    }
    await Promise.all([wait(50)]);
}

function AnimateLine(list, i, j) {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById('cas');
    var ctx = canvas.getContext('2d');
    var i, j, k;

    if (list[i] > list[j]) {
        k = list[i];
        list[i] = list[j];
        list[j] = k;
    }
    //drawing
    ctx.clearRect(0, 0, 800, 800);
    for (k = 0; k < 50; k++) {
        ctx.fillStyle = (k == i || k == j) ? '#0000ff' : '#ff0000';
        ctx.fillRect((k+10) * 10, 400 - list[k] * 2, 8, list[k] * 2);
    }
    j++;
    if (j == 50) {
        i++;
        j = i+1;
    }
    if (i < 50) {
        requestAnimationFrame(function () {
            AnimateLine(list, i, j);
        });
    }

}

function doMerge(list) {
    merge(list);
};

async function merge(data) {
    var left, midpoint, right, rv;
    if (data.length === 1) {
      return data;
    }
    rv = [];
    midpoint = Math.floor(data.length / 2);
    left = merge(data.slice(0, midpoint));
    right = merge(data.slice(midpoint));
    while (left.length && right.length) {
      rv.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return rv.concat(left).concat(right);
};

async function Insertion() {
    var i, j, k;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    generateData();

    // AnimateCircle();
    // AnimateLine(list, 0, 1);
    // return;

    for (i = 0; i < 50; i++) {
        for (j = i+1; j < 50; j++) {
            if (list[i] > list[j]) {
                k = list[i];
                list[i] = list[j];
                list[j] = k;
            }
            //drawing
            draw(i, j);
            // ctx.clearRect(0, 0, 800, 800);
            // for (k = 0; k < 50; k++) {
            //     ctx.fillStyle = (k == i || k == j) ? '#0000ff' : '#ff0000';
            //     ctx.fillRect((k+10) * 10, 400 - list[k] * 2, 8, list[k] * 2);
            // }
            // await Promise.all([wait(50)])
        }
    }
}



// function sleep(ms) {
//     var unixtime_ms = new Date().getTime();
//     var i
//     do {
//         i = new Date().getTime();
//         console.log(unixtime_ms + " " + ms + " " + i )
//     }
//     while(i < (unixtime_ms + ms))
// }

//gloabl definitions
//core plugin features & call


// var circleDefaults = {
//     circlePos: {
//         x: 338,
//         y: 130
//     },
//     radius: 120,
//     counterClockwise: false,
//     startAngle: Math.PI / 2,
//     endAngle: Math.PI * 2,
//     currentPercent: 0,
//     endPercent: 90

// }

// var lineDefaults = {
//     movePos: {
//         x: 0,
//         y: 80
//     },
//     linePos: {
//         x: 10,
//         y: 80
//     }


// }

// function AnimateCircle(current) {
//     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//     var canvas = document.getElementById('cas');
//     var context = canvas.getContext('2d');

//     context.beginPath();
//     context.arc(circleDefaults.circlePos.x, circleDefaults.circlePos.y, circleDefaults.radius, -(circleDefaults.startAngle), ((circleDefaults.endAngle) * current) - circleDefaults.startAngle, circleDefaults.counterClockwise);
//     context.lineWidth = 0.5;

//     context.strokeStyle = "#000"
//     context.stroke();
//     context.closePath();


//     context.beginPath();
//     context.moveTo(830, 80);
//     context.lineTo(400, 80);
//     context.stroke();
//     context.closePath();




//     circleDefaults.currentPercent++;
//     if (circleDefaults.currentPercent < circleDefaults.endPercent) {
//         requestAnimationFrame(function () {
//             AnimateCircle(circleDefaults.currentPercent / 100);
//         });
//     }
// }

