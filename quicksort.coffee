quickSort = (data, n) ->
    starting = (new Date()).getTime()
    starting2 = window.performance.now()
    doQuickSort(data, 0, n - 1)
    now = (new Date()).getTime()
    now2 = window.performance.now()
    delta = now2 - starting2
    # console.log 'q'+ n + ' @' + delta
    return delta

doQuickSort = (data, iStart, iEnd) ->
    if iStart < iEnd
        iPivot = quickSortPartition(iStart, iEnd)
        doQuickSort(data, iStart, iPivot - 1)
        doQuickSort(data, iPivot + 1, iEnd)

swap = (data, i, j) ->
    t = data[i]
    data[i] = data[j]
    data[j] = t

quickSortPartition = (data, iStart, iEnd) ->
    iMid = (iStart + iEnd) / 2
    swap(data, iStart, iMid)
    d = data[iStart]
    iEndOfLeftList = iStart
    for i in [iStart+1..iEnd]
        if data[i] < d
            iEndOfLeftList++
            swap(data, iEndOfLeftList, i)
    swap(data, iStart, iEndOfLeftList)
    return iEndOfLeftList
