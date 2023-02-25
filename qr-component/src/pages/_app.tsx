import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import darkDefaultTheme from '@/styles/themes/default-dark'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkDefaultTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
