import {useState, useEffect} from "react";
import axios from "axios";
import {Route, BrowserRouter, Link, Switch, useParams, useLocation} from "react-router-dom";
// import {Details} from "./Form-template/available-vehicle/quotations/details/Details";
import { Button, Collapse, Card, CardBody } from 'reactstrap';
import styled from "styled-components";


import "./hire-vehicle.css";


import {Journey} from "./journey-type/journey";
import {Form} from "./Form-template/Form-template";


function Hire() {


    let data_outstation = {
        name : "Outstation",
        area : "Anywhere Outside",
        yourcity : "Your city",
        image : "https://www.redbus.in/bushire/static/images/asset_outstation.png"
    }

    let data_local = {
        name : "Local",
        area : "Anywere within",
        yourcity : "Your city",

        image : "https://www.redbus.in/bushire/static/images/asset_local.png"
    }

    let data_Airport = {
        name : "Airport",
        area : "Pickup and drop to",
        yourcity : "airport.",
        image : "https://www.redbus.in/bushire/static/images/asset_airport.png"
    }


    return (
        <div>
            {/* <BrowserRouter> */}
                {/* <Link to = "/">Hire vehicle</Link> */}
                <Switch>
                    <Route exact path = "/bushire">
                        <div className = "position-fixed">

                            <div className = "vehicle-heading">
                            <h1>Hire a Vehicle</h1>
                            </div> 

                                <div className = "journey-type-container">
                                    <h1 className = "journey-text"> Click on journey type</h1>
                                   <Link className = "text" to = "/outstation"><Journey data = {data_outstation}></Journey></Link>
                                    <Link className = "text" to = "/local"><Journey data = {data_local} ></Journey></Link>
                                    <Link className = "text" to = "/airport"><Journey data = {data_Airport}></Journey></Link>
                                    <div className = "know-more">
                                        <h1>Employee Transport</h1>
                                        <p>Completely managed employee transport</p>
                                        <a href = "#">KNOW MORE</a>
                                    </div>
                                </div>
                        </div>
                    </Route>
                    <Route path = "/outstation">
                        <Form></Form>
                    </Route>
                    <Route path  = "/local">
                        <Form></Form>
                    </Route>
                    <Route path = "/airport"></Route>
                    <Route path = "/details">
                        <Details/>
                           
                    </Route>
                    <Route path = "/payment">
                        <Payment />
                    </Route>
                </Switch>
            {/* </BrowserRouter> */}
            
        </div>
    )
}

export {Hire};

