import { combineReducers} from 'redux'
import authReducer from './authen.reducer';

const rootReducer = combineReducers({
  authentication : authReducer,
})

export default rootReducer