class Animal
    constructor:(@petType, @petName, @x)->
        @sleep = false
        @dx=1
        @health=10
        return

    walk:->
        @x += @dx
        if @x == 0 || @x==11
            @dx = -@dx
            @health--

    isTired:->@health == 0

    collide:(animal)->
        animal.x == @x && !animal.sleep && !@sleep

    show:->
        console.log "#{@petType} #{@petName} is at #{@x}"

    rest:->
        if !@sleep
            console.log "#{@petType} #{@petName} takes a break at #{@x}"
        @sleep = true

    greeting:(other)->
        console.log "#{@petType} #{@petName}: 'Hello #{other.petType} #{other.petName}. We are in #{@x}.'"

class Cat extends Animal
    constructor:(petName, x)->
        super("Cat", petName, x)
        return

    #override
    walk:->
        console.log "> walk <"
        super()

class Dog extends Animal
    constructor:(petName, x)->
        super("Dog", petName, x)
        return

    run:->
        for i in [1..3]
            this.walk()

class Horse extends Animal
    constructor:(petName, x)->
        super("Horse", petName, x)
        return

    gallop:->
        for i in [1..6]
            this.walk()

cat = new Cat("mimi", 2)
dog = new Dog("kiki", 0)
cat2 = new Cat("meomeo", 5)
animals = [cat, dog, cat2, new Horse("hehe", 9)]

###
while !cat.isTired()
    cat.walk()
    cat.show()

allTired =(array) ->
    all = true
    while all && pet for pet in array
        if !pet.isTired()
            all=false
    return all

while !cat.isTired || !dog.isTired()
    cat.walk();
    dog.run()
    cat.show()
    dog.show()

    if cat.collide(dog)
        cat.greeting(dog)
###

atLeastMe = true
pet.show() for pet in animals
console.log "-----------------"

while atLeastMe
    atLeastMe = false
    for pet in animals
        if pet.isTired()
            pet.rest();
        else
            atLeastMe = true
            switch pet.petType
                when "Cat"
                    pet.walk()
                when "Dog"
                    pet.run()
            pet.show()
            for other in animals
                if other != pet && pet.collide(other)
                    pet.greeting(other)
