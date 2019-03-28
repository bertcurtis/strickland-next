import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <div className='main'>   
            {props.children}
        </div>
        <style global jsx>{`
        body { 
            font: 13px menlo;
            margin: 0;
            padding: 0;
        }
        .main {
            margin-top: 50px;
        }
        `}</style>     
    </div>
)

export default Layout