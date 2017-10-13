class SelectionSort
    constructor : (@data) ->
        @time = 0
        @space = 0
        return

    doSort : ->
        @space = @data.length
        starting = window.performance.now()
        n = @data.length
        for t in [1..5]
            temp = @data.slice()
            for i in [1..n-1]
                min = i
                for j in [i+1..n-1]
                    if temp[j] < temp[min]
                        min = j
                if i != min
                    tmp = temp[i]
                    temp[i] = temp[min]
                    temp[min] = tmp
        @time = (window.performance.now() - starting) / 5
        @data = temp
