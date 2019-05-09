import Layout from '../components/CommonLayout.js';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Component } from 'react';
//import Lightbox from '../components/Lightbox.js';


const Inventory = class extends Component {
  state = {
    tempQuery: this.props.tempQuery,
    query: this.props.query,
    vehicles: this.props.vehicles,
    filteredVehicleCount: 0,
    isOpen: false,
    vehicleIndex: 0
  };

  filteredVehicles = [];

  /*
  componentDidMount = () => {
    this.setState({filteredVehicleLength: this.state.vehicles.length});
  }*/

  handleSubmit(event) {
    this.setState({ filteredVehicleCount: 0 });
    this.setState({ query: this.state.tempQuery },
      () => {
        this.setState({ filteredVehicleCount: this.filteredVehicles.length });
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ tempQuery: event.target.value },
      () => {
        if (this.state.tempQuery == '') {
          this.setState({ filteredVehicleCount: 0 });
          this.setState({ query: this.state.tempQuery });
        }
      });
  }

  getVehicleContainer = (vehicleData, vehicleIndex) => (
    <div>
      <div className="listing-wrapper">
        <div className="grid-wrapper">
          <Link
            href={`/vehicle?index=${vehicleIndex}`}>
          <a className="grid-header">
            <h1>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model} ${vehicleData.trim != 'Not Specified' ? vehicleData.trim : ''}`}</h1>
          </a>
          </Link>
          <div className="grid-header-price">
            <p>PRICE: <b>{`${vehicleData.price}`}</b></p>
          </div>
          <div className="grid-info-item">
            <div>
              <p className="item-granular"><b>Miles:</b>{` ${vehicleData.miles}`}</p>
              <p className="item-granular"><b>VIN:</b>{` ${vehicleData.vin}`}</p>
            </div>
          </div>
          <div className="grid-info-item2">
            <p className="item-granular"><b> Transmission:  </b>{`  ${vehicleData.transmission}`}</p>
            <p className="item-granular"><b> Color:  </b>{`  ${vehicleData.extcolor}`}</p>
          </div>
          <div className="grid-info-item3">
            <div className="call-text"><i>Call or text to test drive today!</i></div>
            <br></br>
            <div className="call-number"><b>801.885.1611</b></div>
          </div>
          <div className="grid-main-item">
            <Link
              href={`/vehicle?index=${vehicleIndex}`}>
              <a>
                <img className="grid-img" src={vehicleData.imgs[0]} />
              </a>
            </Link>
          </div>
          <div className="grid-second-item">
            <img className="grid-img" src={vehicleData.imgs[1]} />
          </div>
          <div className="grid-third-item">
            <img className="grid-img" src={vehicleData.imgs[2]} />
          </div>
          <div className="grid-fourth-item">
            <div className="overlay-container">
              <img className="grid-img" src={vehicleData.imgs[3]} />
              <Link
                href={`/vehicle?index=${vehicleIndex}`}>
                <a className="overlay">
                  SEE MORE...
                </a>
              </Link>
            </div>
          </div>
          <div className="grid-fifth-item">
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
          width: 100%
          height: 100%;
        }
        .call-text {
          font-size: 135%;
          width: 100%;
          text-align: right;
        }
        .call-number {
          font-size: 185%;
          width: 100%;
          text-align: right;
        }
        .grid-wrapper {
          display: grid;
          grid-template-columns: 33vw 33vw 22vw;
          grid-template-rows: 50px 80px 250px 250px 250px;
          grid-gap: 20px;
          width: 100%
          max-width: 1500px;
        }
        .grid-header {
          font-size: 1.5vw;
          text-transform: uppercase;
          text-decoration: none;
          color: black;
          cursor: pointer;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 2;
          margin-top: -10px;
        }
        .grid-header-price {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 2;
          font-size: 200%;
          text-align: right;
        }
        .grid-header-price b {
          color: green;
        }
        .grid-info-item {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .grid-info-item2 {
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .grid-info-item3 {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        .grid-main-item {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 5;
        }
        .grid-second-item {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 3;
          grid-row-end: 4;
        }
        .grid-third-item {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 4;
          grid-row-end: 5;
        }
        .grid-fourth-item {
          position: relative;
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 5;
          grid-row-end: 6;
        }
        .grid-fifth-item {
          padding: 0 6px 0 0;
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 5;
          grid-row-end: 6;
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
          .grid-wrapper {
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
          .grid-wrapper {
            grid-gap: 10px;
            grid-template-rows: 40px 80px 200px 200px 200px;
          }
          .grid-header-price { 
            margin-top: -15px;
          }
          .grid-info-item3 {
            display: none; 
          }
        }
        @media screen and (max-width: 700px) {
          .description {
            font-size: 2.4vw;
          }
          .grid-info-item3 {
            display: block; 
          }
          .grid-wrapper {
            display: block;
          }
          .grid-header {
            font-size: 3vw;
          }
        }
        @media screen and (max-width: 525px) {
          .grid-wrapper {
            grid-gap: 5px;
          }
          .listing-wrapper {
            padding: 20px;      
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

  filterVehicles(vehicles, query) {
    var newv = [];
    this.filteredVehicles = [];
    if (query == '') {
      newv = vehicles;
    }
    else {
      var countMatch = 0;
      vehicles.forEach(data => {
        var dataMap = [data.price, data.description, data.year, data.model, data.vin, data.extcolor, data.transmission, data.make, data.trim, data.miles, data.intcolor];
        dataMap.forEach(att => {
          if (att.toLowerCase().search(query.toLowerCase()) !== -1) {
            countMatch++;
          }
        });
        if (countMatch > 0) {
          newv.push(data);
          countMatch = 0;
          this.filteredVehicles.push(data);
        }
      });
    }
    return newv;
  }


  render = () => {

    const {
      vehicles,
      query,
      filteredVehicleCount
    } = this.state;

    const handleChange = this.handleChange.bind(this);
    const handleSubmit = this.handleSubmit.bind(this);
    //const filterVehicles = this.filterVehicles.bind(this);

    return <Layout title='Inventory'>
      <div className='top-content'>
        <div className='text-content'>
        <div><b>unmatched quality vehicles.</b></div>
        <div><b>smaller price tags.</b></div>
        <div><b>no hidden fees.</b></div>
        </div>
      </div>
      <div className='search-container'>
        <div className={filteredVehicleCount < 1 ? 'filtered-label' : 'hidden'}>
          All {vehicles.length} vehicles shown. Search to narrow results
        </div>
        <div className={filteredVehicleCount > 0 ? 'filtered-label' : 'hidden'}>
          {filteredVehicleCount} vehicles found..
        </div>
        <form className='search' onSubmit={handleSubmit}>
          <input name='search' type="text" placeholder="Search inventory.." onChange={handleChange} />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className='vehicles-wrapper'>
        {this.filterVehicles(vehicles, query).map((vehicle, index) => (
          this.renderVehicle(vehicle.id, vehicle, index)
        ))}
      </div>
      <style jsx>{`{
        * {
          box-sizing: border-box;
        }
        .top-content {
          display: flex;
          flex-direction: column;
          background-color: #E0E0E0;
          padding: 5px;
          margin-bottom: 15px;
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
          margin-top: 20px;
          text-transform: uppercase;
          font-size: 220%;
          text-align: left;
          margin-bottom: 15px;
          max-width: 1200px;
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
          text-align: left;
          font-size: 300%;
          margin-left: 2vw;
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


Inventory.getInitialProps = async ({ req }) => {
  const res = await fetch('https://strickland-cars-api.herokuapp.com/cars')
  const data = await res.json()

  console.log(`Car data fetched. Count: ${data.length}`)

  return {
    vehicles: data,
    query: '',
    tempQuery: ''
  }
}



export default withRouter(Inventory);
