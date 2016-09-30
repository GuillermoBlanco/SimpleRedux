import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';
import fellows from './fellows';

export default combineReducers({
  routing,
  app,
  fellows,
});
