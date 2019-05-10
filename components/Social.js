import social from '../media/about5.jpg';
import facebook from '../media/facebooks.png';
import insta from '../media/insta.png';

const Social = () => (
    <div>
        <div className="social">
        <div className="content-wrapper">
          <div className="view-facebook">
            <a href="https://www.facebook.com/StrickAuto/" target="_blank"></a>
          </div>
          <div className="view-instagram">
            <a href="https://www.instagram.com/strickland_auto/" target="_blank"></a>
          </div>
          <div className="social-header"><p>Check us out on social media!</p></div>
        </div>
        </div>

<style jsx>{`
        .content-wrapper {
          display: flex;
          flex-direction: row;
        }
        .social-header {
            display: block;
            padding: 30px;
            font-size: 20px;
            text-transform: uppercase;
            color: white;
          }
        
          .social {
            display: flex;
            padding: 30px;
            background-image: url(${social});
            background-size: cover;
            background-position: center;       
          }
        
          .view-facebook {
            background-image: url(${facebook});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            display: block;
            height: 80px;
            width: 80px;
            cursor: pointer;
            margin: 25px;
          }
        
          .view-instagram {
            background-image: url(${insta});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            display: block;
            height: 80px;
            width: 80px;
            cursor: pointer;
            margin: 25px;
          }`}
        </style>
    </div>
)
export default Social;
