// import Layout from '../components/CommonLayout.js';
// import fetch from 'isomorphic-unfetch';
// import Router, { withRouter } from 'next/router';
// import Link from 'next/link';
// import React, { Component } from 'react';
// //import Lightbox from '../components/Lightbox.js';


// const Inventory = class extends Component {
//   state = {
//     tempQuery: this.props.tempQuery,
//     query: this.props.router.query.search || '',
//     vehicles: this.props.vehicles,
//     filteredVehicleCount: 0,
//     isOpen: false
//   };

//   filteredVehicles = [];

//   componentDidMount = () => {
//     this.setState({filteredVehicleCount: this.filteredVehicles.length || this.state.vehicles.length});
//   }

//   handleClear(event) {
//     this.setState({ query: '' }, 
//     () => {
//       this.filteredVehicles = [];
//       Router.push('/inventory');
//     }
//     );
//     event.preventDefault();
//   }

//   handleSubmit(event) {
//     if (this.state.tempQuery == '') {
//       this.setState({ query: '' }, 
//       () => {
//         this.filteredVehicles = [];
//         Router.push('/inventory');
//       });
//     }
//     else {
//     this.setState({ query: this.state.tempQuery }/*,
//       () => {
//         this.setState({ filteredVehicleCount: this.filteredVehicles.length });
//       }*/);
//     event.preventDefault();
//     Router.push(`/inventory?search=${this.state.tempQuery}`);
//     }
//   }

//   handleChange(event) {
//     this.setState({ tempQuery: event.target.value },
//       () => {
//         if (this.state.tempQuery == '') {
//           this.setState({ filteredVehicleCount: 0 });
//           this.setState({ query: this.state.tempQuery });
//         }
//       });
//   }

//   handleFilter(event) {
//     this.setState({ tempQuery: event.target.id },
//       () => {
//         if (this.state.tempQuery == '') {
//           this.setState({ filteredVehicleCount: 0 });
//           this.setState({ query: this.state.tempQuery },
//             () => {
//               if (this.state.tempQuery == '') {
//                 this.setState({ query: '' }, 
//                 () => {
//                   this.filteredVehicles = [];
//                   Router.push('/inventory');
//                 });
//               }
//               else {
//               this.setState({ query: this.state.tempQuery }/*,
//                 () => {
//                   this.setState({ filteredVehicleCount: this.filteredVehicles.length });
//                 }*/);
//               event.preventDefault();
//               Router.push(`/inventory?search=${this.state.tempQuery}`);
//               }

//             });
//         }
//         else {
//           this.setState({ query: this.state.tempQuery }/*,
//             () => {
//               this.setState({ filteredVehicleCount: this.filteredVehicles.length });
//             }*/);
//           event.preventDefault();
//           Router.push(`/inventory?search=${this.state.tempQuery}`);
//         }
//       });
//   }

