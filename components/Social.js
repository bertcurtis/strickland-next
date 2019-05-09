import social from '../media/about5.jpg';

const Social = () => (
    <div>
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
        .social-header {
            display: block;
            text-align: left;
            padding: 30px;
            font-size: 1.6vw;
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
            display: block;
            margin-top: 10px;
            text-align: center;
            padding: 25px;
            font-size: 1.5vw;
            background: rgba(59,89,152, 0.8);
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
            background: rgba(201, 201, 201, 0.8);
            cursor: pointer;
          }
        
          .view-instagram a {
            text-decoration: none;
            color: white;
          }
          .view-instagram:hover { 
            background: rgba(225,225,225, 0.9);
          }`}
        </style>
    </div>
)
export default Social;
