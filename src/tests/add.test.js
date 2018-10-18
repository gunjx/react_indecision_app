const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

// Global test function. Expects string as first argument and arrow function as second argument.
test('should add two numbers', () => {
  const result = add(3, 4)

  // Pass value that the assertion is made about and call one of many assertion methods.
  // Use toBe to test for equality of strings or numbers
  expect(result).toBe(7)
})

test('should generate greeting from name', () => {
  const result = generateGreeting('Mike')
  expect(result).toBe('Hello Mike')
})

test('should generate greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous')
})