//   getVehicleContainer = (vehicleData) => (
//     <div>
//       <div className="listing-wrapper">
//         <div className="grid-wrapper">
//           <Link
//             href={`/vehicle?index=${vehicleData.index}&search=${this.state.query}`}>
//           <a className="grid-header">
//             <h1>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model} ${vehicleData.trim.toLowerCase() != 'not specified' ? vehicleData.trim : ''}`}</h1>
//           </a>
//           </Link>
//           <div className="grid-header-price">
//             <p>PRICE: <b>{`${vehicleData.price}`}</b></p>
//           </div>
//           <div className="grid-info-item">
//             <div>
//               <p className="item-granular"><b>Miles:</b>{` ${vehicleData.miles}`}</p>
//               <p className="item-granular"><b>VIN:</b>{` ${vehicleData.vin}`}</p>
//             </div>
//           </div>
//           <div className="grid-info-item2">
//             <p className="item-granular"><b> Transmission:  </b>{`  ${vehicleData.transmission}`}</p>
//             <p className="item-granular"><b> Color:  </b>{`  ${vehicleData.extcolor}`}</p>
//           </div>
//           <div className="grid-info-item3">
//             <div className="call-text"><i>Call or text to test drive today!</i></div>
//             <br></br>
//             <div className="call-number"><b>801.885.1611</b></div>
//           </div>
//           <div className="grid-main-item">
//             <Link
//               href={`/vehicle?index=${vehicleData.index}&search=${this.state.query}`}>
//               <a>
//                 <img className="grid-img" src={vehicleData.imgs[0]} />
//               </a>
//             </Link>
//           </div>
//           <div className="grid-second-item">
//             <img className="grid-img" src={vehicleData.imgs[1]} />
//           </div>
//           <div className="grid-third-item">
//             <img className="grid-img" src={vehicleData.imgs[2]} />
//           </div>
//           <div className="grid-fourth-item">
//             <div className="overlay-container">
//               <img className="grid-img" src={vehicleData.imgs[3]} />
//               <Link
//                 href={`/vehicle?index=${vehicleData.index}&search=${this.state.query}`}>
//                 <a className="overlay">
//                   SEE MORE...
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="grid-fifth-item">
//             <span><b>ALL DETAILS</b></span>
//             <span className="description">{vehicleData.description}</span>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .overlay-container {
//           position: relative; 
//           display: block;
//           margin: 0 auto;
//           height: 100%;
//           width: 101%; 
//         }
//         .overlay-container:hover .overlay {
//           background: rgba(0, 0, 0, 0.7);
//         }
//         .overlay-container .overlay {
//           position: absolute; 
//           display: flex;
//           top: 0;
//           background: rgba(0, 0, 0, 0.6); 
//           color: #f1f1f1;
//           justify-content: center;
//           align-items: center;
//           margin: auto;
//           height: 100%;
//           width: 101%; 
//           transition: .5s ease;
//           cursor: pointer;
//         }
//         .listing-wrapper {
//           padding: 15px;          
//         }
//         .grid-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           border-style: solid;
//           border-width: 1px;
//           border-color: #B8B8B8;
//         }
//         .item-granular {
//           display: flex;
//           text-transform: uppercase;
//           font-size: 140%;
//           background-color: #F0F0F0;
//           padding: 3px;
//           overflow: hidden;
//           width: 100%
//           height: 100%;
//         }
//         .call-text {
//           font-size: 135%;
//           width: 100%;
//           text-align: right;
//         }
//         .call-number {
//           font-size: 185%;
//           width: 100%;
//           text-align: right;
//         }
//         .grid-wrapper {
//           display: grid;
//           grid-template-columns: 27vw 27vw 18vw;
//           grid-template-rows: auto 60px 250px 250px 250px;
//           grid-gap: 20px;
//           width: 100%;
//           max-width: 1400px;
//         }
//         .grid-header {
//           font-size: 1.5vw;
//           text-transform: uppercase;
//           text-decoration: none;
//           color: black;
//           cursor: pointer;
//           grid-column-start: 1;
//           grid-column-end: 3;
//           grid-row-start: 1;
//           grid-row-end: 2;
//         }
//         .grid-header-price {
//           grid-column-start: 3;
//           grid-column-end: 4;
//           grid-row-start: 1;
//           grid-row-end: 2;
//           font-size: 200%;
//           text-align: right;
//         }
//         .grid-header-price b {
//           color: green;
//         }
//         .grid-info-item {
//           margin-top: -40px;
//           grid-column-start: 1;
//           grid-column-end: 2;
//           grid-row-start: 2;
//           grid-row-end: 3;
//         }
//         .grid-info-item2 {
//           margin-top: -40px;
//           grid-column-start: 2;
//           grid-column-end: 3;
//           grid-row-start: 2;
//           grid-row-end: 3;
//         }
//         .grid-info-item3 {
//           margin-top: -40px;
//           grid-column-start: 3;
//           grid-column-end: 4;
//           grid-row-start: 2;
//           grid-row-end: 3;
//         }
//         .grid-main-item {
//           grid-column-start: 1;
//           grid-column-end: 3;
//           grid-row-start: 3;
//           grid-row-end: 5;
//         }
//         .grid-second-item {
//           grid-column-start: 3;
//           grid-column-end: 4;
//           grid-row-start: 3;
//           grid-row-end: 4;
//         }
//         .grid-third-item {
//           grid-column-start: 3;
//           grid-column-end: 4;
//           grid-row-start: 4;
//           grid-row-end: 5;
//         }
//         .grid-fourth-item {
//           position: relative;
//           grid-column-start: 3;
//           grid-column-end: 4;
//           grid-row-start: 5;
//           grid-row-end: 6;
//         }
//         .grid-fifth-item {
//           padding: 0 6px 0 0;
//           grid-column-start: 1;
//           grid-column-end: 3;
//           grid-row-start: 5;
//           grid-row-end: 6;
//         }
//         .description {
//           font-size: 150%;
//           width: 100%;
//           height: 88%;
//           display: block;
//           background-color: #F0F0F0;
//           padding: 2px;
//           overflow: auto;
//           width: 100%;
//         }
//         @media screen and (max-width: 1400px) {
//           .grid-wrapper {
//             grid-gap: 15px;
//           }
//         }
//         @media screen and (max-width: 800px) {
//           .item-granular {
//             font-size: 2.2vw;
//           }
//           .call-text, .call-number {
//             font-size: 2.2vw;
//           }
//           .grid-wrapper {
//             grid-gap: 10px;
//             grid-template-rows: 40px 80px 200px 200px 200px;
//           }
//           .grid-header-price { 
//             margin-top: -15px;
//           }
//           .grid-info-item3 {
//             display: none; 
//           }
//         }
//         @media screen and (max-width: 700px) {
//           .description {
//             font-size: 2.4vw;
//           }
//           .grid-info-item3 {
//             display: block; 
//           }
//           .grid-wrapper {
//             display: block;
//           }
//           .grid-header {
//             font-size: 3vw;
//           }
//         }
//         @media screen and (max-width: 525px) {
//           .grid-wrapper {
//             grid-gap: 5px;
//           }
//           .listing-wrapper {
//             padding: 20px;      
//           }

