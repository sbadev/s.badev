import React, { PureComponent } from 'react'
import { string } from 'prop-types'
// styles 
import './Pill.scss';

class Pill extends PureComponent {
  static propTypes = {
    name: string.isRequired
  }

  state = {
    isSelected: false
  }

  handleClick = () => {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }))
  }

  render() {
    return (
      <button
        className={`pill ${this.state.isSelected ? 'pill--selected' : ''} `}
        onClick={this.handleClick}
      >
        {this.props.name}
      </button>
    )
  }
}

export default Pill