import React, { Component } from 'react'
import './App.css'
import ImageD from './components/Image'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgurUrl: 'https://imgur.com/',
      images: [
        'cNL1wN2', 'KETNjDo', 'fcCymkA', 'kq7ppN4', 'saKHloY',
        'JVZONyU', '4M3IXzx', '6iEKkYL', 'bqwwZ9A', 'sJSazUZ',
        'OuVHBI6', 'OyZEcok', 'cXpigjf', 'ItXAhWu', 'bG60tGT',
        'eJqQFbx', 'plGafHT', 'Fo4QCKz', 'E6Of2sM', 'Rir88ZI',
        '5j7QTSe', 'cTZYMhr', 'zyHCjAb', 'f7Qrgq5'
      ],
      modal: 'modal',
      currentImgId: ''
    }
  }
  close = () => {
    this.setState({ modal: 'modal'})
  }
  open = (event, imgId) => {
    event.preventDefault()
    this.setState({
      modal: 'modal is-active is-clipped',
      currentImgId: imgId
    })
  }
  render() {
    const imageList = this.state.images.map((imgId, index) => <ImageD imgId={imgId} key={index} open={this.open}/>)
    return (
      <div className="App">
        <Header />
        <ul>
          {imageList}
        </ul>
        <div className={this.state.modal}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <p className="image is-11">
              <img src={`https://i.imgur.com/${this.state.currentImgId}.jpg`} alt="" />
            </p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.close}></button>
        </div>
      </div>
    )
  }
}

export default App

