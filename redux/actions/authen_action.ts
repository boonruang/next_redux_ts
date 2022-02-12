import { LOGIN } from "../types";
import { Account } from '../../types/Account';
// rxaction
export const setLoginReducer = (payload) => ({
  type: LOGIN,
  payload
})

export const login({username, password}:Account) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(setLoginReducer( {username, token : '1234'}))   
        })
    }
}
