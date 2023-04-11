function myFunction(num) {
    return num - 1
}

let num = 10
num = myFunction(num)
num = myFunction(num)

//expected: 8

console.log(num)

//got 8 yeah!!