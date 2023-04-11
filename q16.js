function myFunction(num1) {
    if(false) {
      return -100
    }
  
    return num1 * 10
  }
  
  const result = myFunction(5)

  //expected 50 because the first return statement will never be executed

  console.log(result)

  //got 50