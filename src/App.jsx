import Map from './Mapmethod/Map.jsx'
import Usestate from './UseState/Usestate.jsx'
import './App.css'
import Form from './Form/Form.jsx'
import Fetch from './APIintegreation/Fetch.jsx'
import Asyncawait from './APIintegreation/Asyncawait.jsx'

function App() {
  return (
    <>
      <div className='app'>
      <Map />
      <Usestate />
        <Form />
        <Fetch />
        <Asyncawait />
        </div>
    </>
  )
}

export default App
