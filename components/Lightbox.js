import { timingSafeEqual } from "crypto";

// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

const getSlides = (imgUrl) => {
    <div className="mySlides">
        <div className="numbertext"></div>
        <img src={imgUrl} style="width:100%" />
    </div>
}

const Lightbox = (imgs) => {
    <div>
        <div id="myModal" className="modal">
            <span className="close cursor" onclick="closeModal()">&times;</span>
            <div className="modal-content">
              {imgs.map(img => {getSlides(img)})}

                <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a>

                <div className="caption-container">
                    <p id="caption"></p>
                </div>

                <div className="column">
                    <img className="demo" src="img1.jpg" onclick="currentSlide(1)" alt="Nature" />
                </div>

                <div className="column">
                    <img className="demo" src="img2.jpg" onclick="currentSlide(2)" alt="Snow" />
                </div>

                <div className="column">
                    <img className="demo" src="img3.jpg" onclick="currentSlide(3)" alt="Mountains" />
                </div>

                <div className="column">
                    <img className="demo" src="img4.jpg" onclick="currentSlide(4)" alt="Lights" />
                </div>
            </div>
        </div>
        <style jsx>{`
          .row > .column {
            padding: 0 8px;
          }
  
          .row:after {
            content: "";
            display: table;
            clear: both;
          }
  
          /* Create four equal columns that floats next to eachother */
          .column {
            float: left;
            width: 25%;
          }

          /* The Modal (background) */
          .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: black;
          }

          /* Modal Content */
          .modal-content {
            position: relative;
            background-color: #fefefe;
            margin: auto;
            padding: 0;
            width: 90%;
            max-width: 1200px;
          }

          /* The Close Button */
          .close {
            color: white;
            position: absolute;
            top: 10px;
            right: 25px;
            font-size: 35px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: #999;
            text-decoration: none;
            cursor: pointer;
          }

          /* Hide the slides by default */
          .mySlides {
            display: none;
          }

          /* Next & previous buttons */
          .prev,
          .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -50px;
            color: white;
            font-weight: bold;
            font-size: 20px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
            -webkit-user-select: none;
          }

          /* Position the "next button" to the right */
          .next {
            right: 0;
            border-radius: 3px 0 0 3px;
          }

          /* On hover, add a black background color with a little bit see-through */
          .prev:hover,
          .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }

          /* Number text (1/3 etc) */
          .numbertext {
            color: #f2f2f2;
            font-size: 12px;
            padding: 8px 12px;
            position: absolute;
            top: 0;
          }

          /* Caption text */
          .caption-container {
            text-align: center;
            background-color: black;
            padding: 2px 16px;
            color: white;
          }

          img.demo {
            opacity: 0.6;
          }

          .active,
          .demo:hover {
            opacity: 1;
          }

          img.hover-shadow {
            transition: 0.3s;
          }

          .hover-shadow:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }`}
        </style>
    </div>
}

export default Lightbox;