import React from 'react'
import App from 'next/app'
import { AppProps } from 'next/app'
import Header from 'next/head'
import { Provider } from 'react-redux'

interface Props {
  store: any
}

function CMApp({ Component, pageProps }: AppProps) {
  console.log('Hey')
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default CMApp
