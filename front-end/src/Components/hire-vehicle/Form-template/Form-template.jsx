// import { useState } from "react";
// import {Toggle} from "..//toggle-button/Toggle";
import axios from "axios";

import "./form-template.css";
import { useContext, useEffect, useState } from "react";
import ToggleButton from "react-toggle-button";
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import { Available_vehicle } from "./available-vehicle/Available-vehicles";


const Form = () => {

    const [vehicle, setVehicle] = useState([]);
    const [state, setState] = useState({
        ParentOn: false,
    
      });

    const availableS = ["Ahmedabad", "Bangalore", "Chennai", "Delhi", "Gurugram", "Hyderabad", "Kolkata", "Mumbai", "Noida", "Pune"]

    const [availableCity, setAvailableCity] = useState(availableS);


    
//Data of form
    // const initData = 



    const [formData, setFormData] = useState({
        pick_up: "",
        destination: "",
        from_time : 0,
        till_time : 0,
        number_passanger: 0,
        name : "",
        email: "",
        phoneNumber : 0,
        distance: 0,
        duration : 0
    });

    

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name] : value});
    }
// end of form data

   


    const time_dest = async () => {
      let pick_up = formData.pick_up;
      let dest = formData.destination;
      
      let response = await fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${pick_up}&destinations=${dest}&departure_time=now&key=KRffoEucXA6ExG6V2L5djf3PDBNdS`)
      let data = await response.json();
      console.log(data);
      const distancea = data.rows[0].elements[0].distance.value;
      const timea = data.rows[0].elements[0].duration.value;
      // setFormData({...formData, distance : distancea});
      setFormData({...formData, duration : timea, distance: distancea});

    }



    // console.log(formData.pick_up);
    const handleClick = (e) => {
        e.preventDefault(); 
        time_dest();               
        getData();

    }


  const getData = async () => {
    let res_bus = await fetch("http://localhost:2233/bus/all");
    let res_tempo = await fetch("http://localhost:2233/tempo/all");
    let res_car  = await fetch("http://localhost:2233/car/all");
    let car = await res_car.json();
    let tempo = await res_tempo.json();
    let bus = await res_bus.json();

    if(formData.number_passanger <= 7) {
      let available = car.item.filter((e) => {
        return e.available == "true" && e.total_seat <= 7;
      })
      setVehicle(available);
    }else if (formData.number_passanger >= 8 && formData.number_passanger <= 19) {
      let available = tempo.item.filter((e) => {
        return e.available == "true" && e.total_seat >= 8 && e.total_seat <= 19
      })
      setVehicle(available);
    } else if (formData.number_passanger >= 20) {
      let available = bus.item.filter((e) => {
        return e.available == "true" && e.total_seat >= 20
      })
      setVehicle(available);
    }

    

    // console.log(car, tempo, bus);
    
  }
  console.log(vehicle);
  const getVehicle = async () => {

  }



  return (
    // <BrowserRouter>
    <Switch>
        <Route exact path = "/outstation">
      <div className = "journey-type-container">
        <form>
          <div className="vehicle-heading">
           <Link to = "bushire"> <img className = "arrow" src = "https://www.svgrepo.com/show/55207/left-arrow.svg" alt = "arrow" /></Link>
            <h1 className = "Outstation">Outstation</h1>
          </div>
          <div className="container-outstation">
            <div>
              <div>
              <ToggleButton
                  inactiveLabel = "left"
                  activeLabel = "One"
                value={state.ParentOn}
                onToggle={value => {
                  setState({ ...state, ParentOn: !value });
                }}
              >
                  
              </ToggleButton>
              </div>
              <div className="form-container">
                <div className = "container">
                  <div className = "pickup">
                    <label className = "pickup-label">Pick up</label>
                  <br />  <input value = {formData.pick_up} onChange = {handleChange} className = "pick-input" name = "pick_up" type="text" placeholder="Enter pickup location" />
                  </div>
                  <div className = "dest">
                    <label className = "dest-label">Destination</label><br />
                    <input
                    value = {formData.destination}
                    name = "destination"
                    onChange = {handleChange}
                    className = "dest-input"
                      type="text"
                      placeholder="Enter  Destination Location"
                    />
                  </div>
                  {state.ParentOn ? (
                      <div className = "return">
                      <label className = "return-lab">Return</label><br />
                      <input
                      velue = "return"
                      className = "return-input"
                        type="text"
                        placeholder="Return will be as sameas pickup location"
                        disabled
                      />
                    </div>
                  ): (
                      ""
                  )}
                
                </div>
                <div className = "time-container">
                  <div className = "from-when">
                    <label className = "form-when-label">From When </label>
                    <input onChange = {(e) => handleChange(e)} value = {formData.from_time} name = "from_time" className = "form-when-input" type="datetime-local" placeholder="Enter the date" />
                  </div>

                  <div className = "till-when">
                    <label className = "till-when-label">Till When</label>
                    <input onChange = {(e) => handleChange(e)} value = {formData.till_time} name = "till_time" className = "till-when-input" type="datetime-local" placeholder="Enter the date" />
                  </div>
                </div>
                <div className = "passenger-container">
                  <div>
                    <label className = "passenger-label">Number of Passengers</label><br />
                    <input
                    value = {formData.number_passanger}
                    name = "number_passanger"
                    onChange = {handleChange}
                    className = "passenger-input"
                      type="number"
                      placeholder="Enter the number of passenger"
                    />
                    <p className = "message">We will send you quites based on this</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "btn" >
          <button onClick = {handleClick} className = "submitbtn"><Link style = {{textDecoration : "none", color: "white", fontWeight: "bold", fontSize : "20px"}} to = "/outstation/contact_details">process</Link></button>
          </div>
        </form>
      </div>
      
      </Route>
      <Route path = "/outstation/contact_details">

      <div className = "journey-type-container">
        <form>
          <div className="vehicle-heading">
            <Link to = "/outstation">
            <img className = "arrow" src = "https://www.svgrepo.com/show/55207/left-arrow.svg" alt = "arrow" /></Link>
            <h1 className = "Outstation">Fill contact details</h1>
          </div>
          <div className="container-outstation">
            <div>
              
              <div className="form-container">
                <div className = "container">
                  <div className = "pickup">
                    <label className = "pickup-label">Name</label>
                  <br />  <input value = {formData.name} onChange = {handleChange} className = "pick-input" name = "name" type="text" placeholder="Enter the name " />
                  </div>
                  <div className = "dest">
                    <label className = "dest-label">email</label><br />
                    <input
                    value = {formData.email}
                    name = "email"
                    onChange = {handleChange}
                    className = "dest-input"
                      type="text"
                      placeholder="Enter  the email"
                    />
                  </div>
                  
                      <div className = "return">
                      <label className = "return-lab">Phone number</label><br />
                      <input
                      value = {formData.phoneNumber}
                      onChange = {handleChange}
                      className = "return-input"
                        type="text"
                        placeholder="Enter the phone number"
                        name = "phoneNumber"
                      />
                    </div>
                  
                
                </div>
                <div className = "time-container b">
                  <p>We need your contact details for </p>
                  <div className = "contact-container">
                    <div>
                      <img src = "https://www.redbus.in/bushire/static/mwebv2/home/247%20Support.svg" alt = "offer" />
                      <p>Offering 24/7Assistance</p>
                    </div>
                    <div>
                      <img src = "https://www.redbus.in/bushire/static/mwebv2/home/offers.svg" alt = "discount" />
                      <p>Getting Custom Discounts</p>
                    </div>
                    <div>
                      <img src = "https://www.redbus.in/bushire/static/mwebv2/home/Ticket.svg" alt = "quotes" />
                      <p>Sending Instant Quotes</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className = "btn" >
          <button onClick = {getVehicle} className = "submitbtn"><Link style = {{textDecoration : "none", color: "white", fontWeight: "bold", fontSize : "20px"}} className = "text" to = "/outstation/viewVehicles">View vehicles</Link></button>
          </div>
        </form>
      </div>
       


      </Route>


        {/* Local route */}




        <Route exact path = "/local">
      <div className = "journey-type-container">
        <form>
          <div className="vehicle-heading">
           <Link to = "/"> <img className = "arrow" src = "https://www.svgrepo.com/show/55207/left-arrow.svg" alt = "arrow" /></Link>
            <h1 className = "Outstation">Local</h1>
          </div>
          <div className="container-outstation">
            <div>
              <div>
              <ToggleButton
                  inactiveLabel = "left"
                  activeLabel = "One"
                value={state.ParentOn}
                onToggle={value => {
                  setState({ ...state, ParentOn: !value });
                }}
              >
                  
              </ToggleButton>
              </div>
              <div className="form-container">
                <div className = "container">
                  <div className = "pickup">
                    <label className = "pickup-label">Pick up</label>
                  <br />  <input value = {formData.pick_up} onChange = {handleChange} className = "pick-input" name = "pick_up" type="text" placeholder="Enter pickup location" />
                  </div>
                  <div className = "dest">
                    <label className = "dest-label">Destination</label><br />
                    <input
                    value = {formData.destination}
                    name = "destination"
                    onChange = {handleChange}
                    className = "dest-input"
                      type="text"
                      placeholder="Enter  Destination Location"
                    />
                  </div>
                  {state.ParentOn ? (
                      <div className = "return">
                      <label className = "return-lab">Return</label><br />
                      <input
                      velue = "return"
                      className = "return-input"
                        type="text"
                        placeholder="Return will be as sameas pickup location"
                        disabled
                      />
                    </div>
                  ): (
                      ""
                  )}
                
                </div>
                <div className = "time-container">
                  <div className = "from-when">
                    <label className = "form-when-label">From When </label>
                    <input onChange = {(e) => handleChange(e)} value = {formData.from_time} name = "from_time" className = "form-when-input" type="datetime-local" placeholder="Enter the date" />
                  </div>

                  <div className = "till-when">
                    <label className = "till-when-label">Till When</label>
                    <input onChange = {(e) => handleChange(e)} value = {formData.till_time} name = "till_time" className = "till-when-input" type="datetime-local" placeholder="Enter the date" />
                  </div>
                </div>
                <div className = "passenger-container">
                  <div>
                    <label className = "passenger-label">Number of Passengers</label><br />
                    <input
                    value = {formData.number_passanger}
                    name = "number_passanger"
                    onChange = {handleChange}
                    className = "passenger-input"
                      type="number"
                      placeholder="Enter the number of passenger"
                    />
                    <p className = "message">We will send you quites based on this</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className = "btn" >
          <button onClick = {handleClick} className = "submitbtn"><Link style = {{textDecoration : "none", color: "white", fontWeight: "bold", fontSize : "20px"}} className = "text" to = "/outstation/contact_details">process</Link></button>
          </div>
        </form>
      </div>
      
      </Route>
      <Route path = "/local/contact_details">

      <div className = "journey-type-container">
        <form>
          <div className="vehicle-heading">
            <Link to = "/local">
            <img className = "arrow" src = "https://www.svgrepo.com/show/55207/left-arrow.svg" alt = "arrow" /></Link>
            <h1 className = "Outstation">Fill contact details</h1>
          </div>
          <div className="container-outstation">
            <div>
              
              <div className="form-container">
                <div className = "container">
                  <div className = "pickup">
                    <label className = "pickup-label">Name</label>
                  <br />  <input value = {formData.name} onChange = {handleChange} className = "pick-input" name = "name" type="text" placeholder="Enter the name " />
                  </div>
                  <div className = "dest">
                    <label className = "dest-label">email</label><br />
                    <input
                    value = {formData.email}
                    name = "email"
                    onChange = {handleChange}
                    className = "dest-input"
                      type="text"
                      placeholder="Enter  the email"
                    />
                  </div>
                  
                      <div className = "return">
                      <label className = "return-lab">Phone number</label><br />
                      <input
                      value = {formData.phoneNumber}
                      onChange = {handleChange}
                      className = "return-input"
                        type="text"
                        placeholder="Enter the phone number"
                        name = "phoneNumber"
                      />
                    </div>
                  
                
                </div>
                <div className = "time-container b">
                  <p>We need your contact details for </p>
                  <div className = "contact-container">
                    <div>
                      <img src = "https://www.redbus.in/bushire/static/mwebv2/home/247%20Support.svg" alt = "offer" />
                      <p>Offering 24/7Assistance</p>
                    </div>
                    <div>
                      <img src = "https://www.redbus.in/bushire/static/mwebv2/home/offers.svg" alt = "discount" />
                      <p>Getting Custom Discounts</p>
                    </div>
                    <div>
                      <img src = "https://www.redbus.in/bushire/static/mwebv2/home/Ticket.svg" alt = "quotes" />
                      <p>Sending Instant Quotes</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className = "btn" >
          <button onClick = {getVehicle} className = "submitbtn"><Link style = {{textDecoration : "none", color: "white", fontWeight: "bold", fontSize : "20px"}} className = "text" to = "/outstation/viewVehicles">View vehicles</Link></button>
          </div>
        </form>
      </div>
       


      </Route>
      <Route path = "/local/viewVehicles">
                    <Available_vehicle form_data = {formData} available = {vehicle}></Available_vehicle>
      </Route>





      <Route path = "/outstation/viewVehicles">
                    <Available_vehicle form_data = {formData} available = {vehicle}></Available_vehicle>
      </Route>



         


    </Switch>
    // </BrowserRouter>
  );
};


export {Form}