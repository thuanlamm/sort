generateData = (n) ->
    data = []
    for i in [1..n]
        data.push(Math.floor(Math.random() * n))
    return data

insertionSort = (data, time, n) ->
    starting = (new Date()).getTime()
    console.log(starting)
    time.push(0)
    for i in [1..n-1]
        j = i - 1
        value = data[i]     
        while j >= 0 && value < data[j]
            data[j+1] = data[j]
            j = j-1
        data[j+1]=value
        now = (new Date()).getTime()
        delta = now - starting
        time.push(delta)
        console.log(time[i-1] + ' ' + data[j-1])

show = (data, time, n) ->
    for i in [0..n-1]
        console.log('@' + time[i] + ': ' + data[i])