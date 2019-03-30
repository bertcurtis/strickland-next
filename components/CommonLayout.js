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
            font: 13px arvo;
            margin: 0;
            padding: 0;
            -webkit-animation-delay: 0.1s;
            -webkit-animation-name: fontfix;
            -webkit-animation-duration: 0.1s;
            -webkit-animation-iteration-count: 1;
            -webkit-animation-timing-function: linear;
        }
        .main {
            margin-top: 50px;
        }
        
        @-webkit-keyframes fontfix {
            from { opacity: 1; }
            to   { opacity: 1; }
        }
        `}</style>     
    </div>
)

export default Layout