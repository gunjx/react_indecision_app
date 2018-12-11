import React from 'react'

/**
 * Dispatch random options picked with a button click.
 */
const Action = props => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      What should I do?
    </button>
  </div>
)

export default Action
