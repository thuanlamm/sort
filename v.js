var list = [];
var backup_list = [];
var canvas;
var ctx;
var speed = 2.0; //default value
var command = '';

var N = 17;
var WAIT_TIME = 400;
var WAIT_TIME_MERGE_SORT = 800;
var WAIT_TIME_LIST_SORT = 200;

var BAR_WIDTH = 20;
var BAR_GAP = 2;
var BAR_HEIGHT_FACTOR = 5;

var Y_BASE = 200;
var Y_BASE_2 = 400;
var LEFT_INDENT = 15;
var LINE_WIDTH = 10;

var IN_PROCESS_COLOR = '#50BED9';
var CURRENT_COLOR = '#0000ff';
var SORTED_COLOR = '#f0f0f0';
var BAR_COLOR = '#606060'; //gray
var BAR_MIN_COLOR = '#ff0000';
var PIVOT_COLOR = '#ff0000';
var TEXT_COLOR = '#ffffff';
var BACKGROUND_COLOR = '#87CEFA'; //lightskyblue

function Sorting() {
    for (var i = 0; i < N; i++)
        for (var j = i + 1; j < N; j++)
            if (list[i] > list[j]) 
                Swap(i, j);
}

function GetBackupData() {
    var x;
    list = [];
    for (x = 0; x < N; x++) {
        list.push(backup_list[x]);
    }
}

function GenerateData() {
    var x, i;
    list = [];
    backup_list = [];
    for (x = 0; x < N; x++) {  //random 50 numbers
        i = Math.floor(Math.random() * 30) + 5 //from 5 to 35,
        list.push(i);
    }
    var e = document.getElementById("data");
    var value = e.options[e.selectedIndex].value;
    // var text = e.options[e.selectedIndex].text;
    if (value != 'Random') {
        Sorting();
        if (value == 'SortedZA' || value == 'AlmostZA')
            for (var i = 0; i < N / 2; i++)
                Swap(i, N - 1 - i);
        if (value == 'AlmostAZ' || value == 'AlmostZA')
            Swap(Math.floor(N / 4), Math.floor(N / 4 * 3));
    }
    for (x = 0; x < N; x++) {
        backup_list.push(list[x]);
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

function UpdateSize(val) {
    N = val;
    command = '';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    LEFT_INDENT = (ctx.canvas.width - N * BAR_WIDTH) / BAR_WIDTH / 2; //re-center
    GenerateData();
    Draw(BAR_COLOR);
    document.getElementById("size").innerHTML = "Size: " + val;
}

function UpdateSpeed(val) {
    speed = val;
    document.getElementById("speed").innerHTML = "Speed: " + val;
}

function OnLoad() {
    command = '';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    GenerateData();
    Draw(BAR_COLOR);
}

function DataChanged() {
    command = '';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //GenerateData();
    Draw(BAR_COLOR);
}