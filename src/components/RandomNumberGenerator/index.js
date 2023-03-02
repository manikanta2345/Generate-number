// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {generate: 0}

  getRandomNumber = () => Math.ceil(Math.random() / 100)

  onDecrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({generate: prevState.generate + randomNumber}))
  }

  render() {
    const {generate} = this.state
    //   cont buttonText = generate < randomNumber
    return (
      <div className="bg-container">
        {/* <div className="container"> */}
        <div className="card-container">
          <h1 className="heading">Generate Number</h1>
          <p className="description">
            Generate a number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            type="button"
            onClick={this.onDecrement}
          >
            Generate
          </button>
          <p className="number">{generate}</p>
        </div>
      </div>
      // </div>
    )
  }
}

export default RandomNumberGenerator
