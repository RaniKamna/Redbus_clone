import {useState} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Order} from "./order-details/Order-details";
import {Quotation} from "./quotations/Quotation";
import "./available-vehicles.css";
import styled from "styled-components";

function Available_vehicle ({available, form_data}) {
    
    const Wrapper = styled.div`
        width: 100%;
        height: 50px;
        display: grid;
        grid-template-columns: 18% 70%;

    `
   const Image = styled.img`
        width: 50px;
        height: 40px;
   `
   const Text = styled.p`
        width: 100%;
        height: 100%;
        margin-top: -4px;
        font-size: 20px;
        margin-left: 10px;
        padding: 5px;

   `
    return (
        
        <div>
            <Order path = {true} data = {form_data} />
            <h2 className = "q">We have something quotation for you</h2>
            <div className = "q_s_container">
                <div className = "quotation_container">
                    {
                        available.map((e) => (
                             <Quotation duration_dist= {form_data} data = {e} />

                        ))
                    }
                    {/* <Quotation duration_dist= {form_data} data = {available[1]} />
                    <Quotation duration_dist= {form_data} data = {available[2]} /> */}


                </div>
                <div className = "safety_container">
                    <div className = "c">
                        <div className = "first">
                            <img class = "safetyImage" src = "https://www.redbus.in/bushire/static/mwebv2/home/logo-safety-plus.svg" alt = "safety" />
                            <div>
                                <h2>Safety+</h2>
                                <p>Your safety is our top priority.</p>
                            </div>
                        </div>
                        <div className = "d">
                            <Wrapper>
                                <Image src = "https://www.redbus.in/bushire/static/mwebv2/home/ic-hand-sanitizers.svg" alt = "sanitizers"></Image>
                                <Text>Hand Sanitizers in all vehicles</Text>
                            </Wrapper>
                            <Wrapper>
                                <Image src = "https://www.redbus.in/bushire/static/mwebv2/home/ic-mask.svg" alt = "sanitizers"></Image>
                                <Text>Masks worn by all staff</Text>
                            </Wrapper>
                            <Wrapper>
                                <Image src = "https://www.redbus.in/bushire/static/mwebv2/home/ic-clean.svg" alt = "sanitizers"></Image>
                                <Text>Deep cleaning of vehicles</Text>
                            </Wrapper>
                            <Wrapper>
                                <Image src = "https://www.redbus.in/bushire/static/mwebv2/home/ic-blanket.svg" alt = "sanitizers"></Image>
                                <Text>No Blankets/ Linen provided</Text>
                            </Wrapper>
                            <Wrapper>
                                <Image src = "https://www.redbus.in/bushire/static/mwebv2/home/ic-temprature.svg" alt = "sanitizers"></Image>
                                <Text>Regular staff body temprature checks</Text>
                            </Wrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export {Available_vehicle};