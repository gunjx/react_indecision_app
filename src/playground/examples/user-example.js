class User {
    constructor(userName, userAge, userLocation) {
        this.name = userName
        this.age = userAge
        this.location = userLocation
    }
}

const andy = new User('Andreas', 29, 'Aachen, Germany')

// Statements are not permitted in JSX, workaround to add conditional logic  
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

// Use curly braces for js inside html code
// Ternary operator and logical & is allowd in JSX because it is an expression
const templateTwo = (
    <div>
        <h1>{andy.name ? andy.name : 'Anonymous'}</h1>
        {andy.age >= 18 && <p>Age: {andy.age}</p>}
        {getLocation(andy.location)}
    </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
