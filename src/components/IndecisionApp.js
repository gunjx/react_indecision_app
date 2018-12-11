import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

/**
 * An app that decides randomly over a set of options specified by the user.
 */
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // Delete the complete options array from the state
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  };

  // Delete a single option from the options array in the state
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      // Keep everything that is not the optionToRemove
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  };

  // Choose randomly among a set of options and alert to the screen
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }))
  };

  // Add an option to the options array
  handleAddOption = option => {
    // Add input validation
    if (!option) {
      return 'Enter valid value to add option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  };

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

  render() {
    const subtitle = 'Put your life in the hands of a computer'

    // Pass data and handle functions to child components
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}
