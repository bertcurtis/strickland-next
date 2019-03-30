import Layout from '../components/CommonLayout.js'
import Lightbox from 'react-image-lightbox';
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import React, { Component } from 'react';
import Link from '../components/Link.js'


const searchAll = (term, data) => {
  const dataMap = [];
  dataMap.push(data);
  const searchstrings = term.toString().split(" ");
  const matcher = (regexp) => {
    return obj => {
    var found = false;
    Object.keys(obj).forEach(key => {
      if ( ! found) {
        if ((typeof obj[key] == 'string') && regexp.exec(obj[key])) {
          found = true;
        }
      }
    });
    return found;
    };
  }
  
  var matches = () => {
  searchstrings.forEach(needle => {
    console.log('searching for: %s', needle);
    const re1 = new RegExp("\\b" + needle + "\\b", 'i');
    return dataMap.filter(matcher(re1));
  });
}
  return matches.length > 0 ? true : false;
}

const Vehicles = class extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    vehicleIndex: 0,
    searchTerm: ""
  };
  getVehicleContainer = (vehicleData, vehicleIndex) => (
    <div>
      <div className="listing-wrapper">
        <div className="wrapper">
          <div className="header">
            <h1>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model} ${vehicleData.trim != 'Not Specified' ? vehicleData.trim : ''}`}</h1>
          </div>
          <div className="header-call">
            <div className="call-text">Call or text to test drive today!</div>
            <div className="call-number"><b>801.885.1611</b></div>
          </div>
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
                <div>SEE MORE...</div>
              </div>
            </div>
          </div>
          <div className="fifth-item">
            <div>
              <p className="item-granular"><b>Price:  </b>{`  ${vehicleData.price}`}</p>
              <p className="item-granular"><b>Miles:  </b>{`  ${vehicleData.miles}`}</p>
              <p className="item-granular"><b>VIN:  </b>{`  ${vehicleData.vin}`}</p>
              <p className="item-granular"><b>Transmission:  </b>{`  ${vehicleData.transmission}`}</p>
              <p className="item-granular"><b>Color:  </b>{`  ${vehicleData.extcolor}`}</p>
            </div>
          </div>
          <div className="sixth-item">
            <span><b>ALL DETAILS</b></span>
            <span className="description">{vehicleData.description}</span>
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
        .listing-wrapper {
          padding: 15px;          
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
          display: flex;
          text-transform: uppercase;
          font-size: 140%;
          background-color: #F0F0F0;
          padding: 3px;
          overflow: hidden;
          width: 275px;
          height: 100%;
        }
        .call-text {
          font-size: 135%;
          width: 100%
        }
        .call-number {
          font-size: 185%;
          width: 100%
        }
        .wrapper {
          display: grid;
          grid-template-columns: repeat(4, 19vw);
          grid-template-rows: repeat(7, 7vw);
          grid-gap: 20px;
          width: 100%
          max-width: 1200px;
        }
        .header {
          font-size: 1.5vw;
          text-transform: uppercase;
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 2;
          margin-top: -10px;
        }
        .header-call {
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 1;
          grid-row-end: 2;
          display: grid;
          grid-template-rows: auto auto;
          align-content: center;
        }
        .main-item {
          margin-top: -20px;
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 6;
        }
        .second-item {
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 2;
          grid-row-end: 4;
        }
        .third-item {
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 4;
          grid-row-end: 6;
        }
        .fourth-item {
          position: relative;
          grid-column-start: 4;
          grid-column-end: 5;
          grid-row-start: 6;
          grid-row-end: 8;
        }
        .fifth-item {
          padding: 0 6px 0 0;
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 4;
          grid-row-end: 6;
        }
        .sixth-item {
          grid-column-start: 1;
          grid-column-end: 4;
          grid-row-start: 6;
          grid-row-end: 8;
        }
        .description {
          font-size: 150%;
          width: 100%;
          height: 88%;
          display: block;
          background-color: #F0F0F0;
          padding: 2px;
          overflow: auto;
          width: 100%;
        }
        @media screen and (max-width: 1400px) {
          .fifth-item {
            padding: 6px;
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 4;
          }
          .wrapper {
            grid-gap: 15px;
          }
        }
        @media screen and (max-width: 800px) {
          .item-granular {
            font-size: 2.2vw;
            width: 195%;
          }
          .call-text, .call-number {
            font-size: 2.2vw;
          }
          .wrapper {
            grid-gap: 10px;
          }
        }
        @media screen and (max-width: 700px) {
          .description {
            font-size: 2.4vw;
          }
        }
        @media screen and (max-width: 525px) {
          .wrapper {
            grid-gap: 5px;
          }
          .listing-wrapper {
            padding: 20px;      
          }

        }`}
      </style>
    </div>
  )
  renderVehicle = (searchTerm, key, vehicleData, vehicleIndex) => (
    /*searchAll(searchTerm, vehicleData) &&*/ <div key={key}>
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
      vehicleIndex,
      searchTerm
    } = this.state;

    return <Layout title='Inventory'>
      <h1>WE HAVE WHAT YOU'RE LOOKING FOR, <i>GUARANTEED</i></h1>
      <div className='text-content'>Committed to providing the highest quality vehicle's with smaller price tags and no hidden fee's. Specializing in branded title Trucks!</div>
      <div className='search-container'>
        <form className="search" onSubmit={() => this.setState({searchTerm: this.refs.searchValue})}>
          <input type="text" placeholder="Search.." name="search" ref="searchValue"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="wrapper">
        {!searchTerm && this.props.vehicles.map((vehicle, index) => (
          this.renderVehicle(searchTerm, vehicle.id, vehicle ,index)
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
        * {
          box-sizing: border-box;
        }
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
      font-size: 190%;
      text-align: center;
      margin-bottom: 5px;
    }
    .search-container {
      margin: auto;
      max-width: 60%;
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
      background: #0000FF;
      color: white;
      font-size: 17px;
      border: 1px solid grey;
      border-left: none; /* Prevent double borders */
      cursor: pointer;
    }    
    form.search button:hover {
      background: #0b7dda;
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
