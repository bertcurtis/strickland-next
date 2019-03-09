import Layout from '../components/CommonLayout.js'
import fetch from 'isomorphic-unfetch'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'


const Vehicle = ( {key, vehicleData} ) => (
  <li key={key}>
    {`Description: ${vehicleData.description}`}
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
