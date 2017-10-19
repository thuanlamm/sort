async function BubbleSort() {
    var i, j, k, last;
    command = '';

    GenerateData();
    await Promise.all([Wait(WAIT_TIME)]); //wait 400ms before cleaning up
    command = 'bubble';

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = "30px Arial";
    ctx.fillText("Bubble Sort", 100, Y_BASE_2 + 50);
    Draw(BAR_COLOR);
    await Promise.all([Wait(WAIT_TIME_INSERTION_SORT)]);

    last = list.length;
    do {
        //drawing
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE);
        for (k = 0; k < list.length; k++) {
            if (k >= last)
                ctx.fillStyle = SORTED_COLOR;
            else if (k == i || k == i + 1)
                ctx.fillStyle = CURRENT_COLOR;
            else
                ctx.fillStyle = BAR_COLOR;
            ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
        }
        await Promise.all([Wait(WAIT_TIME_INSERTION_SORT)]);

        if (command != 'bubble') return;
        found = false;
        for (i = 0; i < last - 1; i++) {
            if (command != 'bubble') return;
            if (list[i] > list[i+1]) {
                Swap(i, i+1)
                found = true;
            }
            //drawing
            ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE);
            for (k = 0; k < list.length; k++) {
                if (k >= last)
                    ctx.fillStyle = SORTED_COLOR;
                else if (k == i || k == i + 1)
                    ctx.fillStyle = CURRENT_COLOR;
                else
                    ctx.fillStyle = BAR_COLOR;
                ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
            }
            await Promise.all([Wait(WAIT_TIME_INSERTION_SORT)]);
        }
        last--;
    } while (found);
    //final drawing
    Draw(SORTED_COLOR);
}
