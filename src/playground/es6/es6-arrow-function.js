function square(x) {
    return x * x
}

// Arrow function with regular syntax
const squareArrow1 = (x) => {
    return x * x
}

// Arrow function with expression syntax
const squareArrow2 = (x) => x * x

console.log(square(8))
console.log(squareArrow1(8))
console.log(squareArrow2(8))

// Regular vs expression syntax using function expressions
const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}
console.log(getFirstName('Mike Smith'))

const getFirstNameArrow = (fullName) => fullName.split(' ')[0]
console.log(getFirstNameArrow('Mike Smith'))
