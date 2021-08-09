import * as types from './directionsWidget.types'

const initialState = {
  destinationOptionsAreExpanded: false,
  startingPoint: "Current Location",
  destination: "",
  destinationSecondary: ""
}

const directionsWidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DESTINATION_OPTIONS_EXPAND_COLLAPSE:
      let startingPoint = state.startingPoint;
      let destination = state.destination;
      let destinationSecondary = state.destinationSecondary;

      if (state.destinationOptionsAreExpanded) {
        startingPoint = "Current Location";
        destination = "";
        destinationSecondary = "";
      }

      return {
        ...state,
        destinationOptionsAreExpanded: !state.destinationOptionsAreExpanded,
        startingPoint,
        destination,
        destinationSecondary
      }
    case types.SWAP_STARTING_POINT_AND_DESTINATION_VALUES:
      return {
        ...state,
        startingPoint: state.destination,
        destination: state.startingPoint
      }
    case types.HANDLE_DESTINATION_OPTIONS_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload
      }
    default: return state
  }
}

export default directionsWidgetReducer
