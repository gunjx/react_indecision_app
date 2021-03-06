import React from 'react'

/**
 * Add option to the options array in state.
 */
export default class AddOption extends React.Component {
  state = { error: undefined }

  handleAddOption = e => {
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
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}
        <form className="add-option__form" onSubmit={this.handleAddOption}>
          <input
            className="add-option__form__input"
            type="text"
            name="option"
          />
          <button className="button">Add Options</button>
        </form>
      </div>
    )
  }
}
