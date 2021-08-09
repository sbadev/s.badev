import React, { PureComponent } from 'react'
import { string, shape, bool, func } from 'prop-types'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
// styles
import './Input.scss';

class Input extends PureComponent {
  static propTypes = {
    inputType: string.isRequired,
    placeholder: string,
    icon: shape(),
    additionalInputButtonIsVisible: bool,
    additionalInputButtonIcon: shape(),
    additionalInputButtonAction: func,
    value: string,
    handleInputChange: func.isRequired
  }

  static defaultProps = {
    placeholder: '',
    icon: null,
    additionalInputButtonIsVisible: false,
    additionalInputButtonIcon: {},
    additionalInputButtonAction: null,
    value: ''
  }

  handleInputChange = event => {
    this.props.handleInputChange(this.props.inputType, event.target.value)
  }

  render() {
    return (
      <div className='input-container'>
        {this.props.icon && this.props.inputType !== 'startingPoint' && <FontAwesomeIcon icon={faEllipsisV} className='input-icon-trail' />}
        {this.props.icon && <FontAwesomeIcon icon={this.props.icon} className='input-icon' />}
        <input
          type='text'
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.handleInputChange}
        />
        {this.props.additionalInputButtonIsVisible &&
          <div className='input-additional-button-container'>
            <button
              className='input-additional-button'
              onClick={this.props.additionalInputButtonAction}
            >
              {this.props.additionalInputButtonAction &&
                <FontAwesomeIcon
                  icon={this.props.additionalInputButtonIcon}
                  className='input-icon'
                />
              }
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Input