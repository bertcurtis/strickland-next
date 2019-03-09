import Layout from '../components/CommonLayout.js'
import img from '../img/logo.webp'

export default () => (
  <Layout>
    <h1>Strickland Auto</h1>
    <img src={img}/>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)