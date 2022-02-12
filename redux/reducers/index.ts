import { combineReducers} from 'redux'
import authenReducer from './authen.reducer';

const rootReducer = combineReducers({
  authenReducer,
})

export default rootReducer