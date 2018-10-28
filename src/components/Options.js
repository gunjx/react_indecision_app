import React from 'react'
import Option from './Option'

/**
 * Show all current options in the array and handle remove all.
 * Show message to user if options array is empty.
 */
const Options = props => (
  <div>
    <button
    className="button button--link"
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
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

export default Options
