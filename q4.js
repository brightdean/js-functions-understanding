function myFunction(num) {
    return num - 1
}

let num = 10
let add = 3
add = myFunction(add)
add = myFunction(add)

//expected: num = 10, add = 1

console.log(num)
console.log(add)

//num = 10, add = 1