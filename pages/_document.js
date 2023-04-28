import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='overflow-x-hidden selection:!bg-pink-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
