import Header from './Header'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        <div>   
            {props.children}
        </div>
        <style jsx global>{`
        body { 
            font: 13px menlo;
            margin: 0;
            padding: 0;
        }
        `}</style>     
    </div>
)

export default Layout