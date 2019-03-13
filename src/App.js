import React, { Component } from 'react'
import './App.css'
import ImageD from './components/Image'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgurUrl: 'https://imgur.com/',
      columnHori: [
        'cNL1wN2', 'KETNjDo', 'fcCymkA', 'kq7ppN4',
        'JVZONyU', '4M3IXzx', '6iEKkYL', 'bqwwZ9A',
        'OuVHBI6', 'OyZEcok', 'cXpigjf', 'ItXAhWu',
        'eJqQFbx', 'plGafHT', 'Fo4QCKz', 'E6Of2sM',
        '5j7QTSe', 'cTZYMhr', 'zyHCjAb', 'f7Qrgq5'
      ],
      columnVert: ['saKHloY', 'sJSazUZ', 'bG60tGT', 'Rir88ZI'],
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
    const columnHori = this.state.columnHori.map((imgId, index) => <ImageD imgId={imgId} key={index} open={this.open} />)
    const columnVert = this.state.columnVert.map((imgId, index) => <ImageD imgId={imgId} key={index} open={this.open}/>)
    return (
      <div className="App">
        <Header />
        <div className="columns is-gapless is-multiline">
          {columnHori}
        </div>
        <div className="columns is-gapless is-multiline">
          {columnVert}
        </div>
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

