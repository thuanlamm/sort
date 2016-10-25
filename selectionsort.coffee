class SelectionSort
    constructor : (@data) ->
        @time = 0
        @space = 0
        return

    doSort : ->
        @space = @data.length
        starting = window.performance.now()
        n = @data.length
        for i in [1..n-1]
            min = i
            for j in [i+1..n-1]
                if @data[j] < @data[min]
                    min = j
            if i != min
                temp = @data[i]
                @data[i] = @data[min]
                @data[min] = temp
        @time = window.performance.now() - starting
