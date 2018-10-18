var nameVar = 'Andreas'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Sam'
    return petName
}

// Block scoping
var fullName = 'Andreas Spannagel'
let lastName

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
    lastName = fullName.split(' ')[1]
    console.log(firstName)
}

// firstName is still defined outside of curly braces --> error prone
console.log(firstName)

// lastName was defined before the curly braces and then reassigned
console.log(lastName)