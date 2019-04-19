import Layout from '../components/CommonLayout.js';
import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Home extends Component {
  render() {
    return (
      <Layout title='Strickland Auto'>
        <div className='video-wrapper'>
          <div className="click-intercept">
            <div className="video-overlay-container">
              <div>
                <h1>STRICKLAND AUTO</h1>
                <p>WHERE VALUE MEETS QUALITY</p>
              </div>
            </div>
          </div>
          <div className="video">
            <iframe
              frameBorder='0'
              allowFullScreen
              width='100%'
              height='100%'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              src='https://www.youtube.com/embed/nvz8v2f99H8?autoplay=1&loop=1&rel=0&controls=0&showinfo=0&modestbranding=1&playlist=nvz8v2f99H8&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=1&enablejsapi=1&origin=https%3A%2F%2Fstrickland-web.herokuapp.com/'
            ></iframe>
          </div>
        </div>

        <style jsx>{`
    * {padding:0;margin:0;box-sizing:border-box;}
      .center-fit {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;
      }
      .video-wrapper {
        display: grid;
        height: 100%;
        grid-template-columns: auto;
        margin-top: -10px;
      }
      .video {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        z-index: 1;
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
      }     
      .video iframe {
      	position: absolute;
      	top: 0;
      	left: 0;
      	width: 100%;
      	height: 100%;
      }
      .click-intercept {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        z-index: 2;
      }
      .video-overlay-container {
        position: absolute;
        top: 1;
        margin-top: 28vh;
        width: 100%;
        height: 25%;
        padding: 16px;
        text-align: center;
        font-size: 3vw;
        background-color: rgba(255,255,255,0.6);
      }

      @media only screen and (max-width: 700px){
        .video-wrapper {
          margin-top: -50px;
        }
      }
    `}</style>
      </Layout>
    );
  }
}
export default withRouter(Home);