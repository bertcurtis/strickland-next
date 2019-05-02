import Layout from '../components/CommonLayout.js'
import about1 from '../media/about1.jpg';
import about2 from '../media/about2.jpg';
import about3 from '../media/about3.jpg';
import about4 from '../media/about4.jpg';
import about5 from '../media/about5.jpg';
import social from '../media/about5.jpg';

const About = () => (
  <Layout title='About Strickland'>
    <div className="header"><b>STRICKLAND AUTO.</b> <p>Committed to providing the highest quality vehicle's with smaller price tags and no hidden fee's. Specializing in branded title Trucks!</p>
      <div className="view-google-reviews">
        <p><a href="https://www.google.com/search?ei=zETJXLeZKuS3ggeHpJPQDg&q=strickland+auto+google+reviews&oq=strickland+auto+google+reviews&gs_l=psy-ab.3...2700.3563..3774...0.0..0.248.760.0j3j1......0....1..gws-wiz.......0i71j35i304i39.Nb6wBebZlzI#lrd=0x87528be42346c907:0xa848298ed2013672,1,,," target="_blank">VIEW GOOGLE REVIEWS</a></p>
      </div>
      <div className="view-facebook-reviews">
        <p><a href="https://www.facebook.com/pg/StrickAuto/reviews/?ref=page_internal" target="_blank">VIEW FACEBOOK REVIEWS</a></p>
      </div>
    </div>
    <div className="images">
      <img src={about1} />
      <img src={about2} />
      <img src={about3} />
      <img src={about4} />
      <img src={about5} />
    </div>
    <div className="interview-wrapper">
      <p className="interview-header"><i>Ian Foster, host of the The RIF podcast, had the opportunity to interview the owners of Strickland Auto about their transition from underground mining to business ownership, their values and what makes them different. </i></p>

      <p className="question"><b>Ian:</b> You guys both come from underground mining. Why did you start Strickland Auto?
</p>
      <p className="right-align"><b>Jonathon:</b> For me, I was ready for a change. I wanted to be home more with my family.
</p>
      <p className="right-align"><b>Erwin</b>: I’d been mining for 30 years, off and on. Underground Uranium mostly. Jon was starting this. I decided I wanted to stay home more. I’d been suit-casing in a hotel for two, three, four months sometimes. It wasn’t miserable, but I was ready to be home more.
</p>
      <p className="question"><b>Ian</b>: When you guys were talking about Strickland Auto, what kind of a company you wanted to have, what were the conversations like? What kind of business did you want to start?
</p>
      <p className="right-align"><b>Jonathon</b>: To be different. We wanted to do things different. Honestly- we just wanted to treat people how we wanted to be treated. We have people tell everyday, “wow, this is a crazy experience. I never thought I’d be giving a car-dealership a 5-star review."
</p>
      <p className="right-align"><b>Erwin</b>: Ya, that’s the first thing that came to my mind is “different.” I’ve been around long enough to know people how they are and sales and all that stuff. That was one of the first things we talked about was we aren’t going to do things the way other companies do things.
</p>
      <p className="question"><b>Ian</b>: Do you think your background helped instill those values in the company?
</p>
      <p className="right-align"><b>Jonathon</b>: Ya I think so. We didn’t come from any sort of sales background. We came from hard work, get your hands dirty, so we can appreciate a different kind of thing. I think when people show up, we don’t really try to sell them a vehicle, we just try to have conversations with them.
</p>
      <p className="question"><b>Ian</b>: But, you’re in the car sales business….
</p>
      <p className="right-align"><b>Erwin</b>: I find us selling us, more than selling vehicles. We’re building trust. People show up, and we end up just talking with people and people realize, “hey, these guys are different.”
</p>
      <p className="question"><b>Ian</b>: Jonathon brought up the branded-title concept. What has changed in the branded-title industry and what is your competitive edge?
</p>
      <p className="right-align"><b>Erwin</b>: 40 years ago, I remember seeing branded title cars and they were called salvage titles. And I remember seeing a truck driving down the road that was kind driving down the road a little crooked. Those kinds of things gave those kinds of cars a bad name. They called them a different name. But for us, that’s not necessarily bad. That is just another opportunity to do things different. It opens up the conversation on what IS a good branded title car, or not.
</p>
      <p className="question"><b>Ian</b>: I look at your shop- and I see an organized, working, shop. I see you and your guys busy all the time. What kinds of things do you check out under the cars, how do you make your purchases, how do you make sure your customers have the best branded-title experience possible?
</p>
      <p className="right-align"><b>Jonathon</b>: Well, just looking at them. I mean, Erwin here spends a couple hours a day looking through 1000s of vehicles to handpick the ones we want. It’s not easy, because you have to know what you’re looking for. Once you do a couple hundred of these, you know what you’re looking for. We’ve done over 300 Tacomas so far.
</p>
      <p className="question"><b>Ian</b>: What can people expect from Strickland Auto?
</p>
      <p className="right-align"><b>Jonathon</b>: No BS. Honesty. A quality product.
</p>
      <p className="right-align"><b>Erwin</b>: Well, I’ll back up a line. Some BS. (laughing)
</p>
      <p className="question"><b>Ian</b>: (laughing) Okay, what kind of BS can people expect from Strickland Auto?
</p>
      <p className="right-align"><b>Erwin</b>: Well, there’s lots of BS- I mean, we BS with customers all the time.
</p>
      <p className="question"><b>Ian</b>: Oh, like, conversational BS?
</p>
      <p className="right-align"><b>Erwin</b>: YA! We find ourselves saying things that normal salesmen don’t say. We’ll point things out that other people would not. With that, we say, THIS is what you’re getting. We’re transparent. What you see is what you get. That’s what people should expect.
 </p>
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
      .header {
        display: block;
        text-align: left;
        padding: 30px;
        font-size: 3vw;
        background: rgb(220, 220, 220);
      }
      .images {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
      }
      .images img {
        width: 100%;
        height: auto;
        opacity: 0.8;
      }
      .view-google-reviews {
        display: block;
        margin-top: 10px;
        text-align: center;
        padding: 5px;
        font-size: 1.5vw;
        background: rgba(219,68,55, 0.7);
        width: 30vw;
        margin: auto;
        cursor: pointer;
      }
      .view-google-reviews:hover {
        background: rgba(219,68,55, 1);
      }
      .view-google-reviews a {
        text-decoration: none;
        color: white;
      }

      .view-facebook-reviews {
        display: block;
        margin-top: 10px;
        text-align: center;
        padding: 5px;
        font-size: 1.5vw;
        background: rgba(59,89,152, 0.7);
        width: 30vw;
        margin: auto;
        curson: pointer;
      }

      .view-facebook-reviews a {
        text-decoration: none;
        color: white;
      }
      .view-facebook-reviews:hover { 
        background: rgba(59,89,152, 1);
      }

      .interview-header {
        font-size: 30px;
      }
      .interview-wrapper {
        margin-top: 20px;
        padding: 15px;
        font-size: 20px;
        width: 80%;
        margin: auto;
      }
      .question {
        background-color: rgba(180, 180, 180, 0.7);
      }
      .right-align {
        text-align: right;
        margin-left: 30vw;
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
        .view-facebook-reviews { 
          width: 60vw;
          font-size: 2.2vw;

        }
        .view-google-reviews { 
          width: 60vw;
          font-size: 2.2vw;

        }
      }
      `}</style>
  </Layout>
)
export default About  
