class InsertionSort
    constructor : (@data) ->
        @time = 0
        @space = 0
        return

    doSort : ->
        @space = @data.length
        starting = window.performance.now()
        for t in [1..5]
            temp = @data.slice()
            for i in [1..temp.length-1]
                j = i - 1
                value = temp[i]
                while j >= 0 && value < temp[j]
                    temp[j+1] = temp[j]
                    j = j-1
                temp[j+1]=value
        @time = (window.performance.now() - starting) / 5
        @data = temp
