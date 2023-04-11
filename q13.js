function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    const num2 = getSomeValue()
    return num1 * getSomeValue()
  }
  
  const result = myFunction(5)

  //expected 10 because num2 is not used at all, so we have 5 * 2

  console.log(result)

  //got 10