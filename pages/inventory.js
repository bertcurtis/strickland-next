import Layout from '../components/CommonLayout.js'
import Lightbox from 'react-image-lightbox';
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Link from '../components/Link.js'



const Vehicles = class extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    vehicleIndex: 0
  };
  getVehicleContainer = (vehicleData, vehicleIndex) => (
    <div>
      <div className="listing-wrapper">
        <div className="header">
          <h1>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model} ${vehicleData.trim != 'Not Specified' ? vehicleData.trim : ''}`}</h1>
        </div>
        <div className="wrapper">
          <div className="main-item">
            <img className="grid-img" src={vehicleData.imgs[0]} />
          </div>
          <div className="second-item">
            <img className="grid-img" src={vehicleData.imgs[1]} />
          </div>
          <div className="third-item">
            <img className="grid-img" src={vehicleData.imgs[2]} />
          </div>
          <div className="fourth-item">
            <div className="overlay-container">
              <img className="grid-img" src={vehicleData.imgs[3]} />
              <div className="overlay" onClick={() => this.setState({ isOpen: true, vehicleIndex: vehicleIndex })}>
                <div>See More...</div>
              </div>
            </div>
          </div>
          <div className="fifth-item">
            <div>
              <p className="item-granular"><b>Price:</b>{` ${vehicleData.price}`}</p>
              <p className="item-granular"><b>Miles:</b>{` ${vehicleData.miles}`}</p>
              <p className="item-granular"><b>VIN:</b>{` ${vehicleData.vin}`}</p>
              <p className="item-granular"><b>Transmission:</b>{` ${vehicleData.transmission}`}</p>
              <p className="item-granular"><b>Color:</b>{` ${vehicleData.extcolor}`}</p>
            </div>
          </div>
          <div className="sixth-item">
            <span><b>All Details</b></span>
            <span className="item-granular description">{vehicleData.description}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .overlay-container {
          position: relative; 
          display: block;
          margin: 0 auto;
          height: 100%;
          width: 101%; 
        }
        .overlay-container:hover .overlay {
          background: rgba(0, 0, 0, 0.7);
        }
        .overlay-container .overlay {
          position: absolute; 
          display: flex;
          top: 0;
          background: rgba(0, 0, 0, 0.6); 
          color: #f1f1f1;
          justify-content: center;
          align-items: center;
          margin: auto;
          height: 100%;
          width: 101%; 
          transition: .5s ease;
          cursor: pointer;
        }
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: left;
          max-width: 1200px;
          text-overflow: wrap;
        }
        .listing-wrapper {
          width: 100%;
          height: auto;
          padding: 25px;
        }
        .wrapper {
          display: grid;
          grid-template-columns: repeat(4, 20vw);
          grid-template-rows: repeat(3, 17vw);
          grid-gap: 15px;
          max-width: 1200px;
        }
        .grid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-style: solid;
          border-width: 1px;
          border-color: #B8B8B8;
        }
        .item-granular {
          display: block;
          background-color: #F0F0F0;
          padding: 2px;
          overflow: scroll;
          width: 100%;
          height: 100%;
        }
        .main-item {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 3;
        }
        .second-item {
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        .third-item {
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .fourth-item {
          position: relative;
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 3;
          grid-row-end: 4;
        }
        .fifth-item {
          padding: 0 6px 0 0;
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .sixth-item {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 3;
          grid-row-end: 4;
        }
        .description {
          font-size: 15px;
          width: 100%;
          height: 88%;
        }
        @media screen and (max-width: 900px) {
          .fifth-item {
            padding: 6px;
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 4;
          }
        }
        @media screen and (max-width: 525px) {
          .sixth-item {
            grid-column-start: 2;
          }
          .listing-wrapper {
            width: 90%;
          }
          .description {
            font-size: 12px;
          }

        }`}
      </style>
    </div>
  )
  renderVehicle = (key, vehicleData, vehicleIndex) => (
    <div key={key}>
      <div className="background">
        {this.getVehicleContainer(vehicleData, vehicleIndex)}
      </div>
      <style jsx>{`{
        .background {
          background-color: #D3D3D3;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          margin-bottom: 45px;
        }
      }`}
      </style>
    </div>
  )

  render = () => {
    const {
      photoIndex,
      isOpen,
      vehicleIndex
    } = this.state;

    return <Layout title='Inventory'>
      <h1>THE INVENTORY YOU'VE BEEN WAITING FOR</h1>
      <div className='text-content'>Committed to providing the highest quality vehicle's with smaller price tags and no hidden fee's. Specializing in branded title Trucks!</div>
      <div className="wrapper">
        {this.props.vehicles.map((vehicle, index) => (
          this.renderVehicle(vehicle.id, vehicle ,index)
        ))}
      </div>
      <div className='lightbox'>{isOpen &&
        <Lightbox
          mainSrc={this.props.vehicles[vehicleIndex].imgs[photoIndex]}
          nextSrc={this.props.vehicles[vehicleIndex].imgs[(photoIndex + 1) % this.props.vehicles[vehicleIndex].imgs.length]}
          prevSrc={this.props.vehicles[vehicleIndex].imgs[(photoIndex + this.props.vehicles[vehicleIndex].imgs.length - 1) % this.props.vehicles[vehicleIndex].imgs.length]}

          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() => this.setState({
            photoIndex: (photoIndex + this.props.vehicles[vehicleIndex].imgs.length - 1) % this.props.vehicles[vehicleIndex].imgs.length,
          })}
          onMoveNextRequest={() => this.setState({
            photoIndex: (photoIndex + 1) % this.props.vehicles[vehicleIndex].imgs.length,
          })}
          wrapperClassName='lightbox'
        />
      }</div>
      <style jsx>{`{
    .wrapper {
      display: flex;
      flex-direction: column;
      padding: 20px;
      align-content: center;
      align-items: center;
    }
    .lightbox {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
    }
    .text-content {
      padding: 10px;
    }
    h1 {
      text-align: center;
      padding: 5px;
    }
  }`}
      </style>
    </Layout>
  }
}

Vehicles.getInitialProps = async ({ req }) => {
  const res = await fetch('https://strickland-cars-api.herokuapp.com/cars')
  const data = await res.json()

  console.log(`Car data fetched. Count: ${data.length}`)

  return {
    vehicles: data
  }
}


export default withRouter(Vehicles);
