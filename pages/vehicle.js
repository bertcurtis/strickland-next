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
    this.setState({imgIndex: this.state.imgIndex > this.props.vehicles[this.props.router.query.index].imgs.length - 1 ? 0 : this.state.imgIndex + 1});
    console.log(this.state.imgIndex);
  }

  handlePrevious = () => {
    this.setState({imgIndex: this.state.imgIndex < 1 ? this.props.vehicles[this.props.router.query.index].imgs.length - 1 : this.state.imgIndex - 1});
    console.log(this.state.imgIndex);
  }

  handleModalOpen = () => {
    this.setState({openModal: true});
  }

  handleModalClose = () => {
    this.setState({openModal: false});
  }

  getModal = (vehicleData, closeEventHandler) => (
    <div>
    <div className="modal">
      <span className="close" onClick={closeEventHandler}>&times;</span>
      <img className="modal-content" src={vehicleData.imgs[this.state.imgIndex]}/>
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
    
            /* 100% Image Width on Smaller Screens */
            @media only screen and (max-width: 700px){
              .modal-content {
                top: 80px;
                width: 100%;
              }
              .close {
                top: 60px;
              }
            }
          }
    }`}</style>
    </div>

  )

  getVehicleContainer = (vehicleData, imageIndex, handleNext, handlePrevious, handleModalOpen) => (
    <div>
      <div className='image-grid'>
        <div className='main-image' onClick={handleModalOpen}>
          <img className='inner-image' src={vehicleData.imgs[imageIndex]} />
        </div>

        <div className='left-image' onClick={handlePrevious}>
          <div className='overlay-container'>
            <img className='inner-image' src={vehicleData.imgs[imageIndex - 1 < 0 ? vehicleData.imgs.length - 1 : imageIndex - 1]} />
            <div className='overlay-left'>{`<`}</div>
          </div>
        </div>

        <div className='right-image' onClick={handleNext}>
          <div className='overlay-container'>
            <img className='inner-image' src={vehicleData.imgs[imageIndex + 1 > vehicleData.imgs.length - 1 ? 0 : imageIndex + 1]} />
            <div className='overlay-right'>{`>`}</div>
          </div>
        </div>
      </div>
      <style jsx>{`{
        .main-image {
          grid-column-start: 2;
          grid-column-end: 7;
          grid-row-start: 1;
          grid-row-end: 4;
          z-index: 5;

        }
        .left-image {
          grid-column-start: 1;
          grid-column-end: 6;
          grid-row-start: 2;
          grid-row-end: 3;
          z-index: 1;
        }
        .right-image {
          grid-column-start: 3;
          grid-column-end: 8;
          grid-row-start: 2;
          grid-row-end: 3;
          z-index: 1;
        }
        .image-grid {
          display: grid;
          grid-template-columns: repeat(7, 8vw);
          grid-template-rows: 3vw 25vw 3vw;
        }
        .inner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
        .main-image:hover {
          cursor: pointer;
        }

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
        .modal-container {
          display: none;
        }

        .modal-content {
          margin: auto;
          display: block;
          width: 150%;
          max-width: 700px;
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

        /* 100% Image Width on Smaller Screens */
        @media only screen and (max-width: 700px){
          .modal-content {
            top: 80px;
            width: 100%;
          }
          .close {
            top: 60px;
          }
        }
      }`}
      </style>
    </div>
  )
  renderVehicle = (vehicleData, imageIndex, handleNext, handlePrevious, handleModalOpen) => (
    <div>
      <div className="background">
        {this.getVehicleContainer(vehicleData, imageIndex, handleNext, handlePrevious, handleModalOpen)}
      </div>
      <style jsx>{`{
        .background {
          background-color: #D3D3D3;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
        <a className="top-content">
          {`< BACK TO LISTINGS`}
        </a>
      </Link>
      <div>
        {this.renderVehicle(this.props.vehicles[this.props.router.query.index], imgIndex, handleNext, handlePrevious, handleModalOpen)}
      </div>
      <div>{openModal && this.getModal(this.props.vehicles[this.props.router.query.index], handleModalClose)}</div>
      <style jsx>{`{
        * {
          box-sizing: border-box;
        }
        .top-content {
          display: flex;
          flex-direction: column;
          padding: 5px;
          align-content: left;
          align-items: left;
        }
        .filtered-label {
          font-size: 16px;
          text-align: left;
          position: absolute;
          left: 5vw;
          margin-top 30px;
        }
        .hidden {
          display: none;
        }
        .text-content {
          font-size: 180%;
          text-align: center;
          max-width: 800px;
          margin-bottom: 15px;
        }
        .search-container {
          display: flex;
          flex-direction: row;
          padding: 10px;
          margin-bottom: 25px;
          align-content: center;
       }
       .vehicles-wrapper {
          display: flex;
          flex-direction: column;
          padding: 20px;
          align-content: center;
          align-items: center;
        }
        .search {
          position: absolute;
          right: 5vw;
        }
        form.search input[type=text] {
          padding: 10px;
          font-size: 17px;
          border: 1px solid grey;
          float: left;
          width: 80%;
          background: #f1f1f1;
        }
        form.search button {
          float: left;
          width: 20%;
          padding: 10px;
          background: #333; #0000FF;
          color: white;
          font-size: 17px;
          border: 1px solid grey;
          border-left: none; /* Prevent double borders */
          cursor: pointer;
        }    
        form.search button:hover {
          background: #0000FF;
        }
        form.search::after {
          content: "";
          clear: both;
          display: table;
        }
      
        h1 {
          text-align: center;
          padding: 5px;
          font-size: 300%;
        }
        @media screen and (max-width: 700px) {
          .search-container {
            display: flex;
            flex-direction: row;
            padding: 10px;
            margin-bottom: 0px;
            align-content: center;
            align-items: center;
          }
          .filtered-label {
            font-size: 16px;
            text-align: center;
            position: relative;
            margin-top 0px;
            left: 0;
          }
          .search {
            position: relative;
            right: 0;
          }
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