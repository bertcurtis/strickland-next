import Layout from '../components/CommonLayout.js'
import img from '../img/logo.webp'

/*
<div class='imgbox'>
      <img class='center-fit' src={img}/>
    </div>*/
export default () => (
  <Layout title='Strickland Auto'>
    <h1>Strickland Auto</h1>
    <style jsx>{`
      .center-fit {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;
      }
      .imgbox {
        display: grid;
        height: 100%;
      }
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