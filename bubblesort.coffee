
bubbleSort = (data, n) ->
    starting = window.performance.now()
    for i in [n-1..0] by -1
        for j in [n-i..1] by -1
            if data[j] < data[j-1]
                tmp = data[j];
                data[j] = data[j-1];
                data[j-1] = tmp;
    now = window.performance.now()
    return now - starting