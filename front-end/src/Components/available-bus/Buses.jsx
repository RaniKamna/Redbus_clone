import styled from "styled-components";
import {useState, useEffect} from "react";
import {OneBus} from "./one-bus/OneBus";
import "../LandingPage/searchBuses.css"


function Buses() {
    const [buses, setBuses] = useState();
    
    //  const [loading, setLoading] = useState(true);
    const getBuses = async() => {
        let res = await fetch("http://localhost:2233/booking/data");
        let busesa = await res.json();
        setBuses(busesa.item)

    }
   

    useEffect(() => {
        getBuses();
        // setLoading(false);
    }, []);
    // console.log(buses);
    // if(buses.length !== 0) {
    //     setLoading(false)
    // } else {
    //     setLoading(true);
    // }
    const handleClick= () => {
     var arr =   buses.filter((item)=>(
            item.pick_up_time <= 6
        ))
        setBuses(arr.item)
       }
 console.log("ready:",buses)


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
            <Filter_container>
            <div className="poora">
            <div className="poora1">
                <div>
                    <div className="head">FILTERS</div>
                    <hr />
                    <div className="bdy"><img className="imgs" src="https://www.freeiconspng.com/uploads/school-bus-icon-12.png" alt="" /> Live Tracking</div>
                    <hr />
                    <div className="bdy"><img className="imgs" src="https://img.favpng.com/24/16/9/computer-icons-price-tag-png-favpng-7AEYXd10DhTqmZfN87Tb9CsR9.jpg" alt="" /> Red Deals</div>
                    <hr />
                    <div className="bdy"> <img className="imgs" src="https://as2.ftcdn.net/v2/jpg/02/18/43/79/500_F_218437966_oUGkb1oXx2UbAh98zT79TVHDVmhX0Pwf.jpg" alt="" /> Reshedulable</div>
                    <hr />
                </div>
                <br />

                <div className="inp"> 
                    <div className="head">DEPARTURE TIME</div>
                    <div className="bdy" onClick={handleClick}>
                        <input type="checkbox" className="inp1" /> <img className="imgs" src="https://freepngimg.com/download/alarm/22921-5-morning-alarm-image.png" alt="" /> <div  >  Before 6am</div>
                    </div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><img className="imgs" src="https://th.bing.com/th/id/R.7753f50f02196a8547d206dc00a485fd?rik=kDj3UsII659w8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_183081.png&ehk=PgJb3%2f9xAwPor0E4QcelZk76VKx%2bAJYgz%2bzePpOi5og%3d&risl=&pid=ImgRaw&r=0" alt="" /> <div>6am to 12pm</div>
                    </div >
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_168368.png" alt="" /> <div>12pm to 6pm</div>
                    </div >
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_447445.png" alt="" /> <div>After 6pm</div>
                    </div>
                </div>
                <br />


                <div className="inp">
                    <div className="head">BUS TYPES</div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1" /><div>SEATER</div>
                    </div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><div>SLEEPER</div>
                    </div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><div>AC</div>
                    </div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1" /><div>NON AC</div>
                    </div>
                </div>

                <br />

                <div className="inp">
                    <div className="head">ARRIVAL TIME</div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1" /> <img className="imgs" src="https://freepngimg.com/download/alarm/22921-5-morning-alarm-image.png" alt="" /> <div>  Before 6am</div>
                    </div>
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><img className="imgs" src="https://th.bing.com/th/id/R.7753f50f02196a8547d206dc00a485fd?rik=kDj3UsII659w8Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_183081.png&ehk=PgJb3%2f9xAwPor0E4QcelZk76VKx%2bAJYgz%2bzePpOi5og%3d&risl=&pid=ImgRaw&r=0" alt="" /> <div>6am to 12pm</div>
                    </div >
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_168368.png" alt="" /> <div>12pm to 6pm</div>
                    </div >
                    <div className="bdy">
                        <input type="checkbox" className="inp1"/><img className="imgs" src="https://cdn.onlinewebfonts.com/svg/img_447445.png" alt="" /> <div>After 6pm</div>
                    </div>
                </div>
                <br />

                <div className="inp">
                    <div className="head">DROPPING POINT</div>
                    <div className="bdy">
                        <input type="text" placeholder="DROPPING POINT" /><br />
                    </div>
                </div>
                <br />

                <div className="inp">
                    <div className="head">OPERATOR</div>
                    <div className="bdy">
                        <input type="text" placeholder="OPERATOR" /><br />
                    </div>
                </div>
                <br />
                <div className="inp">
                    <div className="head">AMENITIES</div>

                    <div className="bdy">
                        <div> <img className="imgs" src="https://static.vecteezy.com/system/resources/previews/000/441/701/original/wifi-vector-icon.jpg" alt="" />   WIFI</div>
                    </div>
                    <div className="bdy">
                        <div><img className="imgs" src="https://maxcdn.icons8.com/Share/icon/Food/bottle_of_water1600.png" alt="" />   Water Bottle</div>
                    </div>
                    <div className="bdy">
                        <div><img className="imgs" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/blanket-7-582299.png" alt="" />   Blankets</div>
                    </div>
                    <div className="bdy">
                        <div><img className="imgs" src="https://th.bing.com/th/id/OIP.gfFdPhqu7WhbcXlx2LaCzQHaHa?pid=ImgDet&rs=1" alt="" />   Charging Point</div>
                    </div>
                    <div className="bdy">
                        <div><img className="imgs" src="https://th.bing.com/th/id/OIP.FX2D4IYJXj70rMJhiIy7hQHaHa?pid=ImgDet&rs=1" alt="" /> Movie</div>
                    </div>
                    <div className="bdy">
                        <div><img className="imgs" src="https://cdn4.iconfinder.com/data/icons/track/154/bus-512.png" alt="" /> Track My Bus</div>
                    </div>
                    <div className="bdy">
                        <div> <img className="imgs" src="https://image.flaticon.com/icons/png/512/124/124992.png" alt="" />   Emergrncy Contact Number</div>
                    </div>
                    <div className="bdy">
                        <div> <img className="imgs" src="https://img.favpng.com/18/5/15/public-toilet-icon-png-favpng-JBDLZqNXHRjuC2gDzkVZhAMU0.jpg" alt="" />    Toilet</div>
                    </div>
                </div>



            </div>
        </div>
            </Filter_container>
            
                    <Available_bus_container>
                        <Sort_div>
                            <div>{buses.length} Bus found</div>
                            <div style = {{fontWeight: "bold"}}>Sort by :</div>
                            <div>Departure</div>
                            <div>Duration</div>
                            <div>Arrival</div>
                            <div>Ratings</div>+
                            <div>Fare</div>
                            <div>Seats available</div>
                        </Sort_div>
                        {
                            buses.map((e) => (
                                <OneBus key = {e._id} data = {e}></OneBus>
                            ))
                        }
                        
                    </Available_bus_container>
             
            
        </Container>
    )
}
export {Buses};