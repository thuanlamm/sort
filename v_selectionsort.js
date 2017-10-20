async function SelectionSort() {
    var i, j, k, minIndex;

    command = '';
    GenerateData();
    await Promise.all([Wait(WAIT_TIME)]); //wait 400ms before cleaning up

    command = 'selection';
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = "30px Arial";
    ctx.fillText("Selection Sort", 100, Y_BASE_2 + 50);
    Draw(BAR_COLOR);
    await Promise.all([Wait(WAIT_TIME_INSERTION_SORT)]);

    for (i = 0; i < list.length - 1; i++) {
        if (command != 'selection') return;
        minIndex = i;
        for (j = i + 1; j < list.length; j++) {
            if (command != 'selection') return;
            if (list[j] < list[minIndex])
                minIndex = j;
            //drawing
            ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE);
            for (k = 0; k < list.length; k++) {
                if (k < i)
                    ctx.fillStyle = SORTED_COLOR;
                else if (k == minIndex)
                    ctx.fillStyle = BAR_MIN_COLOR;
                else if (k == i || k == j)
                    ctx.fillStyle = CURRENT_COLOR;
                else
                    ctx.fillStyle = BAR_COLOR;
                ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
            }
            await Promise.all([Wait(WAIT_TIME_INSERTION_SORT)]);


        }
        if (minIndex != i)
            Swap(minIndex, i);
    }
    //final drawing
    Draw(SORTED_COLOR);
}
