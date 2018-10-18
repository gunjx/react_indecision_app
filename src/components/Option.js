import React from 'react'

/**
 * Show single option and handle function to remove it.
 */
const Option = props => (
  <div>
    {props.option}
    <button onClick={() => (props.handleDeleteOption(props.option))}>
      Remove
    </button>
  </div>
)

export default Option
