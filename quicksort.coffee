memCount = 0

quickSort = (data, n) ->
    memCount = n
    starting = window.performance.now()
    doQuickSort(data, 0, n - 1)
    now = window.performance.now()
    return now - starting

doQuickSort = (data, iStart, iEnd) ->
    if iStart < iEnd
        iPivot = quickSortPartition(iStart, iEnd)
        memCount += memCount
        doQuickSort(data, iStart, iPivot - 1)
        memCount += memCount
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
