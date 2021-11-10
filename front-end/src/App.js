import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Rpool } from './Components/Rpool/Rpool';
import { Bushire } from './Components/BusHireMain/BusHire'
import {Thankyou} from './Components/Thanks/Thankyou';


import {Hire} from "./Components/hire-vehicle/Hire-vehicle";
import {Form} from "./Components/hire-vehicle/Form-template/Form-template";
import {Show} from "./Components/Show/Show";



import {Buses} from "./Components/available-bus/Buses";
import {OneBus} from "./Components/available-bus/one-bus/OneBus";



function App() {
const [car, setCar] = useState([]);
const [bus, setBus] = useState([]);
const [tempo, setTempo] = useState([]);


const getAll = async () => {
  let res_bus = await fetch("http://localhost:2233/bus/all")
  let res_tempo = await fetch("http://localhost:2233/tempo/all")
  let res_car = await fetch("http://localhost:2233/car/all");
  let car_data = await res_car.json();
  let tempo_data = await res_tempo.json();
  let bus_data = await res_bus.json();
  setCar([...car, car_data.item])  ;
  setBus([...bus, bus_data.item]) ;
  setTempo([...tempo, tempo_data.item]);

}



useEffect(() => {
  getAll();
  // console.log(bus, car,)
}, [])






  return (
    <div>
      <Link to='/'>Home </Link>
      <Link to='/rpool'>rPool </Link>
      <Link to='/bushire'>BusHire</Link>

      <Switch>
        <Route path='/' exact>
        {/* <Nav1 /> */}
          <LandingPage />
        </Route>




      <Route exact path = "/available_bus">
        {/* <OneBus data = {obj} /> */}
        <Buses></Buses>
      </Route>




        <Route path='/rpool' exact>
          <Rpool />
        </Route>
        <Route path='/bushire' exact>
          <Bushire />

          
        </Route>
        <Route path = "/outstation" exact>
          <Bushire />
          

        </Route>
        <Route path = "/outstation/contact_details">
          <Bushire />
          {/* <Hire /> */}

        </Route>
        <Route path = "/outstation/viewVehicles">
          {/* <Hire /> */}
          {/* <Form /> */}
        </Route>
        <Route path = '/thankyou'>
          <Thankyou />
        </Route>
        <Route path = "/bus">
            
            <Show data = {bus} miniHead = "Minibus Rentals" miniSubHead = "Minibus on Rent at best prices on redBus" />
            
        </Route>
        <Route path = "/tempo">
          <Show data = {tempo} miniHead = "Tempo Rentals" miniSubHead = "Tempo on Rent at best prices on redBus"/>
        </Route>
        <Route path = "/car">
          <Show data = {car} miniHead = "Car Rentals" miniSubHead = "Car on Rent at best prices on redBus"/>
        </Route>
      </Switch>
      <Hire className = "place"  />
      


    </div>
  );
}

export default App;
