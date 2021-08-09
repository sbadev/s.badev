import React from 'react'
import { string, shape, bool, func } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import './Button.scss';

const Button = ({ name, icon, isRotated = false, isIconButon = false, handleClick = null, disabled = false }) => {
  return (
    <button className={`custom-button ${isIconButon ? "icon-button" : ""}`} onClick={handleClick} disabled={disabled}>
      <FontAwesomeIcon icon={icon} className='input-icon' rotation={isRotated ? 90 : null} />
      {name}
    </button>
  )
}

Button.propTypes = {
  name: string.isRequired,
  icon: shape().isRequired,
  isRotated: bool,
  isIconButon: bool,
  handleClick: func
}

export default Button
