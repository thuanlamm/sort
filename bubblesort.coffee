class BubbleSort
    constructor : (@data) ->
        @time = 0
        @space = 0
        return

    doSort : ->
        @space = @data.length
        starting = window.performance.now()
        n = @data.length
        for i in [n-1..0] by -1
            for j in [n-i..1] by -1
                if @data[j] < @data[j-1]
                    tmp = @data[j];
                    @data[j] = @data[j-1];
                    @data[j-1] = tmp;
        @time = window.performance.now() - starting






