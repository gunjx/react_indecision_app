const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}

const onFormSubmit = e => {
  e.preventDefault()

  // Access value from user input
  // onSubmit.target is <form>
  // .elements is a list of all form elements referenced by name
  // .value is the input field value
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option) // push value to options array
    e.target.elements.option.value = '' // clear input field
    rerender()
  }
}

const resetOptions = () => {
  app.options = []
  rerender()
}

// Take random item from options array
const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const rerender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button
        disabled={app.options.length === 0}
        onClick={makeDecision}>What should I do?
      </button>
      <button onClick={resetOptions}>Remove All</button>
      {
        app.options.length <= 0 ? <p>No options</p> : <ol>
          {
            app.options.map(option => <li key={option}>{option}</li>)
          }
        </ol>
      }
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )

  ReactDOM.render(template, appRoot)
}

rerender()
