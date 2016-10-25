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
