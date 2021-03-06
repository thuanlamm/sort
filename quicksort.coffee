class QuickSort
    constructor : (@data) ->
        @time = 0
        @space = @data.length
        @current = @data.length
        return

    doSort : () ->
        starting = window.performance.now()
        for t in [1..5]
            temp = @data.slice()
            @doQuickSort temp, 0, temp.length - 1
        @time = (window.performance.now() - starting) / 5
        @data = temp

    doQuickSort : (data, iStart, iEnd) ->
        if iStart < iEnd
            iPivot = @quickSortPartition iStart, iEnd

            @doQuickSort data, iStart, iPivot - 1
            @doQuickSort data, iPivot + 1, iEnd


    swap : (data, i, j) ->
        temp = data[i]
        data[i] = data[j]
        data[j] = temp

    quickSortPartition : (data, iStart, iEnd) ->
        iMid = (iStart + iEnd) / 2
        @swap data, iStart, iMid
        d = data[iStart]
        iEndOfLeftList = iStart
        for i in [iStart+1..iEnd]
            if data[i] < d
                iEndOfLeftList++
                @swap data, iEndOfLeftList, i
        @swap data, iStart, iEndOfLeftList
        return iEndOfLeftList
