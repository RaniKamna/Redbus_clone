import styled from "styled-components";
import {useState, useEffect} from "react";



function Buses() {

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
            <Filter_container>this is the test</Filter_container>
            <Available_bus_container></Available_bus_container>
        </Container>
    )
}

export {Buses};