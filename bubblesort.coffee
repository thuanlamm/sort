class BubbleSort
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
            for i in [n-1..0] by -1
                for j in [n-i..1] by -1
                    if temp[j] < temp[j-1]
                        tmp = temp[j];
                        temp[j] = temp[j-1];
                        temp[j-1] = tmp;
        @time = (window.performance.now() - starting) / 5
        @data = temp







