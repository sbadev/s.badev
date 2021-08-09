import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// components
import DirectionsWidget from './DirectionsWidget/DirectionsWidget';
// styles
import './App.scss';

class App extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="app-container">
        <DirectionsWidget />
        <h1>Row1</h1>
        <h1>Row2</h1>
        <h1>Row3</h1>
        <h1>Row4</h1>
        <h1>Row5</h1>
        <h1>Row6</h1>
      </div>
    );
  }
}

export default App