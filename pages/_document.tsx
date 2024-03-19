import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head />
      <body className='min-h-screen min-w-full bg-gradient-to-r from-light-gradient-first to-light-gradient-second'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
