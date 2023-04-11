function myFunction(num, num1) {
    console.log(num1)
}

let num = 10
let num1 = 2

myFunction(num1, num)

//expected: 10, because the function prints out the second argument, whichin our case is num=10
//got 10