function Details() {
    const location = useLocation();
    const ida = location.state?.idb;
    const dis = location.duration_distance?.durationDistance;
    // const [feature, setFeature] = useState();
    // console.log(dis);
    
    const [data, setData] = useState({})
    const [duration_d, setDuration_D] = useState({})

    const get_one = async () => {
        let res_car = await fetch(`http://localhost:2233/car/one/${ida}`);
        let res_bus = await fetch(`http://localhost:2233/bus/one/${ida}`);
        let res_tempo = await fetch(`http://localhost:2233/tempo/one/${ida}`);

        let car_data = await res_car.json();

        let bus_data = await res_bus.json();
        let tempo_data = await res_tempo.json();
        if(car_data.item != null) {
            setData(car_data.item);
        } else if (bus_data.item != null) {
            setData(bus_data.item);
        } else if(tempo_data.length != null) {
            setData(tempo_data.item);
        }
        setDuration_D(dis);

        // console.log(car_data.item);
        // console.log(bus_data.item);
        // console.log(tempo_data.item);
        
    }

    useEffect(async () => {
        get_one();
        // console.log(data.feature);
    }, [])

    const Total_container = styled.div`
        width: 1100px;
        // border: 1px solid black;
        // height: 200px;
        margin: auto;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-gap: 3%;
    `
    const Car_container = styled.div`
        width: 100%;
        // border: 1px solid black;
        padding: 10px;
    `
    const Price_container = styled.div`
        width: 100%;
        // border: 1px solid black;
    `
    const Back_btn = styled.div`
        
    `
    const Image_free_container = styled.div`
        width: 100%;
        height: 400px;
        // border: 1px solid black;
        display: grid;
        grid-template-rows : 10% 90%;
        grid-gap: 2%;
    `
    const Free = styled.div`
        border-radius: 3px;
        background-color: #2f97fc;
        color: white;
        text-align: center;
    `
    const Image_container = styled.div`
        width: 100%;
        height: 100%;
        // border: 1px solid black;
        border-radius: 10px;
        background-color: gray;
        text-align: center;
    `
    const Image = styled.img`
        width: 70%;
        height: 100%;

    `
    const Trip_container = styled.div`
        width: 100%;

    `
    const Amenities = styled.div`
        width: 100%;
        
    `
    const Important = styled.div`
        width: 100%;
    `

    const Exclusions = styled.div`
        width: 100%;
    `
    const Thing = styled.div`
        width: 100%;
    `
    const Access = styled.div`
        width: 100%;
    `
    const Name_container = styled.h1`
        padding-left: 20px;
        font-size: 20px;
    `

    const Package_container = styled.div`
        width: 100%;
        // border: 1px solid black;
        border-radius: 10px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);

        padding: 10px;

    `
    const Package_header = styled.h1`

    `
    const Package_text = styled.p`

    `
    const Recomended = styled.div`
        border: 1px solid blue;
        color: blue;
        margin-top: -5px;
    `
    const Offer = styled.div`
        width: 100%;
        display: grid;
        grid-template-rows: 30% 30% 30%;
        grid-gap: 10px;
    `
    const Offer_div = styled.div`
        // margin-top: 100px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        border: 1px solid black;
        flex-direction: row;
    `
    const Left_div = styled.div`
        
    `
    const Right_div = styled.div`
    
    `
    const P = styled.h1`
        color: red;
    `
    const Booking_btn = styled.button`
        width: 100%;
        height: 40px;
        background-color: #d84e55;
        border-radius: 10px;
        color: white;
        font-size: 24px;
        padding: 4px;

        :hover {
            color: white;
            background-color: #F9975D;
        }
    `
    const Fare = styled.h1`

    `
    const Fare_container = styled.div`
        width: 100%;
        height: 140px;
        border-radius: 10px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
        display: grid;
        // grid-gap: 10px;
        padding: 10px;

        grid-template-rows:33% 33% 33%;
    `
    const Fare_div = styled.div`
        display: grid;
        width: 100%;
        grid-gap: 10px;
        grid-template-columns: 80% 20%;
    `
    const Total_Cost = styled.div`
        width: 100%;
        background-color: #f8f4f4;
        border: 1px solid #ddd;
    `
    const Sp = styled.span`
        margin-left: 200px;
        color: Green;
        font-weight: bolder;
    `
    const A = styled.p`
        margin-top: -22px;
    `

    return (
        <div>
            <Back_btn>
                <p>Back to Results</p>
            </Back_btn>
            <Total_container>

                <Car_container>
                    <Image_free_container>
                        <Free>Get this Exact Vehicle or get 25% refund</Free>
                        <Image_container>
                            <Image src = {data.image}></Image>
                        </Image_container>
                    </Image_free_container>
                    <Trip_container>
                        <h2>Trip Summary</h2>
                        <p>The estimated route for this trip is <span>{Math.ceil(duration_d.distance/1000)}</span> KMs</p>
                        <p>{duration_d.pick_up} to  {duration_d.destination}</p>
                    </Trip_container>
                    <Amenities>
                        <h2>Amenities</h2>
                        <ul>
                            {/* {data.feature.map((e) => ( */}
                                {/* <li>{data.feature[0]}</li>
                                <li>{data.feature[1]}</li>
                                <li>{data.feature[2]}</li> */}

                           
                        </ul>
                    </Amenities>
                    <Important>
                        <h2>Important Information</h2>
                        <ul>
                            <li>3700 KMs included. Exra usage at Rs. 13/km to paid to the operator</li>
                            <li>Extra usage amount can be paid to redBus online or driver in cash.</li>
                            <li>No refunds fr usage lesser than 3700KMs.</li>
                            <li>Any extra usage above the time indicated will be charged at Rs. 120/hour.</li>
                            <li>Night bata charrges of INR 300/Night are applicable in case driver drives between 22:00 and 6.00. Night bata charges alredy included.</li>
                            <li>Pets / animals not allowed inside the vehicle</li>
                        </ul>
                    </Important>
                    <Exclusions>
                        <h2>Exclusions</h2>
                        <ul>
                            <li>Toll & Parking charges not included</li>
                            <li>Permit charges not included</li>
                            <li>Interstate taxes not included.</li>
                        </ul>
                    </Exclusions>
                    <Thing>
                        <h2>Things to keep in mind</h2>
                        <ul>
                            <li>Smoking and consumtion of alcohol not allwed</li>
                            <li>A/C may be switched off in hilly areas</li>
                        </ul>
                    </Thing>
                    <Access>
                        <h2>You will have access to</h2>
                        <ul>
                            <li>Drivers who are highly</li>
                            <li>Drivers who ae familiar with the route and nearby areas.</li>
                        </ul>
                    </Access>
                </Car_container>
                <Price_container>
                    <Name_container>{data.name}</Name_container> 
                    <Package_container>
                            <Package_header>
                                Choose a Package
                            </Package_header>
                            <Package_text>
                                Its better to choose extra KMS for moving within your destination city for sightseeing, shopping etc...
                            </Package_text>
                            <Recomended>Recommended for your trip</Recomended>
                            <Offer>
                                <Offer_div>
                                    <Left_div>
                                        <P style = {{fontSize: "20px"}}>3700 Kms</P>
                                        <p>Extra KM: ₹17/km | extra hour : ₹200</p>
                                    </Left_div>
                                    <Right_div>
                                        <P style = {{fontSize: "20px"}}>₹ 75860</P>
                                        <p>save ₹1140.00</p>
                                    </Right_div>
                                </Offer_div>
                                <Offer_div>
                                    <Left_div>
                                        <P style = {{fontSize: "20px"}}>3850 Kms</P>
                                        <p>Extra KM: ₹17/km | extra hour : ₹200</p>
                                    </Left_div>
                                    <Right_div>
                                        <P style = {{fontSize: "20px"}}>₹ 76430</P>
                                        {/* <p>save ₹1140.00</p> */}
                                    </Right_div>
                                </Offer_div>
                                <Offer_div>
                                    <Left_div>
                                        <P style = {{fontSize: "20px"}}>4000 Kms</P>
                                        <p>Extra KM: ₹17/km | extra hour : ₹200</p>
                                    </Left_div>
                                    <Right_div>
                                        <P style = {{fontSize: "20px"}}>₹ 77000</P>
                                        {/* <p>save ₹1140.00</p> */}
                                    </Right_div>
                                </Offer_div>
                            </Offer>
                            <Booking_btn>
                                <Link style = {{textDecoration : "none", color: "white", fontWeight: "bold", fontSize : "20px"}} to = {{pathname: "/payment", stateId : {dataId : data._id}, DurationDistance : {duration_Distance : duration_d}}}>
                                BOOK FOR ₹{(data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km)}
                                </Link>
                            </Booking_btn>
                            <Fare>Fare Breakup</Fare>
                            <Fare_container>
                                <Fare_div>
                                    <div>Base Fare
                                        includes {Math.ceil(duration_d.distance/1000)} Kms
                                    </div>
                                    <div>
                                        ₹{Math.ceil(duration_d.distance/1000) * data.per_km}
                                    </div>
                                </Fare_div>
                                <Fare_div>
                                    <div>Driver Allowance
                                        ₹{data.driver_bata} {Math.ceil(duration_d.duration/86400)} days
                                    </div>
                                    <div>
                                        ₹{Math.ceil(duration_d.duration/86400) * data.driver_bata}
                                    </div>
                                </Fare_div>
                                
                                   <Total_Cost>
                                       Total Cost of your trip                  <Sp>   ₹{(data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km)}</Sp>
                                   </Total_Cost>
                                   <A>Extra kms @ ₹17/KM. Extra Hours @ ₹200/Hour</A>
                                    
                                
                            </Fare_container>
                                
                    </Package_container>       
                </Price_container>



            </Total_container>






        </div>
    )
}


