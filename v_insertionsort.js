async function InsertionSort() {
    var i, j, k;
    var found = false;
    command = '';

    GenerateData();
    await Promise.all([Wait(WAIT_TIME)]); //wait 400ms before cleaning up
    command = 'insertion';

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = "30px Arial";
    ctx.fillText("Insertion Sort", 100, Y_BASE_2 + 50);
    Draw(BAR_COLOR);
    await Promise.all([Wait(WAIT_TIME_LIST_SORT / speed)]);

    for (i = 0; i < list.length - 1; i++) {
        if (command != 'insertion') return;
        j = i + 1;
        //drawing
        ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE);
        for (k = 0; k < list.length; k++) {
            if (k <= i)
                ctx.fillStyle = SORTED_COLOR;
            else
                ctx.fillStyle = BAR_COLOR;
            if (k == (i + 1) || k == j)
                ctx.fillStyle = CURRENT_COLOR;
            ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
        }
        await Promise.all([Wait(WAIT_TIME_LIST_SORT / speed)]);

        found = false;
        while (j > 0 && !found) {
            if (command != 'insertion') return;
            if (list[j-1] > list[j])
                Swap(j, j-1);
            else
                found = true;
            j--;

            //drawing
            ctx.clearRect(0, 0, ctx.canvas.clientWidth, Y_BASE);
            for (k = 0; k < list.length; k++) {
                if (k <= i)
                    ctx.fillStyle = SORTED_COLOR;
                else
                    ctx.fillStyle = BAR_COLOR;
                if (k == (i + 1) || k == j)
                    ctx.fillStyle = CURRENT_COLOR;
                ctx.fillRect((k + LEFT_INDENT) * BAR_WIDTH, Y_BASE - list[k] * BAR_HEIGHT_FACTOR, BAR_WIDTH - BAR_GAP, list[k] * BAR_HEIGHT_FACTOR);
            }
            await Promise.all([Wait(WAIT_TIME_LIST_SORT / speed)]);
        }
    }
    //final drawing
    Draw(SORTED_COLOR);
}
