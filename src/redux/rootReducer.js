import { combineReducers } from 'redux';
// reducers
import directionsWidgetReducer from './DirectionsWidget/directionsWidget.reducer';

const rootReducer = combineReducers({
    directionsWidget: directionsWidgetReducer,
});

export default rootReducer;
