import Layout from '../components/CommonLayout.js';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import Link from 'next/link';

const Vehicle = class extends Component {
  state = {
    imgIndex: this.props.imgIndex,
    openModal: this.props.openModal
  };

  handleNext = () => {
    this.setState({ imgIndex: this.state.imgIndex > this.props.vehicles[this.props.router.query.index].imgs.length - 2 ? 0 : this.state.imgIndex + 1 });
  }

  handlePrevious = () => {
    this.setState({ imgIndex: this.state.imgIndex < 1 ? this.props.vehicles[this.props.router.query.index].imgs.length - 1 : this.state.imgIndex - 1 });
  }

  handleModalOpen = () => {
    this.setState({ openModal: true });
  }

  handleModalClose = () => {
    this.setState({ openModal: false });
  }

  getModal = (vehicleData, closeEventHandler) => (
    <div>
      <div className="modal">
        <span className="close" onClick={closeEventHandler}>&times;</span>
        <img className="modal-content" src={vehicleData.imgs[this.state.imgIndex]} />
      </div>
      <style jsx>{`{
            .modal {
              position: fixed; /* Stay in place */
              z-index: 10; /* Sit on top */
              padding-top: 100px; /* Location of the box */
              left: 0;
              top: 0;
              width: 100%; /* Full width */
              height: 100%; /* Full height */
              overflow: auto; /* Enable scroll if needed */
              background-color: rgb(0,0,0); /* Fallback color */
              background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
              border-radius: 5px;
              cursor: pointer;
              transition: 0.3s;
            }
    
            .modal-content {
              margin: auto;
              display: block;
              width: 75vw;
              max-width: 1000px;
              max height: 800px;
              animation-name: zoom;
              animation-duration: 0.6s;
            }
    
            @keyframes zoom {
              from {transform:scale(0)} 
              to {transform:scale(1)}
            }
    
            .close {
              position: absolute;
              top: 45px;
              right: 35px;
              color: #f1f1f1;
              font-size: 40px;
              font-weight: bold;
              transition: 0.3s;
            }
    
            .close:hover,
            .close:focus {
              color: #bbb;
              text-decoration: none;
              cursor: pointer;
            }
    
            @media only screen and (max-width: 700px){
              .modal-content {
                margin-top: 130px;
                display: block;
              }
              .close {
                margin-top: 125px;
              }
            }
          }
    }`}</style>
    </div>

  )

  getVehicleImages = (vehicleData, imageIndex, handleNext, handlePrevious, handleModalOpen) => (
    <div>
      <div className='image-grid'>
        <div className='main-image'>
          <div onClick={handleModalOpen} className='main-image-background'>
            <img className='main-inner-image' src={vehicleData.imgs[imageIndex]} />
          </div>

        </div>

        <div className='left-image'>
          <div className='overlay-container'>
            <img className='side-inner-image' src={vehicleData.imgs[imageIndex - 1 < 0 ? vehicleData.imgs.length - 1 : imageIndex - 1]} />
            <div className='overlay-left' onClick={handlePrevious}>{`<`}</div>
          </div>
        </div>

        <div className='right-image'>
          <div className='overlay-container'>
            <img className='side-inner-image' src={vehicleData.imgs[imageIndex + 1 > vehicleData.imgs.length - 1 ? 0 : imageIndex + 1]} />
            <div className='overlay-right' onClick={handleNext}>{`>`}</div>
          </div>
        </div>
      </div>
      <style jsx>{`{
        .main-image {
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 4;
          z-index: 5;
        }
        .main-image-background {
          background: rgb(20,20,20)
        }
        .left-image {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
          z-index: 1;
          background: rgb(100,100,100)
        }
        .right-image {
          grid-column-start: 3;
          grid-column-end: 5;
          grid-row-start: 2;
          grid-row-end: 3;
          z-index: 1;
          background: rgb(100,100,100)
        }
        .image-grid {
          display: grid;
          grid-template-columns: 1vw 10vw 10vw 1vw
          grid-template-rows: 3vh 25vh 3vh;
        }
        .main-inner-image {
          width: 55vw;
          height: 55vw;
          object-fit: contain;
          display: block;
          transition: .5s ease;
        }
        .side-inner-image {
          width: 35vw;
          height: 35vw;
          object-fit: contain;
          display: block;
        }
        .overlay-container {
          position: relative; 
          display: block;
          margin: 0 auto;
          height: 100%;
          width: 100%; 
        }
        .overlay-container:hover .overlay-left {
          background: rgba(0, 0, 0, 0.8);
        }
        .overlay-container:hover .overlay-right {
          background: rgba(0, 0, 0, 0.8);
        }
        .overlay-container .overlay-left {
          position: absolute; 
          display: flex;
          top: 0;
          background: rgba(0, 0, 0, 0.6); 
          color: #f1f1f1;
          justify-content: flex-start;
          align-items: center;
          margin: auto;
          height: 100%;
          width: 100%; 
          transition: .5s ease;
          cursor: pointer;
          font-size: 2.2vw;
          z-index: 2;
        }
        .overlay-container .overlay-right {
          position: absolute; 
          display: flex;
          top: 0;
          background: rgba(0, 0, 0, 0.6); 
          color: #f1f1f1;
          justify-content: flex-end;
          align-items: center;
          margin: auto;
          height: 100%;
          width: 100%; 
          transition: .5s ease;
          cursor: pointer;
          font-size: 2.2vw;
          z-index: 3;
        }
        .main-inner-image:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }`}
      </style>
    </div>
  )
  renderVehicleImages = (vehicleData, imageIndex, handleNext, handlePrevious, handleModalOpen) => (
    <div>
      <div className="background">
        {this.getVehicleImages(vehicleData, imageIndex, handleNext, handlePrevious, handleModalOpen)}
      </div>
      <style jsx>{`{
        .background {
          background-color: #D3D3D3;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          display: flex;
          flex-direction: column;
          padding: 20px;
          align-content: center;
          align-items: center;
        }
      }`}
      </style>
    </div>
  )

  getVehicleHeader = vehicleData => (
    <div>
      <h1>
        {`${vehicleData.year} ${vehicleData.make} ${vehicleData.model} ${vehicleData.trim != 'Not Specified' ? vehicleData.trim : ''}`}
      </h1>
      <h2>
        <u>{`Price: ${vehicleData.price}`}</u>
      </h2>
    </div>
  )

  getVehicleContent = vehicleData => (
    <div>
      <h2>Vehicle Description</h2>
      <p className="description">
        {vehicleData.description}
      </p>
      <h2>Vehicle details</h2>
      <div className="details-section">

        <div className="details">
          <p><b>Year:  </b>{`  ${vehicleData.year}`}</p>
          <p><b>Make:  </b>{`  ${vehicleData.make}`}</p>
          <p><b>Model:  </b>{`  ${vehicleData.model}`}</p>
          <p><b>Trim:  </b>{`  ${vehicleData.trim}`}</p>
          <p><b>Miles:  </b>{`  ${vehicleData.miles}`}</p>
          <p><b>Transmission:  </b>{`  ${vehicleData.transmission}`}</p>
          <p><b>Exterior Color:  </b>{`  ${vehicleData.extcolor}`}</p>
          <p><b>Interiior Color:  </b>{`  ${vehicleData.intcolor}`}</p>
          <p><b>VIN:  </b>{`  ${vehicleData.vin}`}</p></div>
          <div>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4195.369502782758!2d-111.89997651897639!3d40.68696102160096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be42346c907%3A0xa848298ed2013672!2sStrickland+Auto!5e0!3m2!1sen!2sus!4v1555624627847!5m2!1sen!2sus">
            </iframe>
              <div className="call-info">
                Call or text to test drive today!
                <p><b>801.885.1611</b></p>
              </div>
          </div>
      </div>
      <style jsx>{`{
                .description {
                  display: block;
                  padding: 10px;
                  margin-top: 1vw;
                  text-decoration: none;
                  text-align: left;
                  font-size: 2vw;
                }
                .details {
                  display: block;
                  padding: 1px;
                  margin-left: 10px;
                  text-transform: uppercase;
                  text-align: left;
                  font-size: 1.8vw;
                }
                .map {
                  width: 50vw; 
                  height: 30vh;
                  allowfullscreen: true;
                }
                .details-section {
                  display: grid;
                  grid-template-columns: auto auto
                }
                .call-info {
                  display: block;
                  padding: 10px;
                  margin-right: 10vw;
                  text-transform: uppercase;
                  text-align: right;
                  font-size: 1.8vw;
                }
                h2 {
                  text-transform: uppercase;
                  padding: 10px;
                  margin-bottom: -10px;
                  font-size: 2.2vw;
                }
              }`}
      </style>
    </div>

  )

  render = () => {

    const {
      imgIndex,
      openModal
    } = this.state;

    const handleNext = this.handleNext.bind(this);
    const handlePrevious = this.handlePrevious.bind(this);
    const handleModalOpen = this.handleModalOpen.bind(this);
    const handleModalClose = this.handleModalClose.bind(this);

    return <Layout title='Vehicle'>
    <Link
        href={`/inventory`}>
        <a className="back-link">
          {`< BACK TO LISTINGS`}
        </a>
      </Link>

      <div className="header">{this.getVehicleHeader(this.props.vehicles[this.props.router.query.index])}</div>
      <div>
        {this.renderVehicleImages(this.props.vehicles[this.props.router.query.index], imgIndex, handleNext, handlePrevious, handleModalOpen)}
      </div>
      <div className="content">{this.getVehicleContent(this.props.vehicles[this.props.router.query.index])}</div>

      <div>{openModal && this.getModal(this.props.vehicles[this.props.router.query.index], handleModalClose)}</div>
      <style jsx>{`{
        .back-link {
          display: block;
          padding: 20px;
          margin-top: 4vh;
          text-align: left;
          font-size: 2.1vw;
          text-decoration: none;
          color: white;
          background-color: grey;
          cursor: pointer;
        }
        .header {
          font-size: 2.3vw;
          text-align: center;
          text-transform: uppercase;
        }
      }`}
      </style>
    </Layout>
  }
}

Vehicle.getInitialProps = async ({ req }) => {
  const res = await fetch('https://strickland-cars-api.herokuapp.com/cars')
  const data = await res.json()

  console.log(`Car data fetched. Count: ${data.length}`)

  return {
    vehicles: data,
    imgIndex: 0,
    openModal: false
  }
}

export default withRouter(Vehicle);