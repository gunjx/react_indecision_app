import React from 'react'

/**
 * Show single option and handle function to remove it.
 */
const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionText}
    </p>
    <button
      className="button button--link"
      onClick={() => props.handleDeleteOption(props.optionText)}
    >
      Remove
    </button>
  </div>
)

export default Option
