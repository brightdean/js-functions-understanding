function myFunction(num1) {
    if(true) {
      return -10
    }
  
    return num1 * 10
  }
  
  const result = myFunction(5)

  //expected -10 because the first statement will always execute since its always true

  console.log(result)

  //got -10