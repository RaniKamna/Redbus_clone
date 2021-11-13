import { Showseat } from '../../ShowSeat/Showseat';
import styled from "styled-components";
import {useState} from "react";
function OneBus ({data}) {
    const [toggle, setToggle] = useState(false);
    console.log(data);
    // let  = {
    //     travel_name : "Fexi Ticket National travels.",
    //       bus_name : "Bharat Benz A/C Sleeper(2 + 2)",
    //       pick_up_time : "14.10",
    //       duration : "21.00",
    //       drop_time : "11.30",
    //       rating : "3.9",
    //       price : "1524",
    //       seats_available: "34",
    //       seat_type  : "single",
    //       pickup_address : "bangalore",
    //       drop_address : "mumbai",
    //       passengers : [
                  
    //           ],
    //       sleeper : true,
    //       ac : false,
    //       nonac : false
    //   }
    const Main_container = styled.div`
        top: 0;
        width: 100%;
        height: 200px;
        border: 1px solid gray;
        display: grid;
        // grid-template-rows: 80% 20%;
        :hover {
            box-shadow: 0 0px 10px orange;
        }
    `
    const Container = styled.div`
        // border: 1px solid black;
        display: grid;
        grid-template-columns: 30% 10% 10% 10% 10% 10% 10%;
    `
    const ViewSeat_btn = styled.div`
        // border: 1px solid black;
        height: 45px;
    `
    const Name_container = styled.div`
        // border: 1px solid black;
    `
    const Travel = styled.h3`
    
    `
    const Name = styled.p`
    
    `
    const Icon= styled.img`
        width: 20px;
        height: 20px;
    `
    const Departure_container = styled.div`
        // border: 1px solid black;
    `
    const Departure_time = styled.h2`
    
    `
    const Departure_address  = styled.p`
    
    `
    const Duration = styled.div`
        // border: 1px solid black;
    `
    const Duration_time = styled.p`
    
    `
    const Arrival_container = styled.div`
        // border: 1px solid black;
    `
    const Arriaval_time = styled.h3`
    `
    const Arriaval_address  = styled.p`
    
    `
    const Rating_container = styled.div`
        // border: 1px solid black;
    `
    const Rating = styled.div`
        // padding: 20px;
        width: 30px;
        margin-top: 20px;
        margin-left: 40px;
        border-radius: 3px;
        // height: 20px;
        background-color: green;
        color: white;
        font-weight: bold;
    `
    const Fare_container = styled.div`
        // border: 1px solid black;
    `
    const Ticket_price = styled.h2`
    
    `
    const Seat_container = styled.div`
        padding-left: 70px;
    `
    const Seat = styled.p`
    
    `
    const Span = styled.span`
        margin-left: 20px;
    `
    const Toggle_button = styled.button`
        float: right;
        background-color: tomato;
        color: white;
        padding: 5px;
        text-align: center;
        cursor : pointer;
        width: 150px;
        height: 40px;
        font-size: 20px;
    `
    const Seat_div = styled.div`
        border: 1px solid black;
        // height: 200px;
    `
    return (
        <Main_container>
            <Container>
                <Name_container>
                    <Travel>{data.travel_name}</Travel>
                    <Name>{data.bus_name} </Name>
                    <Span>
                    <Icon src = "https://news.northeastern.edu/wp-content/uploads/2020/05/mask_icon.png"></Icon></Span>
                    <Span>
                    <Icon src = "https://cdn2.iconfinder.com/data/icons/coronavirus-160/48/covid_3_bold-08-512.png"></Icon>
                    </Span>
                    <Span>
                    <Icon src = " https://cdn4.iconfinder.com/data/icons/hand-washing-line/64/hygiene-17-512.png"></Icon>
                    </Span>
                   
                </Name_container>
                <Departure_container>
                    <Departure_time>{data.pick_up_time} hours</Departure_time>
                    <Departure_address>{data.pickup_address}</Departure_address>
                </Departure_container>
                <Duration>
                    <Duration_time>{data.duration} Hours</Duration_time>
                </Duration>
                <Arrival_container>
                    <Arriaval_time>{data.drop_time} Hours</Arriaval_time>
                    <Arriaval_address>{data.drop_address}</Arriaval_address>
                </Arrival_container>
                <Rating_container>
                    <Rating> *{data.rating}</Rating>
                </Rating_container>
                <Fare_container>
                    Starts from INR<span>
                    <Ticket_price>₹ {data.price}</Ticket_price></span>
                </Fare_container>
                <Seat_container>
                    <Seat>{data.seats_available}</Seat>
                    Seats available
                </Seat_container>
            </Container>
            <ViewSeat_btn>
                <Span style = {{}}>Amenitie | Boarding and Droping Points | Reviews | Booking Policies | </Span>
                <Toggle_button onClick = {() => setToggle(!toggle)}>View Seats</Toggle_button>
            </ViewSeat_btn>
            {
                toggle? (
                    <Seat_div>
                        <Showseat bus = {data}/>
                     </Seat_div>
                ): (
                    ""
                )
            }
            
        </Main_container>
    )
}
export {OneBus};