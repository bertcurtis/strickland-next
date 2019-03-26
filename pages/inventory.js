import Layout from '../components/CommonLayout.js'
import fetch from 'isomorphic-unfetch'
import { withRouter } from 'next/router'
import Link from 'next/link'

const VehicleContainer = ({ vehicleData }) => (
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
        <Link href="/car">
          <a>See More...</a>
        </Link>
      </div>
      <div className="fifth-item">
        <div className="grid-inner-item">
          <h2>{`Price: ${vehicleData.price}`}</h2>
          <p>{`Miles: ${vehicleData.miles}`}</p>
          <p>{`VIN: ${vehicleData.vin}`}</p>
          <p>{`Transmission: ${vehicleData.transmission}`}</p>
          <p>{`Color: ${vehicleData.extcolor}`}</p>
          <span>{vehicleData.description}</span>
        </div>        
      </div>
      </div>
    </div>
    <style jsx>{`
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        max-width: 1400px;
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
        grid-gap: 10px;
        max-width: 1400px;
      }
      .grid-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .grid-inner-item {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .main-item {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      .second-item {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      .third-item {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      .fourth-item {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      .fifth-item {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 4;
      }`}
    </style>
  </div>
)

const Vehicle = ({ key, vehicleData }) => (
  <div key={key}>
    <div className="background">
      <VehicleContainer vehicleData={vehicleData} />
    </div>
    <style jsx>{`{
      .background {
        background-color: grey;
        margin-bottom: 45px;
      }
    }`}
    </style>
  </div>
)

const Vehicles = (props) => (
  <Layout>
    <div className="wrapper">
      {props.vehicles.map(vehicle => (
        <Vehicle key={vehicle.id} vehicleData={vehicle} />
      ))}
    </div>
    <style jsx>{`{
      .wrapper {
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-content: center;
        align-items: center;
      }
    }`}
    </style>
  </Layout>
) 

Vehicles.getInitialProps = async function () {
  const res = await
    fetch('https://strickland-cars-api.herokuapp.com/cars')
  const data = await res.json()

  console.log(`Car data fetched. Count: ${data.length}`)

  return {
    vehicles: data
  }
}

export default withRouter(Vehicles)
