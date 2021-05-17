const Array = require('./index')

function main() {
    Array.SIZE_RATIO = 3

    let arr = new Array()

    arr.push(3)
    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)

    //Array { length: 6, _capacity: 12, ptr: 3 }
    //address: memory[3] - memory [8] (capacity is tripled when array reaches initial capacity)    
    arr.pop()
    arr.pop()
    arr.pop()

    console.log('pop/push: ', arr)

    //print the first item in the array
    console.log('get: ', arr.get(0))

    //Empty the array and add just 1 item: arr.push('tauhida)
    arr.pop()
    arr.pop()
    arr.pop()
    arr.push('tauhida')

    console.log('Empty and push: ', arr.get(0))

    //result is NAN because memory class only accepts arrays of Numbers

    //What is the purpose of the _resize() function in your Array class?
    //It allocates a new larger chunk of memory for the array and copies
    //existing values from the old to new chunk and frees the old one
}

main()
