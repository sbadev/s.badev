import * as types from './directionsWidget.types'

export const toggleDestinationOptionsExpandCollapse = () => {
  return { type: types.TOGGLE_DESTINATION_OPTIONS_EXPAND_COLLAPSE }
};

export const swapStartingPointAndDestinationValues = () => {
  return { type: types.SWAP_STARTING_POINT_AND_DESTINATION_VALUES }
};

export const handleDestinationOptionInputChange = (field, value) => {
  return {
    type: types.HANDLE_DESTINATION_OPTIONS_INPUT_CHANGE,
    payload: { [field]: value }
  }
}