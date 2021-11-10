import styled from "styled-components";
import {useState, useEffect} from "react";



function Buses() {


    const [buses, setBuses] = useState([]);

    const getBuses = async() => {
        let res = await fetch("http://localhost:2233/booking");
        let busesa = await res.json();
        setBuses([...buses, busesa.item]);
    }
    useEffect(() => {
        getBuses();
        console.log(buses[0].item);
    }, []);

    // console.log(buses);



    const Container = styled.div`
        width: 100%;
        height: 1000px;
        display: grid;
        grid-template-columns: 25% 70%;
        border: 1px solid black;
    `
    const Filter_container = styled.div`
        width: 100%;
        border: 1px solid black;
        height: 1000px;
    `
    const Available_bus_container = styled.div`
        border: 1px solid black;
        width: 100%;
        height: 1000px;
    `





    return (
        <Container >
            <Filter_container></Filter_container>
            <Available_bus_container>

            </Available_bus_container>
        </Container>
    )
}

export {Buses};