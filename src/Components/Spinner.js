import React, { Component } from 'react' // 👈 This line is missing or broken in your file!
import loadingGif from '../Spinner.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={loadingGif} alt="Spinner" />
      </div>
    )
  }
}

export default Spinner