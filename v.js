var list = [];
var canvas;
var ctx;

var command = '';
var N = 7;
var WAIT_TIME = 400;
var WAIT_TIME_MERGE_SORT = 800;
var WAIT_TIME_INSERTION_SORT = 150;

var BAR_WIDTH = 20;
var BAR_GAP = 2;
var BAR_HEIGHT_FACTOR = 5;

var Y_BASE = 200;
var Y_BASE_2 = 400;
var LEFT_INDENT = 5;
var LINE_WIDTH = 10;

var IN_PROCESS_COLOR = '#50BED9';
var CURRENT_COLOR = '#0000ff';
var SORTED_COLOR = '#f0f0f0';
var BAR_COLOR = '#606060'; //gray
var BAR_MIN_COLOR = '#ff0000';
var TEXT_COLOR = '#ffffff';
var BACKGROUND_COLOR = '#87CEFA'; //lightskyblue


function GenerateData() {
    var x, i;
    list = [];
    for (x = 0; x < N; x++) {  //random 50 numbers
        i = Math.floor(Math.random() * 25) + 5 //from 5 to 25,
        list.push(i);
    }
}

function Wait(ms) {
   return new Promise(r => setTimeout(r, ms))
}

function Draw(color) {
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE_2);
    for (k = 0; k < list.length; k++)
        ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
}

function Swap(i, j) {
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}
