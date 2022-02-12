import React from 'react'
import Layout from '../components/layout'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../redux/actions'

type Props = {}

export default function login({}: Props) {
  const dispatch = useDispatch()
  const authenReducer = useSelector(({ authenReducer }) => authenReducer)
  return (
    <Layout>
      <h1>Login</h1>
      <button
        onClick={() => {
          dispatch(actions.login({ username: 'admin', password: '1234' }))
        }}
      >
        login
      </button>
      <span>{authenReducer.token ? authenReducer.token : ''}</span>
      <span>{authenReducer.token ? authenReducer.user.username : ''}</span>
    </Layout>
  )
}
