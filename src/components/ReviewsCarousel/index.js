// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  increment = () => {
    this.setState(prevState => {
      if (prevState.id + 1 >= 4) return prevState
      return {id: prevState.id + 1}
    })
  }

  decrement = () => {
    this.setState(prevState => {
      if (prevState.id - 1 < 0) return prevState
      return {id: prevState.id - 1}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const val = reviewsList[id]
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="header">Reviews</h1>
          <img src={val.imgUrl} alt={val.username} />
          <div className="cont-3">
            <button
              className="arrow-btn"
              type="button"
              onClick={this.decrement}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="cont-4">
              <p className="name">{val.username}</p>
              <p>{val.companyName}</p>
            </div>
            <button
              className="arrow-btn"
              type="button"
              onClick={this.increment}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="para">{val.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
