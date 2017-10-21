async function DoMergeSort() {
    command = '';
    GenerateData();
    await Promise.all([Wait(WAIT_TIME)]); //wait 400ms before cleaning up

    command = 'merge';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = "30px Arial";
    ctx.fillText("Merge Sort", 100, Y_BASE_2 + 50);
    Draw(BAR_COLOR);
    await Promise.all([Wait(500)]);

    await MergeSort(list, 0);

    await Promise.all([Wait(200)]);
    Draw(SORTED_COLOR);
}

async function MergeSort(data, first) {
    var left, midpoint, right, rv, leftCount, rightCount, i;
    if (command != 'merge') return;
    if (data.length == 1) {
      return data;
    }
    rv = [];
    Draw(BAR_COLOR);
    midpoint = Math.floor(data.length / 2);

    ctx.clearRect(0, Y_BASE, ctx.canvas.clientWidth, Y_BASE_2 - Y_BASE); //clear bottom area
    for (i = 0; i < data.length; i++) {
        ctx.fillStyle = (i == first || i == first + midpoint) ? CURRENT_COLOR : IN_PROCESS_COLOR;
        ctx.fillRect((first + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[first + i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[first + i] * BAR_HEIGHT_FACTOR);
    }
    //draw ranges
    ctx.fillStyle = IN_PROCESS_COLOR;
    ctx.fillRect((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, midpoint * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    ctx.fillRect((first + midpoint + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (data.length - midpoint) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    ctx.fillStyle = '#0f0f0f'
    //draw lines
    ctx.beginPath();
    ctx.moveTo((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH);
    ctx.lineTo((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE_2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((first + midpoint + LEFT_INDENT) * BAR_WIDTH + (data.length - midpoint) * BAR_WIDTH - BAR_GAP, Y_BASE + LINE_WIDTH);
    ctx.lineTo((first + midpoint + LEFT_INDENT) * BAR_WIDTH + (data.length - midpoint) * BAR_WIDTH, Y_BASE_2);
    ctx.stroke();

    console.log('1');
    await Promise.all([Wait(WAIT_TIME_MERGE_SORT / speed)]);

    left = await MergeSort(data.slice(0, midpoint), first);
    right = await MergeSort(data.slice(midpoint), first + midpoint);
    leftCount = 0;
    rightCount = 0;

    ctx.clearRect(0, Y_BASE, ctx.canvas.clientWidth, Y_BASE_2 - Y_BASE); //clear bottom area
    for (i = 0; i < data.length; i++) {
        ctx.fillStyle = (i == first || i == first + midpoint) ? CURRENT_COLOR : IN_PROCESS_COLOR;
        ctx.fillRect((first + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[first + i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[first + i] * BAR_HEIGHT_FACTOR);
    }

    //draw ranges
    ctx.fillStyle = IN_PROCESS_COLOR;
    ctx.fillRect((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, midpoint * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    ctx.fillRect((first + midpoint + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (data.length - midpoint) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    //draw lines
    ctx.beginPath();
    ctx.moveTo((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH);
    ctx.lineTo((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE_2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((first + midpoint + LEFT_INDENT) * BAR_WIDTH + (data.length - midpoint) * BAR_WIDTH - BAR_GAP, Y_BASE + LINE_WIDTH);
    ctx.lineTo((first + midpoint + LEFT_INDENT) * BAR_WIDTH + (data.length - midpoint) * BAR_WIDTH - BAR_GAP, Y_BASE_2);
    ctx.stroke();

    console.log('2');
    await Promise.all([Wait(WAIT_TIME_MERGE_SORT / (speed * 4))]); //200 ms

    while (left.length || right.length) {
        if (command != 'merge') return;
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
        ctx.clearRect((first + LEFT_INDENT) * BAR_WIDTH, 0, data.length * BAR_WIDTH - BAR_GAP, Y_BASE_2);

        for (i = 0; i < rv.length; i++) {
            // ctx.fillStyle = (k == i || k == j) ? CURRENT_COLOR : BAR_COLOR;
            ctx.fillStyle = SORTED_COLOR;
            ctx.fillRect((first + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE_2 - rv[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, rv[i] * BAR_HEIGHT_FACTOR);
        }
        for (i = 0; i < left.length; i++) {
            ctx.fillStyle = (i == 0) ? CURRENT_COLOR : IN_PROCESS_COLOR;
            ctx.fillRect((first + leftCount + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - left[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, left[i] * BAR_HEIGHT_FACTOR);
        }
        for (i = 0; i < right.length; i++) {
            // ctx.fillStyle = (k == i || k == j) ? CURRENT_COLOR : BAR_COLOR;
            ctx.fillStyle = (i == 0) ? CURRENT_COLOR : IN_PROCESS_COLOR;
            ctx.fillRect((first + midpoint + rightCount + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - right[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, right[i] * BAR_HEIGHT_FACTOR);
        }
        //draw lines
        ctx.fillStyle = IN_PROCESS_COLOR;
        ctx.fillRect((first + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, midpoint * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
        ctx.fillRect((first + midpoint + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (data.length - midpoint) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
        console.log('3');
        await Promise.all([Wait(WAIT_TIME_MERGE_SORT / speed)]);
    }
    for (i = 0; i < rv.length; i++) {
        list[first+i] = rv[i];
    }
    return rv.concat(left).concat(right);
}
