import React from 'react'

/**
 * Display the header.
 */
const Header = props => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
  </div>
)

export default Header

Header.defaultProps = {
  title: 'Indecision'
}
