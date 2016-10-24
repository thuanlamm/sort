swap = (data, i, j) ->
    temp = data[i]
    data[i] = data[j]
    data[j] = temp


selectionSort = (data, n) ->
    starting = window.performance.now()
    for i in [1..n-1]
        min = i
        for j in [i+1..n-1]
            if data[j] < data[min]
                min = j
        if i != min
            swap(data, i, min)
    now = window.performance.now()
    return now - starting

