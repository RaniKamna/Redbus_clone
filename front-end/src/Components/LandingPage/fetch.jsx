import Axios from "axios";

const place=Axios.create({
    baseURL:"http://localhost:3001/places"
})

export {place}