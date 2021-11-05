import {useState} from "react";
import "./order-details.css";
import styled from "styled-components";
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";


function Order ({data, path}) {


    const Wrapper = styled.div`
        width: 100%;
        height: 80px;
        margin: auto;
        display: grid;
        grid-template-columns: 15% 20% 15% 15% 10% 10%;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);

        grid-gap: 3px;
       
    `;

    return (
        <Wrapper>
            <div></div>
            <div className = "address">
                Oustation Round Trip to  
                {data.pick_up} to {data.destination}'
            </div>
            <div className = "time-from">
                Departure by 
                {data.from_time}
            </div>
            <div className = "time-till">
                Return by 
                {data.till_time}
            </div>
            <div className = "pass-number">
                passenger  
                {data.number_passanger} people
            </div>
            <div className = "modify-btn-container"><button className = "modify-btn"><Link class = "o" to =  "/outstation">Modify</Link></button></div>
        </Wrapper>
    )
}

export {Order};