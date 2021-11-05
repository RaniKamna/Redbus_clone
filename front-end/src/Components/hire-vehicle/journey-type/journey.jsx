import {useState} from "react";
import "./journey.css";

function Journey({data}) {
    return (
        <div className = "journey-component-container">
            <div className = "text-container">
                <h1 className = "name">{data.name}</h1>
                <p className = "area"> {data.area}</p>
                <p className = "your-city">{data.yourcity}</p>
            </div>
            <div className = "image-containera">
                <img className = "imge" src = {data.image} alt = "img" />
            </div>
        </div>
    )
}


export {Journey};