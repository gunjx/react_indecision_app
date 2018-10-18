// An app that decides randomly over a set of options specified by the user
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = { options: [] }
  }
  // When the page loads,
  // get the options array from local storage and populate the state
  componentDidMount() {
    // Catch error of JSON.parse in case of invalid data
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      // Only persist options if not empty
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing
    }
  }
  // After the page is updated,
  // save the options array to the local storage for data persistency
  componentDidUpdate(prevProps, prevState) {
    // Check if options array actually changed
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  // Delete the complete options array from the state
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }
  // Delete a single option from the options array in the state
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      // Keep everything that is not the optionToRemove
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }
  // Choose randomly among a set of options and alert to the screen
  handlePick() {
    this.setState(() => {
      const randomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[randomNum]
      return alert(option)
    })
  }
  // Add an option to the options array
  handleAddOption(option) {
    // Add input validation
    if (!option) {
      return 'Enter valid value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer'
    // Pass data and handle functions to child components
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

// Display the header
const Header = props => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
)

Header.defaultProps = {
  title: 'Indecision'
}

// Dispatch random options picked with a button click
const Action = props => (
  <div>
    <button
      disabled={!props.hasOptions}
      onClick={props.handlePick}>
      What should I do?
    </button>
  </div>
)

// Show all current options in the array and handle remove all
// Show message to user if options array is empty
const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        key={option}
        option={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
)

// Show single option and handle function to remove it
const Option = props => (
  <div>
    {props.option}
    <button onClick={() => (props.handleDeleteOption(props.option))}>
      Remove
    </button>
  </div>
)

// Add option to the options array in state
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = { error: undefined }
  }
  handleAddOption(e) {
    // Prevent page reload
    e.preventDefault()
    // Take value from input field after button is pressed
    // Trim whitespace around the value
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    // Error is set or cleared in state (for display)
    this.setState(() => ({ error }))
    // Clear input field if there was no error
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  // Show error message and add options input field
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Options</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
