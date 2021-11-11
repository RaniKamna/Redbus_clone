import styled from "styled-components";
import {useState, useEffect} from "react";
import {OneBus} from "./one-bus/OneBus";


function Buses({data}) {

    // console.log("check", buses);
    console.log("data", data);

    const [buses, setBuses] = useState([]);
    // // const [loading, setLoading] = useState(true);

    const getBuses = async() => {
        let res = await fetch("http://localhost:2233/booking/data");
        let busesa = await res.json();

        // setBuses(busesa.item);
        setBuses([...buses, busesa.item])

    }
    useEffect(() => {
        getBuses();
        // setLoading(false);
        console.log(buses);
    }, []);

    // console.log(buses);
    // if(buses.length !== 0) {
    //     setLoading(false)
    // } else {
    //     setLoading(true);
    // }



    const Container = styled.div`
        width: 100%;
        // height: 1000px;
        display: grid;
        grid-template-columns: 25% 70%;
        border: 1px solid black;
        grid-gap: 3%;
    `
    const Filter_container = styled.div`
        width: 100%;
        border: 1px solid black;
        // height: 1000px;
    `
    const Available_bus_container = styled.div`
        // border: 1px solid black;
        width: 100%;
        display: grid;
        grid-gap: 20px;
        flex-wrap: wrap;
        margin-top: 20px;
    `

    const Sort_div = styled.div`
        width: 100%;
        height: 50px;
        border: 1px solid black;
        display: grid;
        grid-template-columns: 18% 10% 10% 10% 10% 10% 10% 10%;
        grid-gap: 10px;

    
    `



    return (
        <Container >
            <Filter_container></Filter_container>
            
                    <Available_bus_container>
                        <Sort_div>
                            <div>{buses[0].length} Bus found</div>
                            <div style = {{fontWeight: "bold"}}>Sort by :</div>
                            <div>Departure</div>
                            <div>Duration</div>
                            <div>Arrival</div>
                            <div>Ratings</div>
                            <div>Fare</div>
                            <div>Seats available</div>
                        </Sort_div>
                        {
                            buses[0].map((e) => (
                                <OneBus key = {e._id} data = {e}></OneBus>
                            ))
                        }
                        
                    </Available_bus_container>
             
            
        </Container>
    )
}

export {Buses};