import Layout from '../components/CommonLayout.js'
import logo from '../media/logo.webp';
import social from '../media/about5.jpg';

const Contact = () => (
  <Layout title='Contact Us'>
    <div className="contact-section">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="contact-info-container">
        <div className="contact-info-header">
          <p className="contact-link">PHONE NUMBER: <a href="tel:+1-801-885-1611"><b>801.885.1611</b></a></p>
          <br></br>
          <p><i>OR</i></p>
          <br></br>
          <p className="contact-link"><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fm.me%2FStrickAuto%3Ffbclid%3DIwAR39wQ0cJWezvymA3Es01Vgn3mmsbHX9i6NJViQrLmgc6eMC257Uja9xs_4&amp;h=AT0XIwNT1O52OCY3C9oW_x1cDnMcscehyuyLtAsYMDFN34AAVI87DEJbQfsCEXoja5PtlQFvz_3b1A8A1ynlEvH3RN2ewHHmgPV1svB8WBGotsC5xIoo8W-iVWwMO7U-4kC8C5fUuYgofBTCEJu_wg" target="_blank">
            <b>MESSAGE US ON FACEBOOK</b></a></p></div>
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
    </div>
    <div className="map-section">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4195.369502782758!2d-111.89997651897639!3d40.68696102160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be42346c907%3A0xa848298ed2013672!2sStrickland+Auto!5e0!3m2!1sen!2sus!4v1555624627847!5m2!1sen!2sus">
      </iframe>
      <div className="address-container">
        <div className="address">
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4195.369502782758!2d-111.89997651897639!3d40.68696102160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be42346c907%3A0xa848298ed2013672!2sStrickland+Auto!5e0!3m2!1sen!2sus!4v1555624627847!5m2!1sen!2sus">
            <p>3908 S Howick St Millcreek, Utah</p></a>
        </div>
      </div>
    </div>
    <div className="social">
        <div className="social-header"><p>Check us out on social media!</p></div>
          <div className="view-facebook">
            <p><a href="https://www.facebook.com/StrickAuto/" target="_blank">FACEBOOK</a></p>
          </div>
          <div className="view-instagram">
            <p><a href="https://www.instagram.com/strickland_auto/" target="_blank">INSTAGRAM</a></p>
          </div>
        </div>

    <style jsx>{`
       .contact-section {
        display: grid;
        grid-template-columns: 50% 50%;
      }
      .contact-info-container {
        display: grid;
        grid-template-columns: 50% 50%;
        background-color: grey;
      }
      .contact-info-header {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        text-align: center;
        padding: 1px;
        font-size: 2vw;
        color: white;
      }
      .hours-info {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        margin-top: 7vh;
        text-align: center;
        font-size: 1.1vw;
      }
      .contact-link {
        padding: 10px;
        border-style: solid;
        border-width: 2px;
        border-color: white;
        border-radius: 3px;
        opacity: 0.7;
        margin-right: 15px;
      }
      .contact-info-header a {
        text-decoration: none;
        color: white;
      }
      .contact-link:hover {
        cursor: pointer;
        opacity: 1;
      }
      .logo {
        margin-top: 0.7vh;
      }

      .logo img {
        object-fit: cover;
        display: block;
        width: 102%;
        height: 100%;
      }

      .map-section {
        display: grid;
        grid-template-columns: 50% 50%
      }
      .map {
        display: block;
        width: 100%;
        height: 50vh;
        allowfullscreen: true;
      }
      .address-container {
        background-color: darkgrey;
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
        top: 50%;
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

      .social-header {
        display: block;
        text-align: left;
        padding: 30px;
        font-size: 1.6vw;
        text-transform: uppercase;
        color: white;
      }

      .social {
        margin-top: 20px;
        display: flex;
        padding: 30px;
        background-image: url(${social});
        background-size: cover;
        background-position: center;

      }

      .view-facebook {
        display: block;
        margin-top: 10px;
        text-align: center;
        padding: 25px;
        font-size: 1.5vw;
        background: rgba(59,89,152, 0.7);
        width: 30vw;
        margin: auto;
        cursor: pointer;
      }
      .view-facebook:hover {
        background: rgba(59,89,152, 0.9);
      }
      .view-facebook a {
        text-decoration: none;
        color: white;
      }

      .view-instagram {
        display: block;
        margin-top: 10px;
        text-align: center;
        padding: 25px;
        font-size: 1.5vw;
        width: 30vw;
        margin: auto;
        background: rgba(201, 201, 201, 0.7);
        cursor: pointer;
      }

      .view-instagram a {
        text-decoration: none;
        color: white;
      }
      .view-instagram:hover { 
        background: rgba(79,109,172, 0.9);
      }

      @media only screen and (max-width: 700px){
        .map-section {
          display: block;
        }
        .contact-section {
          display: block;
        }
        .address {
          display: none;
        }

        .contact-info-header {
          font-size: 2.5vw;
        }
        .hours-info {
          font-size: 2.3vw;
        }
        
      `}</style>
  </Layout>
)
export default Contact

// https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/45747809_1120003664819299_1371238935690215424_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=3f3186c4e76bce8615ddf4c08434730a&oe=5D376C81
// <a href=  data-lynx-mode="async" id="u_fetchstream_9_4"><span class="_2iem" style="word-break: break-all">m.me/StrickAuto</span></a>