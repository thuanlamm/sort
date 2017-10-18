var list = [];
var canvas;
var ctx;
var BAR_WIDTH = 20;
var LEFT_INDENT = 5;
var BAR_HEIGHT_FACTOR = 5;
var N = 20;

function generateData() {
    var x, i;
    list = [];
    for (x = 0; x < N; x++) {  //random 50 numbers
        i = Math.floor(Math.random() * 20) + 5 //from 5 to 20,
        list.push(i);
    }
}

function wait(ms) {
   return new Promise(r => setTimeout(r, ms))
}

function Draw() {
    ctx.clearRect(0, 0, 800, 800);
    for (k = 0; k < list.length; k++) {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, 400 - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - 2, list[k] * BAR_HEIGHT_FACTOR);
    }
}

function DoMerge() {
    var k;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    generateData();
    Draw();
    Merge(list, 0);
    Draw();
};

async function Merge(data, first) {
    var left, midpoint, right, rv, leftCount, rightCount, i;
    if (data.length == 1) {
      return data;
    }
    rv = [];
    Draw();
    midpoint = Math.floor(data.length / 2);
    left = await Merge(data.slice(0, midpoint), first);
    right = await Merge(data.slice(midpoint), first + midpoint);
    leftCount = 0;
    rightCount = 0;

    ctx.clearRect(0, 400, 800, 400);
    for (i = 0; i < data.length; i++) {
        ctx.fillStyle = (i == first || i == first + midpoint) ? '#0000ff' : '#50BED9';
        ctx.fillRect((first + i + LEFT_INDENT) * BAR_WIDTH, 400 - list[first + i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - 2, list[first + i] * BAR_HEIGHT_FACTOR);
    }
    await Promise.all([wait(800)]);
    while (left.length || right.length) {
        if (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                rv.push(left[0]);
                left.shift();
                leftCount++;
            } else {
                rv.push(right[0]);
                right.shift();
                rightCount++;
            }
        } else if (left.length > 0) {
            rv.push(left[0]);
            left.shift();
            leftCount++;
        } else {
            rv.push(right[0]);
            right.shift();
            rightCount++;
        }
        ctx.clearRect((first + LEFT_INDENT) * BAR_WIDTH, 0, data.length * BAR_WIDTH, 800);

        for (i = 0; i < rv.length; i++) {
            // ctx.fillStyle = (k == i || k == j) ? '#0000ff' : '#ff0000';
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect((first + i + LEFT_INDENT) * BAR_WIDTH, 600 - rv[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - 2, rv[i] * BAR_HEIGHT_FACTOR);
        }
        for (i = 0; i < left.length; i++) {
            ctx.fillStyle = (i == 0) ? '#0000ff' : '#50BED9';
            ctx.fillRect((first + leftCount + i + LEFT_INDENT) * BAR_WIDTH, 400 - left[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - 2, left[i] * BAR_HEIGHT_FACTOR);
        }
        for (i = 0; i < right.length; i++) {
            // ctx.fillStyle = (k == i || k == j) ? '#0000ff' : '#ff0000';
            ctx.fillStyle = (i == 0) ? '#0000ff' : '#50BED9';
            ctx.fillRect((first + midpoint + rightCount + i + LEFT_INDENT) * BAR_WIDTH, 400 - right[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - 2, right[i] * BAR_HEIGHT_FACTOR);
        }
        await Promise.all([wait(800)]);
    }
    for (i = 0; i < rv.length; i++) {
        list[first+i] = rv[i];
    }
    return rv.concat(left).concat(right);
};

async function Insertion() {
    var i, j, k;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    generateData();

    for (i = 0; i < list.length; i++) {
        for (j = i+1; j < list.length; j++) {
            if (list[i] > list[j]) {
                k = list[i];
                list[i] = list[j];
                list[j] = k;
            }
            //drawing
            ctx.clearRect(0, 0, 800, 800);
            for (k = 0; k < list.length; k++) {
                ctx.fillStyle = (k == i || k == j) ? '#0000ff' : '#ff0000';
                ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, 400 - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - 2, list[k] * BAR_HEIGHT_FACTOR);
            }
            await Promise.all([wait(150)]);
        }
    }
}


