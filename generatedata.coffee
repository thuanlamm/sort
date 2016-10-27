class GenerateData
    constructor : () ->

    random: (n) ->
        rv = []
        for i in [1..n]
            rv.push(Math.floor(Math.random() * n))
        return rv

    reversed : (n) ->
        rv = []
        for i in [1..n]
            rv.push(n + Math.floor(Math.random() * (n/10)) - Math.floor(n/20))
        return rv

    sorted : (n) ->
        rv = []
        for i in [1..n]
            rv.push(i + Math.floor(Math.random() * (n/10)) - Math.floor(n/20))
        return rv

    swap : (l, i, j) ->
        temp = l[i]
        l[i] = l[j]
        l[j] = temp

    degree : (l, n, d) ->
        for (i = 0; i < n; i++)
            for j in [i+1..n-1]
                if l[i] > l[j]
                    @swap l, i, j
        for i in [0..n/2]
            if Math.random() > d
                @swap l, i, n-1-i
        return l
