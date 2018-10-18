// Argument object no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments)
    return a + b
}
console.log(add(55, 1, 1001))

// Use of ES6 method definition and arrow function
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city) // this-value takes value of parent in arrow functions
        })
    }
}

user.printPlacesLived()

// Use of map method in stead of forEach loop
const user2 = {
name: 'Andreas',
    cities: ['Ilsfeld', 'Stuttgart', 'Köln'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}

console.log(user2.printPlacesLived())

// Challenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())