//         }`}
//       </style>
//     </div>
//   )
//   renderVehicle = (key, vehicleData) => (
//     <div key={key}>
//       <div className="background">
//         {this.getVehicleContainer(vehicleData)}
//       </div>
//       <style jsx>{`{
//         .background {
//           background-color: #D3D3D3;
//           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//           margin-bottom: 45px;
//         }
//       }`}
//       </style>
//     </div>
//   )

//   filterVehicles(vehicles, query) {
//     var newv = [];
//     this.filteredVehicles = [];
//     if (query == '') {
//       newv = vehicles;
//     }
//     else {
//       var countMatch = 0;
//       vehicles.forEach(data => {
//         var dataMap = [data.price, data.description, data.year, data.model, data.vin, data.extcolor, data.transmission, data.make, data.trim, data.miles, data.intcolor];
//         dataMap.forEach(att => {
//           if (att.toLowerCase().search(query.toLowerCase()) !== -1) {
//             countMatch++;
//           }
//         });
//         if (countMatch > 0) {
//           newv.push(data);
//           countMatch = 0;
//           this.filteredVehicles.push(data);
//         }
//       });
//     }
//     return newv;
//   }


//   render = () => {

//     const {
//       vehicles
//     } = this.state;

//     const handleChange = this.handleChange.bind(this);
//     const handleFilter = this.handleFilter.bind(this);
//     const handleSubmit = this.handleSubmit.bind(this);
//     const handleClear = this.handleClear.bind(this);
//     const query = this.props.router.query.search || this.state.query;
//     //const filterVehicles = this.filterVehicles.bind(this);

//     return <Layout title='Inventory'>
//       <div className='top-content'>
//         <div className='text-content'>
        
//         <div><b>vehicle quality unmatched.</b></div>
//         <div><b>smaller price tags.</b></div>
//         <div><b>no hidden fees.</b></div>
//         </div>
//       </div>
//       <div className="filters">
//           <button onClick={handleFilter} id='tacoma' className={this.filteredVehicles.length > 0 && query == 'tacoma' ? 'filter-applied' : 'filter'}>TACOMAS</button>
//           <button onClick={handleFilter} id='4runner' className={this.filteredVehicles.length > 0 && query == '4runner' ? 'filter-applied' : 'filter'}>4RUNNERS</button>
//           <button onClick={handleFilter} id='' className={this.filteredVehicles.length > 0 && query != 'tacoma' && query != '4runner' && query != '' ? 'filter-applied' : 'filter'}>OTHER</button>
//         </div>
//       <div className='search-container'>
//         <div className={this.filteredVehicles.length < 1 ? 'filtered-label' : 'hidden'}>
//           All {vehicles.length} vehicles shown. Search to narrow results
//         </div>
//         <div className={this.filteredVehicles.length > 0 ? 'filtered-label' : 'hidden'}>
//           {this.filteredVehicles.length} vehicles found..
//           <button onClick={handleClear}>CLEAR SEARCH</button>
//         </div>
//         <form className='search' onSubmit={handleSubmit}>
//           <input defaultValue={query || ''} name='search' type="text" placeholder="Search Inventory.." onChange={handleChange} />
//           <button type="submit"><i className="fa fa-search"></i></button>
//         </form>
//       </div>
//       <div className='vehicles-wrapper'>
//         {this.filterVehicles(vehicles, query).map((vehicle) => (
//           this.renderVehicle(vehicle.id, vehicle, vehicle.index)
//         ))}
//       </div>
//       <style jsx>{`{
//         * {
//           box-sizing: border-box;
//         }
//         .top-content {
//           display: flex;
//           flex-direction: column;
//           background-color: #E0E0E0;
//           padding: 0 0 0 15px;
//           margin-bottom: 15px;
//         }
//         .filtered-label {
//           font-size: 16px;
//           text-align: left;
//           position: absolute;
//           left: 12vw;
//           margin-top 30px;
//         }
//         .clear-search {
//           font-size: 16px;
//           position: absolute;
//         }
//         .hidden {
//           display: none;
//         }
//         .text-content {
//           margin-top: 20px;
//           text-transform: uppercase;
//           font-size: 220%;
//           text-align: left;
//           margin-bottom: 15px;
//           max-width: 1200px;
//         }
//         .search-container {
//           display: flex;
//           flex-direction: row;
//           padding: 10px;
//           margin-bottom: 25px;
//           align-content: center;
//         }
//        .filters {
//           position: absolute;
//           right: 40vw;
//           display: grid;
//           grid-template-columns: auto auto auto;
//           padding: 8px;
//         }
//         .filter {
//           background-color: #f1f1f1;
//           border: 1px solid grey;
//           padding: 10px;
//           font-size: 14px;
//           text-align: center;
//           cursor: pointer;
//         }
//         .filter-applied {
//           background-color: grey;
//           border: 1px solid grey;
//           padding: 10px;
//           font-size: 14px;
//           text-align: center;
//           cursor: pointer;
//           color: white;
//         }
//         .filter:hover {
//           background: grey;
//         }
//        .vehicles-wrapper {
//           display: flex;
//           flex-direction: column;
//           padding: 20px;
//           align-content: center;
//           align-items: center;
//         }
//         .search {
//           position: absolute;
//           right: 12vw;
//         }
//         form.search input[type=text] {
//           padding: 10px;
//           font-size: 17px;
//           border: 1px solid grey;
//           float: left;
//           width: 80%;
//           background: #f1f1f1;
//         }
//         form.search button {
//           float: left;
//           width: 20%;
//           padding: 10px;
//           background: #333; #0000FF;
//           color: white;
//           font-size: 17px;
//           border: 1px solid grey;
//           border-left: none; /* Prevent double borders */
//           cursor: pointer;
//         }    
//         form.search button:hover {
//           background: #0000FF;
//         }
//         form.search::after {
//           content: "";
//           clear: both;
//           display: table;
//         }
      
