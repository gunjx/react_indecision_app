const add = (a, b) => a + b

// Global test function. Expects string as first argument and arrow function as second argument
test('should add two numbers', () => {
  const result = add(3, 4)

  if (result !== 7) {
    throw new Error(`You added 4 and 3. The result was ${result}. Expec 7`)
  }
})
