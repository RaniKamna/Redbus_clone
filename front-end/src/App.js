import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import { LandingPage } from "./Components/LandingPage/LandingPage.jsx";
import { Rpool } from './Components/Rpool/Rpool';
import { Bushire } from './Components/BusHireMain/BusHire'
import {Thankyou} from './Components/Thanks/Thankyou';
import { Showseat } from './Components/ShowSeat/Showseat';
import { Passenger } from './Components/Passengerdetail/Passenger';


import {Hire} from "./Components/hire-vehicle/Hire-vehicle";
import {Form} from "./Components/hire-vehicle/Form-template/Form-template";
import {Show} from "./Components/Show/Show";
import { SearchBuses } from './Components/LandingPage/SearchBuses';



import {Buses} from "./Components/available-bus/Buses";
import {OneBus} from "./Components/available-bus/one-bus/OneBus";


//navbar
import Navbarmenu from "./Components/menu/Navbarmenu";



//Footer 

import {Footer} from "./Components/Footer/Footer";




//payment ticket

import {Ticket} from "./Components/ticketPay/TicketPayment";




function App() {
const [car, setCar] = useState([]);
const [bus, setBus] = useState([]);
const [tempo, setTempo] = useState([]);
const [buss, setBuses] = useState([]);



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



  let res = await fetch("http://localhost:2233/booking/data");
    let busesa = await res.json();
    setBuses([...buss, busesa.item]);

}



useEffect(() => {
  getAll();
  
  // console.log(bus, car,)
  console.log("check" , buss);
}, [])


///This is the all bus 










// const [loading, setLoading] = useState(true);

// const getBuses = async() => {
    // let res = await fetch("http://localhost:2233/booking");
    // let busesa = await res.json();
    // setBuses(busesa.item);
// }

// console.log(buss);


  return (
   
    <div>
      {/* <Link to='/'>Home </Link>
      <Link to='/rpool'>rPool </Link>
      <Link to='/bushire'>BusHire</Link> */}
      {/* <Link to='/available_bus'>Bus</Link> */}
     <div><Navbarmenu /></div>
<div style = {{marginTop: "90px"}}>
      <Switch>
        <Route path='/' exact>
        {/* <Nav1 /> */}

        {/* <Allrouter /> */}

          <LandingPage />
          {/* <Buses/> */}

        </Route>
        <Route path='/SearchBuses' exact>
                <SearchBuses />

              </Route>
              {/* <Route path = "/ticketPay">
                <Ticket />
              </Route> */}




      <Route exact path = "/available_bus">
        {/* <OneBus data = {obj} /> */}
        <Buses data = {buss}></Buses>
      </Route>




        <Route path='/rpool' exact>

          {/* <Showseat /> */}

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
           <Hire /> 

        </Route>
        <Route path = "/outstation/viewVehicles">
           {/* <Hire />  */}
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
