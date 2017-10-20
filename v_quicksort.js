positions = [];

function DrawQuickSort(start, midpoint, end) {
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE); //clear the top part
    for (var i = 0; i < list.length; i++) {
        if (positions[i] == 1)
            ctx.fillStyle = SORTED_COLOR;
        else if (i == midpoint)
            ctx.fillStyle = PIVOT_COLOR;
        else if (i >= start && i <= end)
            ctx.fillStyle = IN_PROCESS_COLOR;
        else
            ctx.fillStyle = BAR_COLOR;
        ctx.fillRect((i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[i] * BAR_HEIGHT_FACTOR);
    }
}

async function DoQuickSort() {
    command = '';
    GenerateData();
    positions = [];
    for (var i = 0; i < N; i++) {
        positions.push(0);
    }
    await Promise.all([Wait(WAIT_TIME)]); //wait 400ms before cleaning up

    command = 'quick';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = "30px Arial";
    ctx.fillText("Quick Sort", 100, Y_BASE_2 + 50);
    Draw(BAR_COLOR);
    await Promise.all([Wait(500)]);

    await QuickSort(0, list.length - 1)

    await Promise.all([Wait(200)]);
    Draw(SORTED_COLOR);
}

async function QuickSort(start, end) {
    if (start < end) {
        var pivot = await QuickSortPartition(start, end);
        positions[pivot] = 1;
        await QuickSort(start, pivot - 1);
        await QuickSort(pivot + 1, end);
    } else if (start == end) {
        positions[start] = 1;
    }
}

