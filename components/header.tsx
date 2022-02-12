import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions'

type Props = {}

export default function Header({}: Props) {
  const dispatch = useDispatch()
  const authenReducer = useSelector(({ authenReducer }) => authenReducer)
  return (
    <div>
      <h1>Header</h1>
      <button
        onClick={() => {
          dispatch(actions.clear())
        }}
      >
        Clear
      </button>
      <span>{authenReducer.token ? authenReducer.token : ''}</span>
      <span>{authenReducer.token ? authenReducer.user.username : ''}</span>
    </div>
  )
}
