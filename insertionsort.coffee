generateRandomData = (n) ->
    for i in [1..n]
        data.push(Math.floor(Math.random() * n))
    return data

generateReversedData = (n) ->
    for i in [1..n]
        data.push(n + Math.floor(Math.random() * (n/10)) - Math.floor(n/20))
    return data

generateSortedData = (n) ->
    for i in [1..n]
        data.push(i + Math.floor(Math.random() * (n/10)) - Math.floor(n/20))
    return data

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
    return now - starting

show = (data, time1, time2, n) ->
    for i in [0..n-1]
        console.log('@' + time1[i] + ' @' + time2[i] +': ' + data[i])