function Payment () {
    const location = useLocation();
    const id = location.stateId?.dataId;
    const dis = location.DurationDistance?.duration_Distance;
    // const [feature, setFeature] = useState();
    console.log(dis);
    
    const [data, setData] = useState({})
    const [duration_d, setDuration_D] = useState({})

    const get_one = async () => {
        let res_car = await fetch(`http://localhost:2233/car/one/${id}`);
        let res_bus = await fetch(`http://localhost:2233/bus/one/${id}`);
        let res_tempo = await fetch(`http://localhost:2233/tempo/one/${id}`);

        let car_data = await res_car.json();

        let bus_data = await res_bus.json();
        let tempo_data = await res_tempo.json();
        if(car_data.item != null) {
            setData(car_data.item);
        } else if (bus_data.item != null) {
            setData(bus_data.item);
        } else if(tempo_data.length != null) {
            setData(tempo_data.item);
        }
        setDuration_D(dis);

        // console.log(car_data.item);
        // console.log(bus_data.item);
        // console.log(tempo_data.item);
        
    }


    const Order_placed = async() => {
        let res_car = await fetch(`http://localhost:2233/car/one/${id}`);
        let res_bus = await fetch(`http://localhost:2233/bus/one/${id}`);
        let res_tempo = await fetch(`http://localhost:2233/tempo/one/${id}`);

        let car_data = await res_car.json();

        let bus_data = await res_bus.json();
        let tempo_data = await res_tempo.json();
        if(car_data.item != null) {
           await fetch(`http://localhost:2233/car/update/${id}`, {
               method : "PATCH",
               headers : {
                   "Content-Type" : "application/json"
               },
               body : JSON.stringify(
                   {
                       "available" : "false"
                   }
               )
           });
        } else if (bus_data.item != null) {
            await fetch(`http://localhost:2233/bus/update/${id}`, {
               method : "PATCH",
               headers : {
                   "Content-Type" : "application/json"
               },
               body : JSON.stringify(
                   {
                       "available" : "false"
                   }
               )
           });
        } else if(tempo_data.length != null) {
            await fetch(`http://localhost:2233/tempo/update/${id}`, {
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(
                    {
                        "available" : "false"
                    }
                )
            });
        }

        await fetch(`http://localhost:2233/order`, {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(
                {
                   "phone_number" : dis.phoneNumber,
                   "name" : dis.name, 
                   "email" : dis.email,
                   "total_price" : (data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km),
                   "total_passenger" : dis.number_passanger,
                   "distance" : Math.ceil(dis.distance / 1000),
                   "duration" : Math.ceil(dis.duration/86400),
                   "vehicle_id": data._id,
                   "vehicle_name" : data.name,
                   "pick_up_address" : dis.pick_up,
                   "destination_address": dis.destination,
                   "departure_date" : dis.from_time,
                   "return_date" : dis.till_time
                }
            )
        })



    }

    useEffect(async () => {
        get_one();
        console.log(data.name);
        // console.log(data.feature);
    }, [])

    const Payment_container = styled.div`
    
        width: 1300px;
        // border: 1px solid black;
        height: 1000px;
        margin: auto;
        margin-top: 8px;
        display: grid;
        grid-gap: 1%;
        grid-template-columns: 68% 30%;
    `
    const Payment_option = styled.div`
        // border: 1px solid black;
    `
    const Customer_details = styled.div`
        // border: 1px solid black;
    `

    const Insurance_container = styled.div`
        width: 100%;
        height: 130px;
        margin-top: 20px;
        display: grid;
        grid-template-rows : 50% 50%;
    `
    const Insurance_up = styled.div`
        // border: 1px solid black;
    `
    const Heading_container = styled.div`

    `
    const Number = styled.div`
        width: 20px;
        height: 20px;
        background-color: black;
        border-radius: 10px;
        color: white;
        text-align: center;
        font-size: 15px;
        margin-top: 20px;
        float: left;
    `
    const Text_container = styled.h3`
        float: left;
        margin-left: 10px;
    `
    const Insurance_Price_container = styled.h3`
        float: right;
        margin-right: 10px;

    `
    const Insurance_down = styled.div`
    box-shadow: 0 3px 11px rgb(0 0 0 / 12%);
    padding: 10px;
    clear: both;

    `
    const Checkbox = styled.input`
        float: left;
        margin-top: 10px;

    `
    const Checktext = styled.p`
        float: left;
        margin-top: 4px;
        margin-left: 10px;
    `
    const Span = styled.span`
        color: blue;
    `

    const Image = styled.img`
        width: 30px;
        height: 30px;
        float: left;
        margin-left: 10px;
    `
    const H2 = styled.h2`
        float: left;
        margin-top: -4px;
    `
    const P = styled.p`
        float: left;
        margin-top: -0px;
        margin-left: 10px;
    `
    const P_container = styled.h3`
        float: right;
        margin-top: -0px;
    `
    const Number_container = styled.div`
        width: 100%;
        margin: auto;
        // border: 1px solid black;

        display: grid;
        grid-template-columns: 60% 40%;

    `
    const Numbera = styled.input`
        padding: 5px;
    `
    const Pay_btn = styled.div`
    border: none;
    background: #d84e55;
    border-radius: 4px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    padding: 16px;
    font-family: Montserrat;
    width: 50%;
    margin-left: 20px;
    cursor: pointer;
    `

    const Customer = styled.div`
        width: 100%;
        margin: auto;
        margin-top:40px;
        height: 120px;
        box-shadow: 0 2px 10px 0 rgb(0 0 0 / 24%);
        // padding: 10px;

    `
    const DivOne = styled.div`
        padding: 10px;
    `
    const Imageb = styled.img`
        width: 25px;
        height: 25px;
        float: left;
    `
    const H3 = styled.h3`
        float: left;
        margin-left: 10px;
        margin-top: -3px;
    `
    const Divname = styled.div`
        clear : both;
        padding: 10px;
        margin-top: -5px;
    `
    const Divcontact = styled.div`
        margin-left: 10px;
    `

    const Fare = styled.div`
        width: 100%;
        height: 400px;
        box-shadow: 0 2px 10px 0 rgb(0 0 0 / 24%);
        margin-top:40px;

    `
    
   const BaseDiv = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 80% 20%;
        padding-left: 10px;
        margin-top: -10px;
   `
   const Left = styled.p`
   
   `
   const Right = styled.p`
   
   `
   const MP = styled.p`
        margin-top: -4px;
   `

    return(
        <div>
            <Order data = {data} path = {dis} />
            <Payment_container>
                <Payment_option>
                    <Insurance_container>
                        <Insurance_up>
                            <Heading_container>
                                <Number>1</Number>
                                <Text_container>TRAVEL INSURANCE</Text_container>
                                <Insurance_Price_container>₹40</Insurance_Price_container>
                            </Heading_container>
                        </Insurance_up>
                        <Insurance_down>
                            <Checkbox type = "checkbox" />
                            <Checktext>Yes, secure my trp with insurance. I agree to the <Span>Terms & Conditions</Span></Checktext>
                        </Insurance_down>
                    </Insurance_container>
                    <Insurance_container>
                     <Insurance_up>
                            <Heading_container>
                                <Number>2</Number>
                                <Text_container>PAYMENT OPTIONS</Text_container>
                                {/* <Insurance_Price_container>₹40</Insurance_Price_container> */}
                            </Heading_container>
                        </Insurance_up>
                        <Insurance_down>
                            <Checkbox type = "radio" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PaymentIconHalfPayment.svg" alt = "sign" />

                            <Checktext><H2>PAY NOW TO CONFIRM  </H2> {"   "} <P>and balance in cash to driver</P></Checktext>
                            <P_container>₹{(data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km)}</P_container>

                        </Insurance_down>
                    </Insurance_container>
                    <Insurance_container>
                        <Insurance_up>
                            <Heading_container>
                                <Number>3</Number>
                                <Text_container>PAYMENT METHODS</Text_container>
                                {/* <Insurance_Price_container>₹40</Insurance_Price_container> */}
                            </Heading_container>
                        </Insurance_up>
                        <Insurance_down style = {{height: "120px"}}>
                            
                            
                            <Checkbox type = "radio" />
                           

                            <Checktext><P>Google Pay</P></Checktext>
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/GPay_Logo.svg" alt = "sign" />
                            {/* <P_container>₹{(data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km)}</P_container> */}
                            <Number_container>
                                <Numbera type = "number" value = {duration_d.phoneNumber}></Numbera>
                                <Pay_btn ><Link to = "/thankyou" ><button onClick = {Order_placed}>Pay now ₹{(data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km)}</button></Link></Pay_btn>
                            </Number_container>
                                
                        </Insurance_down>
                        <Insurance_down style = {{marginTop: "100px", height: "50px"}}>
                            <Checkbox type = "radio" />
                            <Checktext> <P>Credit card</P></Checktext>

                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/mastercard.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/visa.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/maestro-logo.svg" alt = "sign" />



                            {/* <Checktext> <P>Credit card</P></Checktext> */}
                            

                        </Insurance_down>
                        <Insurance_down style = {{ height: "50px"}}>
                            <Checkbox type = "radio" />
                            <Checktext><P>Debit Card</P></Checktext>

                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/mastercard.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/visa.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/maestro-logo.svg" alt = "sign" />

                          

                        </Insurance_down>
                        <Insurance_down style = {{ height: "50px"}}>
                            <Checkbox type = "radio" />
                            <Checktext> <P>Net Banking</P></Checktext>
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/AxisBankLogo.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/Citibank-logo.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/HDFCLogo.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/ICICILogo.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/IndianBank-logo.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/SBILogo.svg" alt = "sign" />
                            <Checktext> <P>& more</P></Checktext>
                            

                            
                           

                        </Insurance_down>
                        <Insurance_down style = {{ height: "50px"}}>
                            <Checkbox type = "radio" />
                            <Checktext> <P>PhonePe</P></Checktext>

                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/PhonePe-Logo.svg" alt = "sign" />

                           

                        </Insurance_down>
                        <Insurance_down style = {{ height: "50px"}}>
                            <Checkbox type = "radio" />
                            <Checktext> <P>Wallets</P></Checktext>

                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/Amazon_Pay-logo.svg" alt = "sign" />
                            <Image src = "https://www.redbus.in/bushire/static/icons/PI/Paytm-logo.svg" alt = "sign" />


                           

                        </Insurance_down>
                    </Insurance_container>

                </Payment_option>
                <Customer_details>
                    <Customer>
                        <DivOne>
                            <Imageb src = "https://www.redbus.in/bushire/static/icons/EditContactIcon.svg" />
                            <H3>Customer Details</H3>
                        </DivOne>
                        <Divname>{dis.name}</Divname>
                        <Divcontact>{dis.phoneNumber} {dis.email}</Divcontact>

                    </Customer>
                    <Fare>
                        <DivOne>
                            <Imageb src = "https://www.redbus.in/bushire/static/icons/fareBreakupicon.svg" />
                            <H3>Fare Breakup</H3>
                        </DivOne>
                        <BaseDiv>
                            <Left>Base Fare Includes <MP>{Math.ceil(duration_d.distance/1000)} Kms</MP></Left>
                            <Right> ₹{(Math.ceil(duration_d.distance/1000) * data.per_km)}</Right>
                        </BaseDiv>
                        <BaseDiv>
                            <Left>Driver Allowance <MP>₹ {data.driver_bata} * {Math.ceil(duration_d.duration/86400)} days</MP></Left>
                            <Right> ₹{(Math.ceil(duration_d.duration/86400) * data.driver_bata)}</Right>
                        </BaseDiv>
                        <hr />
                        <BaseDiv>
                            <Left>Total cost of your trip</Left>
                            <Right> ₹{(data.driver_bata * Math.ceil(duration_d.duration/86400) ) + (Math.ceil(duration_d.distance/1000) * data.per_km)}</Right>
                        </BaseDiv>
                    </Fare>
                </Customer_details>
            </Payment_container>
        </div>

    )
}



function Order ({data, path}) {


    const Wrapper = styled.div`
        width: 100%;
        height: 80px;
        margin: auto;
        display: grid;
        grid-template-columns: 10% 12% 10% 10% 10% 15% 10% 10%;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
        grid-gap: 3px;
       
    `;
    const Vehicle_name = styled.div`
        margin-top: -10px;
    `

    return (
        <Wrapper>
            <div></div>
            <div className = "">
               <p> Oustation Round Trip to  </p>
                {path.pick_up} to {path.destination}'
            </div>
            <div className = "">
                <p>Departure by </p>
                {path.from_time}
            </div>
            <div className = "">
               <p> Return by </p>
                {path.till_time}
            </div>
            <div className = "">
               <p> passenger  </p>
                {path.number_passanger} people
            </div>
            <div className = ""><p>Vehicle</p><p>{data.name}</p></div>
            <div className = ""><p>Vehicle Type</p><p>AC vehicle</p></div>
            <div className = ""><p>KMS included</p><p>{Math.ceil(path.distance / 1000)}</p></div>


        </Wrapper>
    )
}