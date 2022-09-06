function wrap<T>(value: T): T {
    return value
}

const output = wrap('하' + 2)
console.log(output) // hello

//
interface Woman { // interface의 type은 Object type
    name: string
}

const woman: Woman = {name: 'Hera'}
const woman2 = wrap(woman)
console.log(woman, woman2)
console.log(woman === woman2) // true

// interface + generic <T>
interface Item<T> {
    id: number
    data: T
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: { // Animal type
        name: 'cat'
    }
}

const placeItem: Item<Place> = {
    id: 2,
    data: {
        location: 'seoul'
    }
}

// type + generic <T>
type Product<T> = {
    id: number
    data: T
}

class Queue<T> {
    list: T[] = []

    get length() {
        return this.list.length
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift()
    }
}

const queue = new Queue<number>() 
// queue - Queue type
// item - number type

queue.enqueue(0)
queue.enqueue(1)

let val2 = queue.dequeue() // 0
val2 = queue.dequeue()     // 1
console.log(val2)