async function QuickSortPartition(start, end) {
    var i, k, pivotIndex, pivotValue, takeLeft;
    var left = [];
    var right = [];

    if (command != 'quick') return;

    pivotIndex = Math.floor((start + end) / 2);
    pivotValue = list[pivotIndex];

    ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE_2);  //clear the top part + bottom part
    for (var k = 0; k < list.length; k++) {                 //draw all items with the pivot is red,
        if (positions[k] == 1)
            ctx.fillStyle = SORTED_COLOR;
        else if (k == pivotIndex)
            ctx.fillStyle = PIVOT_COLOR;
        else if (k >= start && k <= end)
            ctx.fillStyle = IN_PROCESS_COLOR;
        else
            ctx.fillStyle = BAR_COLOR;
        ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
    }
    //draw ranges
    ctx.fillStyle = IN_PROCESS_COLOR;
    ctx.fillRect((start + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (end - start + 1) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    await Promise.all([Wait(WAIT_TIME_MERGE_SORT)]);
    console.log('1');

    for (i = start; i <= end; i++) {
        if (command != 'quick') return;
        if (i != pivotIndex) {
            ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE_2);  //clear the top part + bottom part
            for (var k = 0; k < list.length; k++) {                 //draw all items with the pivot is red,
                if (positions[k] == 1) //sorted
                    ctx.fillStyle = SORTED_COLOR;
                else if (k == pivotIndex || k < i) //pivot or moved
                    ctx.fillStyle = BACKGROUND_COLOR;
                else if (k == i)
                    ctx.fillStyle = CURRENT_COLOR;
                else if (k >= start && k <= end)
                    ctx.fillStyle = IN_PROCESS_COLOR;
                else
                    ctx.fillStyle = BAR_COLOR;
                ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
            }
            //draw ranges
            ctx.fillStyle = IN_PROCESS_COLOR;
            ctx.fillRect((start + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (end - start + 1) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);

            //draw pivot in the bottom part
            ctx.fillStyle = PIVOT_COLOR
            ctx.fillRect((pivotIndex + LEFT_INDENT) * BAR_WIDTH, Y_BASE_2 - pivotValue * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, pivotValue * BAR_HEIGHT_FACTOR);
            //bottom part
            ctx.fillStyle = IN_PROCESS_COLOR;
            for (k = 0; k < left.length; k++) { //smaller than the pivot
                ctx.fillRect((LEFT_INDENT + pivotIndex - left.length + k - 1) * BAR_WIDTH, Y_BASE_2 - left[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, left[k] * BAR_HEIGHT_FACTOR);
            }
            for (k = 0; k < right.length; k++) { //bigger than th pivot
                ctx.fillRect((LEFT_INDENT + pivotIndex + 1 + k) * BAR_WIDTH, Y_BASE_2 - right[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, right[k] * BAR_HEIGHT_FACTOR);
            }
            await Promise.all([Wait(WAIT_TIME_MERGE_SORT)]);


            if (list[i] <= pivotValue) {
                left.push(list[i]);
                takeLeft = 1;
            }
            else {
                right.push(list[i]);
                takeLeft = 0;
            }

            ctx.clearRect(0, 0, ctx.canvas.width, Y_BASE_2);

            for (k = 0; k < list.length; k++) {   //top part
                if (k < start || k > end)
                    ctx.fillStyle = (positions[k] == 1) ? SORTED_COLOR : BAR_COLOR;
                else if (k <= i || k == pivotIndex)  //????
                    ctx.fillStyle = BACKGROUND_COLOR;
                else if (k > i + start && k <= end)
                    ctx.fillStyle = IN_PROCESS_COLOR;
                ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
            }
            //draw ranges
            ctx.fillStyle = IN_PROCESS_COLOR;
            ctx.fillRect((start + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (end - start + 1) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);

            //draw pivot in the bottom part
            ctx.fillStyle = PIVOT_COLOR
            ctx.fillRect((pivotIndex + LEFT_INDENT) * BAR_WIDTH, Y_BASE_2 - pivotValue * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, pivotValue * BAR_HEIGHT_FACTOR);
            //bottom part
            ctx.fillStyle = IN_PROCESS_COLOR;
            for (k = 0; k < left.length; k++) { //smaller than the pivot
                ctx.fillRect((LEFT_INDENT + pivotIndex - left.length + k + takeLeft - 1 ) * BAR_WIDTH, Y_BASE_2 - left[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, left[k] * BAR_HEIGHT_FACTOR);
            }
            for (k = 0; k < right.length; k++) { //bigger than th pivot
                ctx.fillRect((LEFT_INDENT + pivotIndex + 1 + k) * BAR_WIDTH, Y_BASE_2 - right[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, right[k] * BAR_HEIGHT_FACTOR);
            }
            ctx.fillStyle = CURRENT_COLOR;
            if (takeLeft)
                ctx.fillRect((LEFT_INDENT + pivotIndex - 1) * BAR_WIDTH, Y_BASE_2 - left[left.length-1] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, left[left.length-1] * BAR_HEIGHT_FACTOR);
            else
                ctx.fillRect((LEFT_INDENT + pivotIndex + right.length) * BAR_WIDTH, Y_BASE_2 - right[right.length-1] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, right[right.length-1] * BAR_HEIGHT_FACTOR);
            console.log('3');
            await Promise.all([Wait(WAIT_TIME_MERGE_SORT)]);
        }
    }
    for (i = 0; i < left.length; i++)
        list[start+i] = left[i];
    list[start + left.length] = pivotValue;
    for (i = 0; i < right.length; i++)
        list[start + left.length + 1 + i] = right[i];

    return start + left.length;
}


    // while (left.length || right.length) {
    //     if (left.length > 0 && right.length > 0) {
    //         if (left[0] < right[0]) {
    //             rv.push(left[0]);
    //             left.shift();
    //             leftCount++;
    //         } else {
    //             rv.push(right[0]);
    //             right.shift();
    //             rightCount++;
    //         }
    //     } else if (left.length > 0) {
    //         rv.push(left[0]);
    //         left.shift();
    //         leftCount++;
    //     } else {
    //         rv.push(right[0]);
    //         right.shift();
    //         rightCount++;
    //     }
    //     ctx.clearRect((start + LEFT_INDENT) * BAR_WIDTH, 0, data.length * BAR_WIDTH - BAR_GAP, Y_BASE_2);

    //     for (i = 0; i < rv.length; i++) {
    //         // ctx.fillStyle = (k == i || k == j) ? CURRENT_COLOR : BAR_COLOR;
    //         ctx.fillStyle = SORTED_COLOR;
    //         ctx.fillRect((start + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE_2 - rv[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, rv[i] * BAR_HEIGHT_FACTOR);
    //     }
    //     for (i = 0; i < left.length; i++) {
    //         ctx.fillStyle = (i == 0) ? CURRENT_COLOR : IN_PROCESS_COLOR;
    //         ctx.fillRect((start + leftCount + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - left[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, left[i] * BAR_HEIGHT_FACTOR);
    //     }
    //     for (i = 0; i < right.length; i++) {
    //         // ctx.fillStyle = (k == i || k == j) ? CURRENT_COLOR : BAR_COLOR;
    //         ctx.fillStyle = (i == 0) ? CURRENT_COLOR : IN_PROCESS_COLOR;
    //         ctx.fillRect((start + midpoint + rightCount + i + LEFT_INDENT) * BAR_WIDTH, Y_BASE - right[i] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, right[i] * BAR_HEIGHT_FACTOR);
    //     }
    //     //draw lines
    //     ctx.fillStyle = IN_PROCESS_COLOR;
    //     ctx.fillRect((start + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, midpoint * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    //     ctx.fillRect((start + midpoint + LEFT_INDENT) * BAR_WIDTH, Y_BASE + LINE_WIDTH, (data.length - midpoint) * BAR_WIDTH - BAR_GAP, LINE_WIDTH);
    //     console.log('3');
    //     await Promise.all([Wait(WAIT_TIME_MERGE_SORT)]);
    // }
    // for (i = 0; i < rv.length; i++) {
    //     list[start+i] = rv[i];
    // }


