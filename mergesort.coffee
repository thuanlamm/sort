class MergeSort
    constructor : (@data) ->
        @time = 0
        @space = 0
        return

    doSort : ->
        starting = window.performance.now()
        for t in [1..5]
            temp = @merge(@data)
        @time = (window.performance.now() - starting) / 5
        @data = temp
        return

    merge : (data) ->
        return data if data.length is 1
        @space = @space + data.length
        rv = []
        midpoint = Math.floor data.length / 2
        left = @merge data.slice 0, midpoint
        right = @merge data.slice midpoint

        while left.length and right.length
            rv.push(if left[0] < right[0] then left.shift() else right.shift())

        rv.concat(left).concat(right)
