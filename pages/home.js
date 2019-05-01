import Layout from '../components/CommonLayout.js';
import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import review1 from '../media/review1.png';
import review2 from '../media/review2.png';
import review3 from '../media/review3.png';
import callinfo from '../media/callinfo-min.jpg';

//"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45747809_1120003664819299_1371238935690215424_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=3f3186c4e76bce8615ddf4c08434730a&oe=5D376C81"

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
                <button onClick={() => Router.push('/inventory')}>
                  VIEW INVENTORY</button>
              </div>
              </div>
              </div>
          <div className="video-replacement">
            <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45747809_1120003664819299_1371238935690215424_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=3f3186c4e76bce8615ddf4c08434730a&oe=5D376C81" />
          </div>
          <div className="video">
            <iframe
              frameBorder='0'
              allowFullScreen
              width='100%'
              height='100%'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              src='https://www.youtube.com/embed/mStyEmelA8s?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=mStyEmelA8s&amp;mute=1' //'https://www.youtube.com/embed/mStyEmelA8s?rel=0&autoplay=1&loop=1&controls=0&showinfo=0&modestbranding=0&mute=1'
            ></iframe>
          </div>
        </div>
        <div className="sub-video-content">
        <b>SAME ADVENTURE.</b>
        <p><b>LESS CASH.</b></p>
        </div>
        <p className="sub-video-content-info">We specialize in high-end rebuilt title vehicles. We take special care to ensure that each vehicle is in 
        pristine condition, not to mention make it look dope AF.</p>

        <div className="map-section">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4195.369502782758!2d-111.89997651897639!3d40.68696102160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be42346c907%3A0xa848298ed2013672!2sStrickland+Auto!5e0!3m2!1sen!2sus!4v1555624627847!5m2!1sen!2sus">
          </iframe>
          <div className="call-info-container">
          <img src={callinfo} />
          <div className="call-info-overlay"></div>
          <div className="call-info">          
            <a href="tel:+1-801-885-1611">
              Call or text to test drive today!
                <p><b>801.885.1611</b></p>
            </a>
          </div>
          </div>
        </div>
        
        <div className="divider"></div>
        <div className="reviews-header">
          WE PUT OUR CUSTOMERS FIRST - AND IT SHOWS!
          <br></br>
        </div>
        <div className="review-wrapper">
          <img className="reviews" src={review1} />
          <img className="reviews" src={review3} />
          <img className="reviews" src={review2} />
        </div>
        <div className="view-more">
          <p><a href="https://www.facebook.com/pg/StrickAuto/reviews/?ref=page_internal">VIEW MORE REVIEWS</a></p>
        </div>




        <style jsx>{`
    * {padding:0;margin:0;box-sizing:border-box;}
      .center-fit {
        max-width: 100%;
        max-height: 100vh;
        margin: auto;
      }
      .video-replacement {
        display: none;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      .video-replacement img {
        background-size: contain;
        width: 100%;
        height: auto;
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
        margin-top: 10vh;
        width: 100%;
        height: auto;
        padding: 16px;
        text-align: center;
        font-size: 3vw;
        background-color: rgba(255,255,255,0.6);
      }
      .video-overlay-container button {
        position: relative;
        background-color: #0000FF;
        border: none;
        color: white;
        padding: 14px 30px;
        text-align: center;
        font: 12px arvo;
        display: inline-block;
        opacity: 0.8;
      }
      .video-overlay-container button:hover {
        cursor: pointer;
        opacity: 1;
      }

      .sub-video-content {
        display: block;
        width: 100%;
        height: auto;
        text-align: left;
        padding: 10px;
        font-size: 5vw;
        background: rgb(220, 220, 220);
      }
      .sub-video-content-info {
        display: block;
        width: 100%;
        height: auto;
        text-align: right;
        padding: 50px 20px 50px 20vw;
        font-size: 3vw;
        background: rgb(201, 201, 201);
      }

      .divider {
        margin-top: 35px;
        display: block;
        height: 1px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: #202020;
        opacity: 0.9;
        display: none;
      }

      .map-section {
        display: grid;
        grid-template-columns: 60% 40%
      }
      .map {
        display: block;
        width: 100%; 
        height: 100%;
        allowfullscreen: true;
      }
      .call-info-container {
        position: relative; 
        max-width: 100%;
        margin: 0 auto; /* Center it */
      }
      .call-info-container img {
        width: 100%;
        height: auto;
      }
      .call-info-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(200, 0, 0, 0.5);
        width: 100%;
        height: 100%;
      }
      .call-info {
        position: absolute;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 15px;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        border-radius: 3px;
        font-size: 20px;
        text-transform: uppercase;
        opacity: 0.9;
      }
      .call-info a {
        text-decoration: none;
        color: white;
        opacity: 0.9;
      }
      .call-info:hover, call-info a:hover {
        cursor: pointer;
        opacity: 1;
      }


      .review-wrapper {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        grid-gap: 15px;
      }
      .reviews {
        display: block;
        width: 100%;
        margin-top: 8px;
        padding: 5px;
        border-style: solid;
        border-width: 1px;
        border-color: #D3D3D3;
        border-radius: 3px;
      }
      .reviews-header {
        display: block;
        margin-bottom: 10px;
        text-align: center;
        font-size: 3vw;
        padding: 5vh 5vw;
        background-color: #333;
        color: white;
      }

      .view-more {
        margin-top: 20px;
        text-align: center;
        padding: 15px;
        font-size: 2vw;
        background: rgb(201, 201, 201);
      }

      @media only screen and (max-width: 1000px){
        .review-wrapper {
          display: block;
        }
      }

      @media only screen and (max-width: 700px){
        .video-wrapper {
          margin-top: -50px;
        }
      }

      @media screen and (max-width: 600px) {
        .map-section {
          display: block;
        }
        .video-replacement {
          display: block;
        }
        .video {
          display: none;
        }

      }

    `}</style>
      </Layout>
    );
  }
}
export default withRouter(Home);