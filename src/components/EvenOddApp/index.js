// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    randomNumber: 0,
    text: 'Even',
  }

  generateNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const newRandomNumber = this.generateNumber()
    this.setState({randomNumber: newRandomNumber})
    this.setState({text: newRandomNumber % 2 === 0 ? 'Even' : 'Odd'})

    console.log(newRandomNumber)
  }

  render() {
    const {randomNumber, text} = this.state
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {randomNumber}</h1>
          <p className="description">Count is {text}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="instruction">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
