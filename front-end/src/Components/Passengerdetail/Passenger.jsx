import styles from './passenger.module.css';

import {useState} from "react";
import {Link} from "react-router-dom";

export const Passenger = ({Seat, price, busId}) => {
   
  
  


const [formData, setFormData] = useState({});



const onChangeValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;


    // passenger_details[name] = value;
   
    // for (let x in passenger_details) {
    //     if(passenger_details[x] !== "") {
    //         ticket.passenger.push(passenger_details);
    //     }
    // }
    
    setFormData({...formData, [name] : value});
    
}
console.log(busId);


const BuyTicket = async () => {
    await fetch(`http://localhost:2233/booking/update/${busId}`, {
        method : "PATCH",
       
        body: JSON.stringify(formData),
        headers : {
            'Content-Type' : "application/json"
        }
    });
}






    return (
        <div className={styles.main_container}>
            <div>
                <i class="fl icon icon-right back-arrow" id={styles.backarw} title="Back"></i>
                <h4 className={styles.heading}>Passenger Detail</h4>
            </div>
            <div className={styles.container}>
                <div>
                    <div>
                        <div className={styles.headingdet}>
                            <i class="icon-profileIcon fl"></i>
                            <span className={styles.title}>Passenger Information</span>
                        </div>
                        {
                            Seat.map((e) => 
                                
                         
                        <div className={styles.pasdet}>
                            <div>
                                <div className={styles.detail1}>
                                    <div className={styles.passeat}>
                                        <span className={styles.pass1}>Passenger Details</span>
                                        <span className={styles.seats}>{e}</span>
                                    </div>
                                    <div>
                                        <div className={styles.namediv}>
                                            <div>
                                                <label className={styles.namelbl}>Name
                                                    <input name = {`name${e}`} onChange = {onChangeValue} className={styles.inpblock} type="text" placeholder='Name' />
                                                </label>
                                            </div>
                                        </div>
                                        <div className={styles.agendiv}>
                                            <div className={styles.gendiv}>
                                                <div style={{ marginBottom: '0.8em' }}>
                                                    <div>
                                                        <span>Gender</span>
                                                        <div style={{ marginTop: '0.6em', textAlign: 'center' }}>
                                                            <span>
                                                                <div style={{ position: 'relative' }}>
                                                                    <div className={styles.male}></div>
                                                                    <input onChange = {onChangeValue} type="radio" name={`gender${e}`}value='male' className={styles.malebx} />
                                                                    <label className={styles.malelabel}>Male</label>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div style={{ float: 'left', position: 'relative' }}>
                                                                    <div className={styles.female}></div>
                                                                    <input onChange = {onChangeValue} type="radio" name={`gender${e}`} value='female' className={styles.femalebx} />
                                                                    <label className={styles.malelabel}>Female</label>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.agediv}>
                                                <div style={{ width: '100%', marginBottom: '0.8em' }}>
                                                    <div>
                                                        <label>Age
                                                            <input onChange = {onChangeValue} type="text" name={`age${e}`} placeholder='age' className={styles.inpblock} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                           )
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.topdiv}>
                            <span style={{ paddingTop: '3px', float: 'left' }}>Contact Details</span>
                        </div>
                        <div className={styles.lowdiv}>
                            <div className={styles.msgg}>Your ticket will be sent to these details</div>
                            <div style={{ marginBottom: '0.8em' }}>
                                <div>
                                    <label className={styles.namelbl}>Email ID
                                        <input onChange = {onChangeValue} type="text" placeholder='Email ID' name = "email" className={styles.inpblock} /></label>
                                </div>
                            </div>
                            <div style={{ marginBottom: '0.8em' }}>
                                <label className={styles.phn}>Phone</label>
                                <div style={{ display: 'flex' }}>
                                    <div className={styles.nusel}>
                                        +91
                                    </div>
                                    <input type="text" onChange={onChangeValue} name = "phone" className={styles.inpblock} placeholder='Phone' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>total price : {price} </h2>
                <Link to = "/">
                    <button onClick = {BuyTicket} style = {{margin: "auto", width: "400px", height: "50px", marginLeft: "200px", backgroundColor:"tomato", fontSize: "25px", fontWeight: "bold", color: "white"}}>buy ticket</button>
                </Link>
            </div>
        </div>
    )
}