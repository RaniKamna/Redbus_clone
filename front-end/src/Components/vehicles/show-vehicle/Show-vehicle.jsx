// import {useState} from "react";
import "./show-vehicle.css";


function Show_one ({data}) {
    // console.log(data);
    return (
        <div className = "containera">
            <div className = "image-container">
                <img className = "img" src = {data.image} alt = "image" />
            </div>
            <div className = "details">
                <p className = "name">{data.name}</p>
                <p className = "starting_price">Starting from :<span> {data.starting_price}</span></p>
                
                <p className = "city"> city <span>{data.city}</span></p>
                <p className = "driver_bata"> driver Bata ₹{data.driver_bata}</p>
                <p className = "local_package">Local packages starging from {data.local_package_start}</p>
                <p className = "fuel">Fuel Included</p>
                <ul className = "feature">
                    <li>{data.feature[0]}</li>
                    <li>{data.feature[1]}</li>
                    <li>{data.feature[2]}</li>

                </ul>
                <button className = "btn_price">GET BEST PRICE</button>
            </div>
        </div>
    )
}

export {Show_one};