import Document, { Head, Main, NextScript } from 'next/document'
import img from '../media/favicon_tab.ico'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  

  render () {
    return (
      <html>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
          <link rel='icon' href={img} />
          <link href="https://fonts.googleapis.com/css?family=Arvo:300,400,700,800" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}