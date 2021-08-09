import React, { PureComponent } from 'react'
import { func, shape, bool } from 'prop-types'
import { connect } from 'react-redux';
// components 
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import Pill from '../Common/Pill/Pill';
// icons 
import { faDotCircle, faMapMarkerAlt, faExchangeAlt, faArrowLeft, faPlusCircle, faCompass } from '@fortawesome/free-solid-svg-icons';
import { faCompass as farCompass, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
// styles 
import './DirectionsWidget.scss';
// actions
import * as directionsWidget from '../../redux/DirectionsWidget/directionsWidget.actions';

class DirectionsWidget extends PureComponent {
  static propTypes = {
    toggleDestinationOptionsExpandCollapse: func.isRequired,
    swapStartingPointAndDestinationValues: func.isRequired,
    directionsWidget: shape({
      destinationOptionsAreExpanded: bool
    })
  }

  state = {}

  render() {
    const { destinationOptionsAreExpanded, startingPoint, destination, destinationSecondary } = this.props.directionsWidget

    return (
      <div className='widget-container'>
        <div className='directions-widget-container'>
          <div className='button-container button-container--padded-top-s'>
            <Button name='' icon={faArrowLeft} isIconButon />
          </div>
          <div className='directions-widget-inputs-container'>
            <Input
              inputType="startingPoint"
              placeholder="Choose starting point"
              icon={faDotCircle}
              additionalInputButtonIsVisible={destinationOptionsAreExpanded}
              value={startingPoint}
              handleInputChange={this.props.handleDestinationOptionInputChange}
            />
            <Input
              inputType="destination"
              placeholder="Choose destination"
              icon={destinationOptionsAreExpanded ? faCompass : faMapMarkerAlt}
              additionalInputButtonIsVisible={destinationOptionsAreExpanded}
              additionalInputButtonIcon={faTimesCircle}
              additionalInputButtonAction={this.props.toggleDestinationOptionsExpandCollapse}
              value={destination}
              handleInputChange={this.props.handleDestinationOptionInputChange}
            />
            {destinationOptionsAreExpanded &&
              <Input
                inputType="destinationSecondary"
                placeholder="Choose destination"
                icon={farCompass}
                additionalInputButtonIsVisible={destinationOptionsAreExpanded}
                additionalInputButtonIcon={faTimesCircle}
                additionalInputButtonAction={this.props.toggleDestinationOptionsExpandCollapse}
                value={destinationSecondary}
                handleInputChange={this.props.handleDestinationOptionInputChange}

              />
            }
          </div>
          {!destinationOptionsAreExpanded &&
            <div className='button-container button-container--centered'>
              <Button
                name=''
                icon={faExchangeAlt}
                isRotated
                isIconButon
                handleClick={this.props.swapStartingPointAndDestinationValues}
              />
            </div>
          }
        </div>
        <div className='button-container button-container--padded-left-l'>
          <Button
            name='Add destination'
            icon={faPlusCircle}
            handleClick={this.props.toggleDestinationOptionsExpandCollapse}
            disabled={destinationOptionsAreExpanded}
          />
        </div>
        <div className='pills-container'>
          <Pill name='Bus Stops' />
          <Pill name='Attractions' />
          <Pill name='Parks' />
          <Pill name='Museums' />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    directionsWidget: state.directionsWidget
  };
}

function mapDispatchToProps(dispatch) {
  return (
    {
      toggleDestinationOptionsExpandCollapse: () => dispatch(directionsWidget.toggleDestinationOptionsExpandCollapse()),
      swapStartingPointAndDestinationValues: () => dispatch(directionsWidget.swapStartingPointAndDestinationValues()),
      handleDestinationOptionInputChange: (field, value) => dispatch(directionsWidget.handleDestinationOptionInputChange(field, value))
    }
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectionsWidget);