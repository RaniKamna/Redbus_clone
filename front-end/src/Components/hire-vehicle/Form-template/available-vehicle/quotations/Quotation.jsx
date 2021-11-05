
import styled from "styled-components";
import {useState, useEffect} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Details} from "./details/Details";

function Quotation({data, duration_dist}) {


    const Wrapper = styled.div `
        width: 350px;
        // border: 1px solid black;
        height: 480px;
        border-radius: 10px;
        padding: 10px;
        background-color: white;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);

    `
    const Image_container  = styled.div`
        width: 100%;
        height: 50%;
        border: 1px solid black;
        text-align: center;
        background-color: gray;
        border-radius: 10px;
    `
    const Image = styled.img`
        width: 90%;
        height: 100%;
    `
    const Text_container = styled.div`
        width: 100%;
        height: 38%;
        // border: 1px solid black;
    `
    const Name_model = styled.div`

        width: 100%;
        height: 60px;

    `
    const Name = styled.h1 `
        font-size: 19px;
    `
    const Model = styled.p  `
        margin-top: -10px;
    `
    const Feature_price = styled.div`
        width: 100%;
        height: 80px;
        margin-top: -10px;
        display: grid;
        grid-template-columns: 60% 40%;

    `
    const Feature = styled.div`


    `
    const Price = styled.div `

    `
    const Span = styled.span`
        color: red;
        font-weight: bolder;
    `
    const B = styled.div`
        margin-top: -5px;
        // padding-bottom: 3px;
    `

    const [id, setId] = useState(data._id);
   

    const [distance, setDistance] = useState(1);
    const [totalPrice, setTotalPrice] = useState(1)
    useEffect(() => {
        // setTime(duration_dist.duration)
        let distance_price = Math.ceil(duration_dist.distance / 1000) * data.per_km;
        // console.log(duration_dist.distance);
        setDistance(Math.ceil(duration_dist.distance / 1000));
        let driver_price = Math.ceil(data.driver_bata * (Math.ceil(duration_dist.duration / 86400)));
        let total = (distance_price + driver_price) * 2;
        // console.log(total);
        setTotalPrice(total);
    }, [])
    

    return (
        
        
        <Wrapper>
            <Image_container>
                <Image src = {data.image} />
            </Image_container>

            <Text_container>
                <Name_model>
                    <Name>{data.name}</Name>
                    <Model>{data.model}</Model>
                </Name_model>
                <Feature_price>
                    <Feature>
                        <p>Feature</p>
                        <ul>
                            <li>{data.feature[0]}</li>
                            <li>{data.feature[1]}</li>
                        </ul>
                    </Feature>
                    <Price>
                        <p>Starting from</p>
                        <Span>₹ {totalPrice} </Span>
                        <p>{distance} KMS included</p>
                    </Price>
                </Feature_price>
            </Text_container>
            <br />
            <hr />
            
            <B><Link className = "L" to = {{pathname: "/details", state : {idb : data._id}, duration_distance : {durationDistance : duration_dist}}}>view details</Link></B>
            
        </Wrapper>
        
       
        
    )
}





export {Quotation};