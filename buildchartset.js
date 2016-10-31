function BuildChartSet(theInputData, theStep) {
    this.inputData = theInputData;
    this.n = theInputData.length;
    this.step = theStep;
}

BuildChartSet.prototype.build = function() {
    var inputData2 = [];
    var gen = new GenerateData();
    var results = new Array(5); //5 sorting algorithms

    for (i = 0; i < 5; i++) { //each sorting algorith
        results[i] = new Array(4);  //has 4 results (for 4 chars)
        results[i][0] = [];
        results[i][1] = [];
        results[i][2] = [];
        results[i][3] = [];
    }

    for (i = 1; i <= this.n; i += this.step) {
        inputData2 = this.inputData.slice(0, i);
        var insertion = new InsertionSort(inputData2);
        insertion.doSort();
        results[0][0].push({ x: i, y: insertion.time});
        results[0][1].push({ x: i, y: insertion.space});

        inputData2 = this.inputData.slice(0, i);
        var selection = new SelectionSort(inputData2);
        selection.doSort();
        results[1][0].push({ x: i, y: selection.time});
        results[1][1].push({ x: i, y: selection.space});

        inputData2 = this.inputData.slice(0, i);
        var bubble = new BubbleSort(inputData2);
        bubble.doSort();
        results[2][0].push({ x: i, y: bubble.time});
        results[2][1].push({ x: i, y: bubble.space});

        inputData2 = this.inputData.slice(0, i);
        var merge = new MergeSort(inputData2);
        merge.doSort();
        results[3][0].push({ x: i, y: merge.time});
        results[3][1].push({ x: i, y: merge.space});

        inputData2 = this.inputData.slice(0, i);
        var quick = new QuickSort(inputData2);
        quick.doSort();
        results[4][0].push({ x: i, y: quick.time});
        results[4][1].push({ x: i, y: quick.space});
    }

    for (i = 0; i <= 1; i+=.2) {
        var degreed = [];
        degreed = gen.degree(this.inputData, this.n, i);

        inputData2 = degreed.slice();
        var insertion = new InsertionSort(inputData2);
        insertion.doSort();
        results[0][2].push({ x: i, y: insertion.time});
        results[0][3].push({ x: i, y: insertion.space});

        inputData2 = degreed.slice();
        var selection = new SelectionSort(inputData2);
        selection.doSort();
        results[1][2].push({ x: i, y: selection.time});
        results[1][3].push({ x: i, y: selection.space});

        inputData2 = degreed.slice();
        var bubble = new BubbleSort(inputData2);
        bubble.doSort();
        results[2][2].push({ x: i, y: bubble.time});
        results[2][3].push({ x: i, y: bubble.space});

        inputData2 = degreed.slice();
        var merge = new MergeSort(inputData2);
        merge.doSort();
        results[3][2].push({ x: i, y: merge.time});
        results[3][3].push({ x: i, y: merge.space});

        inputData2 = degreed.slice();
        var quick = new QuickSort(inputData2);
        quick.doSort();
        results[4][2].push({ x: i, y: quick.time});
        results[4][3].push({ x: i, y: quick.space});
    }
    return results;
}

BuildChartSet.prototype.constructor = BuildChartSet;
