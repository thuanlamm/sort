class QuickSort
    constructor : (@data) ->
        @time = 0
        @space = @data.length
        @current = @data.length
        return

    doSort : () ->
        starting = window.performance.now()
        @doQuickSort(@data, 0, @data.length - 1)
        @time = window.performance.now() - starting

    doQuickSort : (data, iStart, iEnd) ->
        if iStart < iEnd
            iPivot = @quickSortPartition(iStart, iEnd)
            @current += (@iPivot - iStart)
            if @current > @space
                @space = @current
            @doQuickSort(data, iStart, iPivot - 1)
            @current -= (@iPivot - iStart)

            @current += (iEnd - @iPivot)
            if @current > @space
                @space = @current
            @doQuickSort(data, iPivot + 1, iEnd)
            @current -= (iEnd - @iPivot)

    swap : (data, i, j) ->
        temp = data[i]
        data[i] = data[j]
        data[j] = temp

    quickSortPartition : (data, iStart, iEnd) ->
        iMid = (iStart + iEnd) / 2
        @swap(data, iStart, iMid)
        d = data[iStart]
        iEndOfLeftList = iStart
        for i in [iStart+1..iEnd]
            if data[i] < d
                iEndOfLeftList++
                @swap(data, iEndOfLeftList, i)
        @swap(data, iStart, iEndOfLeftList)
        return iEndOfLeftList
