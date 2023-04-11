function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * num2
  }
  
  const result = myFunction(5)

  //expected 10

  console.log(result)

  //got 10