import React, { Component } from 'react'
import './Image.css'
class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      didLoad: false,
      imgClassName: 'custom-image load-hidden'
    }
  }
  onLoad = () => {
    this.setState({
      didLoad: true
    })
  }
  render() {
    const imagClassName = this.state.didLoad ? 'custom-image load-fadeIn' : 'custom-image load-hidden'
    return (
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <img
          className={imagClassName}
          src={`https://i.imgur.com/${this.props.imgId}.jpg`}
          alt=""
          value={this.props.imgId}
          onLoad={this.onLoad}
          onClick={(e) => this.props.open(e, this.props.imgId)} />
      </div>
    )
  }
}

export default Image

