import {useState, useEffect} from "react";
import axios from "axios";
import {bus} from "./util/request";

// import {Show} from "./show-vehicle/Show-vehicle";


const Vehicle = () => {
    const obj = {
        name : "26 Seater Maruti Suzuki",
        model : "M2343",
        total_seat : 4,
        starting_price : "₹11/km  ₹250/hr",
        city: "Mumbai",
        driver_bata : "₹300/day",
        local_package_start : "4 Hours 40kms: ₹800/-",
        feature : [
            "Charging point", "Back compartment Storage", "Music system"
        ],
        image : "https://s1.rdbuz.com/busoperatorimages/1585744021913_md.jpeg?auto=format&fit=max&w=384"
    }


    const get_vehicle= async () => {
        
    }
    
    return (
        <div>
            {/* <Show data = {obj} /> */}
        </div>
    )
}


export {Vehicle};