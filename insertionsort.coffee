class InsertionSort
    constructor : (@data) ->
        @time = 0
        @space = 0
        return

    doSort : ->
        @space = @data.length
        starting = window.performance.now()
        for i in [1..@data.length-1]
            j = i - 1
            value = @data[i]
            while j >= 0 && value < @data[j]
                @data[j+1] = @data[j]
                j = j-1
            @data[j+1]=value
        @time = window.performance.now() - starting
