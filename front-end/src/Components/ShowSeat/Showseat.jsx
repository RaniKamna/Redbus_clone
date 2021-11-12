import styles from './showseat.module.css';
import Drawer from "@material-ui/core/Drawer";
import React from "react";




import {useState, useEffect} from "react";
import {Passenger} from "../Passengerdetail/Passenger";




// //implementing sidebar 





export const Showseat = ({bus}) => {
    
    //implement siderbar 


    const [formDrawerState, setformDrawerState] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if(event.type === "keydown" && (event.key === "Tab" || event.key === "shift")) {
            return;
        }
        setformDrawerState(open);
    }





    const [selectedSeat, setSelectedSeat] = useState({})
    const [condition, setCondition] = useState(false);
    const [seat, setSeat] = useState();


  const handleChange = (e) => {
        let {name, checked, type} = e.target;
        setSelectedSeat({...selectedSeat, [name] : type="checkbox" ? checked: ""})
  }

  useEffect(() => {

    for(let x in selectedSeat) {
        if(selectedSeat[x] === false) {
            setCondition(false);
            continue;
        } else {
            setCondition(true);
            break;
        }
    }

    const a = []
    for (let y in selectedSeat) {
        if(selectedSeat[y] == false) {
            continue
        } else {
            a.push(y)
        }
    }

    setSeat(a);


  }, [selectedSeat])




    return (
        <>
            <div className={styles.main_container}>
                <div>
                    <span className={styles.crossicon} title="close"><i class="icon-cross"></i></span>
                    <div className={styles.leftdiv}>
                        <div>
                            <div className={styles.selectseat}>
                                <div className={styles.seatsel}>
                                    <div className={styles.nav}>
                                        <div className={styles.colm}>
                                            <h3 className={styles.tagg}>Seat Price</h3>
                                            <div className={styles.btns}>
                                                <div className={styles.listall}>All</div>
                                                <div className={styles.list}>550</div>
                                                <div className={styles.list}>600</div>
                                                <div className={styles.list}>650</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.imgseat}>
                                        <div className={styles.label}>
                                            <span className={styles.lblmsg}>Click on an Available seat to proceed with your transaction.</span>
                                        </div>
                                        <div className={styles.tblvw}>
                                            <div className={styles.seat1}>
                                                <div className={styles.seattag}>Lower Deck</div>
                                                <div className={styles.border}>
                                                    <div className={styles.seatdiv}>
                                                        <div style={{ display: 'flex' }}>
                                                            {/* <div><img src="./seat.jpg" alt="" /></div> */}
                                                            <div><input  onChange = {handleChange} name = "seat1" type="checkbox" id="checkbox-id" /> <label for="checkbox-id"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat2" type="checkbox" id="checkbox-id1" /> <label for="checkbox-id1"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat3" type="checkbox" id="checkbox-id2" /> <label for="checkbox-id2"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat4" type="checkbox" id="checkbox-id3" /> <label for="checkbox-id3"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat5" type="checkbox" id="checkbox-id4" /> <label for="checkbox-id4"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat6" type="checkbox" id="checkbox-id5" /> <label for="checkbox-id5"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat7" type="checkbox" id="checkbox-id6" /> <label for="checkbox-id6"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat8" type="checkbox" id="checkbox-id7" /> <label for="checkbox-id7"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat9" type="checkbox" id="checkbox-id8" /> <label for="checkbox-id8"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat10" type="checkbox" id="checkbox-id9" /> <label for="checkbox-id9"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat11" type="checkbox" id="checkbox-id10" /> <label for="checkbox-id10"></label></div>
                                                            <div><input onChange = {handleChange} name = "seat12" type="checkbox" id="checkbox-id11" /> <label for="checkbox-id11"></label></div>

                                                            {/* <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div> */}
                                                        </div>
                                                        <div style={{ display: 'flex' }}>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat13" type="checkbox" id="checkbox-id12" /> <label for="checkbox-id12"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat14" type="checkbox" id="checkbox-id13" /> <label for="checkbox-id13"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat15" type="checkbox" id="checkbox-id14" /> <label for="checkbox-id14"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat16" type="checkbox" id="checkbox-id15" /> <label for="checkbox-id15"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat17" type="checkbox" id="checkbox-id16" /> <label for="checkbox-id16"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat18" type="checkbox" id="checkbox-id17" /> <label for="checkbox-id17"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat19" type="checkbox" id="checkbox-id18" /> <label for="checkbox-id18"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat20" type="checkbox" id="checkbox-id19" /> <label for="checkbox-id19"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat21" type="checkbox" id="checkbox-id20" /> <label for="checkbox-id20"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat22" type="checkbox" id="checkbox-id21" /> <label for="checkbox-id21"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat23" type="checkbox" id="checkbox-id22" /> <label for="checkbox-id22"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat24" type="checkbox" id="checkbox-id23" /> <label for="checkbox-id23"></label></div>
                                                            {/* <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div> */}
                                                        </div>
                                                        <div>
                                                            {/* <div><img src="./seat.jpg" alt="" /></div> */}
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat25" type="checkbox" id="checkbox-id24" /> <label for="checkbox-id24"></label></div>

                                                        </div>
                                                        <div>
                                                            {/* <div><img src="./seat.jpg" alt="" /></div> */}
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat26" type="checkbox" id="checkbox-id25" /> <label for="checkbox-id25"></label></div>

                                                        </div>
                                                        <div style={{ display: 'flex' }}>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat27" type="checkbox" id="checkbox-id37" /> <label for="checkbox-id37"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat28" type="checkbox" id="checkbox-id26" /> <label for="checkbox-id26"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat29" type="checkbox" id="checkbox-id27" /> <label for="checkbox-id27"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat30" type="checkbox" id="checkbox-id28" /> <label for="checkbox-id28"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat31" type="checkbox" id="checkbox-id29" /> <label for="checkbox-id29"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat32" type="checkbox" id="checkbox-id30" /> <label for="checkbox-id30"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat33" type="checkbox" id="checkbox-id31" /> <label for="checkbox-id31"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat34" type="checkbox" id="checkbox-id32" /> <label for="checkbox-id32"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat35" type="checkbox" id="checkbox-id33" /> <label for="checkbox-id33"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat36" type="checkbox" id="checkbox-id34" /> <label for="checkbox-id34"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat37" type="checkbox" id="checkbox-id35" /> <label for="checkbox-id35"></label></div>
                                                            <div style = {{paddingTop: "20px"}}><input onChange = {handleChange} name = "seat38" type="checkbox" id="checkbox-id36" /> <label for="checkbox-id36"></label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightdiv}>
                        {
                            condition? (
                                <div>
                                    <div>
                                        <h3>THIS BOOKING IS NON-REFUNDABLE</h3>
                                        <p>This booking falls under the 100% cancellation charges window of the cancellation policy</p>
                                    </div>
                                    <div style = {{backgroundColor: "white", padding:"20px"}}>
                                        <div className = "boarding">
                                            <h2>Boarding area</h2>
                                            <div style = {{display: "flex"}}>
                                                <p style = {{marginLeft : "40px", marginTop : "-10px"}}>Add : {bus.pickup_address}</p>
                                                <p style = {{marginLeft : "40px", marginTop : "-10px", fontWeight: "bold"}}>Time : {bus.pick_up_time}</p>
                                            </div>
                                            <h2>Dropping area</h2>
                                            <div style = {{display: "flex"}}>
                                                <p style = {{marginLeft : "40px", marginTop : "-10px"}}>Add : {bus.drop_address}</p>
                                                <p style = {{marginLeft : "40px", marginTop : "-10px", fontWeight: "bold"}}>Time : {bus.drop_time}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className = "seat">
                                            <h3>Seat No.</h3>
                                            <div style = {{display: "flex"}}>
                                                {
                                                   seat.length !== 0 ? (
                                                       <div style = {{display: "flex", marginLeft : "5px", marginTop : "-15px"}}>
                                                    {seat.map((e) => (
                                                       <h3 style = {{marginLeft: "10px"}}>{e}</h3>
                                                   ))}
                                                    </div>
                                                   ): ""
                                                }
                                                
                                            </div>
                                        </div>
                                        <hr />
                                        <div className = "amount">
                                            <h3>Fare Details</h3>
                                            <div style = {{display: "flex"}}>
                                                <div>
                                                    <p>Amount</p>
                                                    <p style = {{color: "gray", marginTop: "-10px"}}>Taxes will be calculated during payment</p>
                                                </div>
                                                <h3 style = {{marginLeft: "-30px"}}>INR {bus.price * seat.length}</h3>
                                            </div>
                                        </div>


                                        <div>

                                            <button onClick = {toggleDrawer("right", true)}  style = {{width: "400px", color: "white", fontSize : "24px", textAlign : "center", backgroundColor: "tomato"}}>PROCEED TO BOOK</button>
                                        </div>
                                        <div>
                                                <Drawer anchor = "right" open = {formDrawerState} onClose={toggleDrawer(false)}>
                                                    <div style = {{width: "700px"}}>
                                                        <Passenger busId = {bus._id} price = {bus.price * seat.length} Seat = {seat}></Passenger>
                                                    </div>
                                                </Drawer>
                                        </div>

                                    </div>
                                 </div>
                                 
                            ) : (
                                <>
                                <div style={{ marginTop: '10px' }}>
                                    <h3 style={{ fontSize: '15px' }}>SEAT LEGEND</h3>
                                    <div>
                                        <div style={{ marginRight: '50px', display: 'flex' }}>
                                            <div className={styles.boxtext}>
                                                <div className={styles.chkbox}></div>
                                                <div className={styles.chktext}>available</div>
                                            </div>
                                            <div className={styles.boxtext}>
                                                <div className={styles.chkbox}></div>
                                                <div className={styles.chktext}>unavailable</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <h3 className={styles.deal}>redDeal</h3>
                                    <p style={{ marginBottom: '3px' }}>Get INR 50.0 Extra OFF</p>
                                    <p style={{ marginBottom: '3px', marginTop: '3px' }}>Terms and Conditions:</p>
                                    <p style={{ marginBottom: '3px', marginTop: '3px' }}>Minimum ticket fare : INR 51</p>
                                </div>
                                </>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