//         h1 {
//           text-align: left;
//           font-size: 300%;
//           margin-left: 2vw;
//         }
//         @media screen and (max-width: 700px) {
//           .search-container {
//             display: flex;
//             flex-direction: row;
//             padding: 10px;
//             margin-bottom: 0px;
//             align-content: center;
//             align-items: center;
//           }
//           .filters {
//             position: absolute;
//             right: 25vw;
//             display: grid;
//             grid-template-columns: auto auto auto;
//             padding: 8px;
//             margin-top: -240px;
//           }
//           .filtered-label {
//             font-size: 16px;
//             text-align: center;
//             position: relative;
//             margin-top 0px;
//             left: 0;
//           }
//           .search {
//             position: relative;
//             right: 0;
//           }
//         }
//       }`}
//       </style>
//     </Layout>
//   }
// }


// Inventory.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://strickland-cars-api.herokuapp.com/cars')
//   const data = await res.json()

//   const unique = function(arr1, arr2) {
//     for(var i=0; i<arr1.length; ++i) {
//       for(var j=0; j<arr2.length - 1; ++j) {
//         if(arr1[i].vin === arr2[j].vin)
//           arr2.splice(i, 1);
//       }
//     }
  
//     console.log(filtered.length)
//     const final = arr1.concat(arr2);
//     return final
//   };
//   const filtered = await data.filter(function(item){
//     return item.model.toLowerCase().includes("tacoma");         
//   });

//   const finalArray = unique(filtered, data)


//   console.log(`Car data fetched. Count: ${data.length}`)

//   return {
//     vehicles: finalArray,
//     tempQuery: ''
//   }
// }



// export default withRouter(Inventory);








import Layout from '../components/CommonLayout.js'
import Social from '../components/Social.js';

const About = () => (
  <Layout title='Inventory'>

    <div className='interview-header'>
      <p>
        Inventory page under maintenance. Please view the full, up-to-date inventory on <a href="https://cars.ksl.com/search/miles/0/keyword/strickland+auto?page=0" target="_blank">KSL Cars</a>
      </p>
    </div>

    <Social />

    <style jsx>{`
      .header {
        display: block;
        text-align: left;
        padding: 30px;
        font-size: 2vw;
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
      @media only screen and (max-width: 700px){ 
        .view-facebook-reviews { 
          width: 60vw;
          font-size: 2.2vw;
        }
        .view-google-reviews { 
          width: 60vw;
          font-size: 2.2vw;
        }
        .right-align {
          margin-left: 7vw;
        }
        .header {
          margin-top: -6vh;
        }
      }
      `}</style>
  </Layout>
)
export default About  
