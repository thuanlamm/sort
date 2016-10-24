
mergeSort = (data) ->
    if data.length == 1
        return data
    rv = []
    midpoint = Math.floor data.length / 2
    left = mergeSort data.slice 0, midpoint
    right = mergeSort data.slice midpoint

    while left.length and right.length
        rv.push(if left[0] < right[0] then left.shift() else right.shift())

    rv.concat(left).concat(right)
