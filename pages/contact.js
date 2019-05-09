import Layout from '../components/CommonLayout.js'
import Social from '../components/Social.js'
import truck from '../media/truck.jpg';
import logo from '../media/logo.webp';

const Contact = () => (
  <Layout title='Contact Us'>
    <div className="info-section">
      <img className="info-section-img" src={logo} />
      <div className="info-container">
        <div className="contact-info">
          <div className="contact-link1"><a href="tel:+1-801-885-1611">
            <b>CALL US NOW AT 801.885.1611</b></a>
          </div>
          <div className="contact-link2"><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2FStrickAuto%3Ffbclid%3DIwAR39wQ0cJWezvymA3Es01Vgn3mmsbHX9i6NJViQrLmgc6eMC257Uja9xs_4&amp;h=AT0XIwNT1O52OCY3C9oW_x1cDnMcscehyuyLtAsYMDFN34AAVI87DEJbQfsCEXoja5PtlQFvz_3b1A8A1ynlEvH3RN2ewHHmgPV1svB8WBGotsC5xIoo8W-iVWwMO7U-4kC8C5fUuYgofBTCEJu_wg" target="_blank">
            <b>MESSAGE US ON FACEBOOK</b></a>
          </div>
        </div>
        <div className="hours-info">
          <p><b><i>HOURS OF OPERATION: </i></b></p>
          <p>Monday: 9:00 AM - 6:30 PM</p>
          <p>Tuesday: 9:00 AM - 6:30 PM</p>
          <p>Wednesday: 9:00 AM - 6:30 PM</p>
          <p>Thursday: 9:00 AM - 6:30 PM</p>
          <p>Friday: 9:00 AM - 6:30 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM </p>
          <p>Sunday: CLOSED</p>
        </div>
      </div>
      <div className="truck">
        <img src={truck} />
      </div>
    </div>
    <div className="map-section">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4195.369502782758!2d-111.89997651897639!3d40.68696102160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be42346c907%3A0xa848298ed2013672!2sStrickland+Auto!5e0!3m2!1sen!2sus!4v1555624627847!5m2!1sen!2sus">
      </iframe>
      <div className="address-container">
      <h1>COME VISIT US AT</h1>
        <div className="address">
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4195.369502782758!2d-111.89997651897639!3d40.68696102160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be42346c907%3A0xa848298ed2013672!2sStrickland+Auto!5e0!3m2!1sen!2sus!4v1555624627847!5m2!1sen!2sus">
            <p>3908 S Howick St Millcreek, Utah</p></a>
        </div>
      </div>
    </div>
    <Social />

    <style jsx>{`
      .info-section {
        position: relative;
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: 45vh;
        z-index: 0;
        margin-bottom: 10px;
      }
      .info-section-img {
        margin-top: 0.7vh;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        width: auto;
        height: 99%;
        opacity: 0.5;

      }
      .info-container {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        display: grid;
        grid-template-columns: 55% 45%;
        background-color: #0000FF;     
        opacity: 0.7;  
        z-index: 2;
      }
      .contact-info {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: 50% 50%;
        grid-gap: 25px;
        padding: 25px;
        font-size: 2vw;
        color: white;
      }
      .contact-link1 {
        padding: 15px;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        border-radius: 3px;
        height: 50%;
        width: 80%;
        opacity: 0.8;
        margin-top: auto;
        margin-left: auto;
        display: flex;
        align-items: center;
        align-text: center;
      }
      .contact-link2 {
        padding: 15px;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        border-radius: 3px;
        height: 50%;
        width: 80%;
        opacity: 0.8;
        margin-bottom: auto;
        margin-left: auto;
        display: flex;
        align-items: center;
        align-text: center;
      }
      .contact-info a {
        text-decoration: none;
        color: white;
      }
      .contact-link:hover {
        cursor: pointer;
        opacity: 1;
      }
      .contact-link2:hover {
        cursor: pointer;
        opacity: 1;
      }
      .hours-info {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        text-align: center;
        font-size: 1.1vw;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 3vw;
        height: auto;
        width: 80%;
        opacity: 0.8;
        color: white;
      }

      .truck {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        margin-top: 0.7vh;
      }

      .truck img {
        object-fit: cover;
        display: block;
        width: 100%;
        height: 100%;
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
        mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
        opacity: 0.8;
      }

      .map-section {
        display: grid;
        z-index: 5;
        top: 0;
      }
      .map {
        display: block;
        width: 99.4%;
        height: 50vh;
        allowfullscreen: true;
      }
      .address-container {
        background-color: darkgrey;
      }
      .address-container h1 {
        color: white;
        text-align: center;
        padding: 40px;
        margin-top: 20px;
      }
      .address {
        position: relative; 
        max-width: 80%;
        text-align: center;
        padding: 15px;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        border-radius: 3px;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        font-size: 2vw;       
        opacity: 0.7;
      }
      .address a {
        text-decoration: none;
        color: white;
      }

      .address:hover {
        cursor: pointer;
        opacity: 1;
      }

      @media only screen and (max-width: 700px){
        .map-section {
          display: block;
        }
        .info-section {
          display: block;
        }
        .address {
          display: none;
        }
        .info-container {
          display: block;
        } 

        .contact-info {
          font-size: 2.5vw;
        }
        .hours-info {
          font-size: 2.3vw;
        }
        .contact-link2 {
          display: block;
        }
        
      `}</style>
  </Layout>
)
export default Contact
