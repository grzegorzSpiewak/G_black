import { combineReducers } from 'redux';
import menu from './menu/reducers';
import intro from './intro/reducers';
import content from './fetchContent/reducers';
import assets from './fetchAssets/reducers';

const rootReducer = combineReducers({
  menu,
  intro,
  content,
  assets
});

export default rootReducer;
