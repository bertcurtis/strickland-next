import Layout from '../components/CommonLayout.js'
import fetch from 'isomorphic-unfetch'
import {withRouter} from 'next/router'
import Link from 'next/link'


const Vehicle = ( {key, vehicleData} ) => (
  <li key={key}>
    <div>
      <h3>{`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}</h3>
        <div>
          <p>{`Miles: ${vehicleData.miles}`}</p>
          <p>{`Color: ${vehicleData.extcolor}`}</p>
          <p>{`Trim: ${vehicleData.trim}`}</p>
          <p>{`Price: ${vehicleData.price}`}</p>
          <p>{`${vehicleData.description}`}
          </p>
          <ul>
            <li>
              <img src={vehicleData.imgs[0]}/>
            </li>
            <li>
              <img src={vehicleData.imgs[1]}/>
            </li>
            <li>
              <img src={vehicleData.imgs[2]}/>
            </li>
            <li>
              <Link href="/car">
                <a>See More...</a>
              </Link>
            </li>
          </ul>
        </div>
    </div>
    
  </li>
)

const Vehicles = (props) => (
  <Layout>
    <ul>
      {props.vehicles.map(vehicle => (
        <Vehicle key={vehicle.id} vehicleData={vehicle}/>
      ))}
    </ul>
  </Layout>
)

Vehicles.getInitialProps = async function() {
  const res = await 
  fetch('https://strickland-cars-api.herokuapp.com/cars')
  const data = await res.json()

  console.log(`Car data fetched. Count: ${data.length}`)

  return {
    vehicles: data
  }
}

export default withRouter(Vehicles)
