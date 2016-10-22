generateRandomData = (n) ->
    rv = []
    for i in [1..n]
        rv.push(Math.floor(Math.random() * n))
    return rv

generateReversedData = (n) ->
    rv = []
    for i in [1..n]
        rv.push(n + Math.floor(Math.random() * (n/10)) - Math.floor(n/20))
    return rv

generateSortedData = (n) ->
    rv = []
    for i in [1..n]
        rv.push(i + Math.floor(Math.random() * (n/10)) - Math.floor(n/20))
    return rv

insertionSort = (data, n) ->
    starting = (new Date()).getTime()
    for i in [1..n-1]
        j = i - 1
        value = data[i]
        while j >= 0 && value < data[j]
            data[j+1] = data[j]
            j = j-1
        data[j+1]=value
        now = (new Date()).getTime()
        delta = now - starting
        # console.log 'i'+ n + ' @' + delta
    return delta

show = (data, time1, time2, n) ->
    for i in [0..n-1]
        console.log('@' + time1[i] + ' @' + time2[i] +': ' + data[i])
