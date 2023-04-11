let counter = 1

function myFunction() {
    counter++
    return counter
}

myFunction()
const num = myFunction()

//expected: 3

console.log(counter)

//got 3