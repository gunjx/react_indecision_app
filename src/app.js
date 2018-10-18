import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
  constructor() {
    this.name = 'Mike'
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hi ${this.name}`
  }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(oldSyntax)
console.log(oldSyntax.getGreeting())
console.log(getGreeting())

class NewSyntax {
  name = 'Jen'
  getGreeting = () => {
    return `Hi ${this.name}`
  }
}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newSyntax)
console.log(newGetGreeting())
