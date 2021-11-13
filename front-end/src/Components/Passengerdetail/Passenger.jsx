import styles from './passenger.module.css';

import {useState} from "react";
import {Link, Switch, Route} from "react-router-dom";



//modal box for payment
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




export const Passenger = ({Seat, price, busId}) => {
   
  

//payment model

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  


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

// const [pay, setPay] = useState(true);
const BuyTicket = async () => {
    // await fetch(`http://localhost:2233/booking/update/${busId}`, {
    //     method : "PATCH",
       
    //     body: JSON.stringify(formData),
    //     headers : {
    //         'Content-Type' : "application/json"
    //     }
    // });
    console.log("This fetch work left")
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
                                                    <input  name = {`name${e}`} onChange = {onChangeValue} className={styles.inpblock} type="text" placeholder='Name' />
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
                                                            <input  onChange = {onChangeValue} type="text" name={`age${e}`} placeholder='age' className={styles.inpblock} />
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
                                        <input  onChange = {onChangeValue} type="text" placeholder='Email ID' name = "email" className={styles.inpblock} /></label>
                                </div>
                            </div>
                            <div style={{ marginBottom: '0.8em' }}>
                                <label className={styles.phn}>Phone</label>
                                <div style={{ display: 'flex' }}>
                                    <div className={styles.nusel}>
                                        +91
                                    </div>
                                    <input type="text" onChange={onChangeValue}  name = "phone" className={styles.inpblock} placeholder='Phone' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>total price : {price} </h2>
                
                    <Button onClick = {handleOpen} style = {{margin: "auto", width: "400px", height: "50px", marginLeft: "200px", backgroundColor:"tomato", fontSize: "25px", fontWeight: "bold", color: "white"}}>buy ticket</Button>
                
            </div>
            <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" sx={style}>
                    
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <div><h1>Payment method</h1></div>
                    <h3 style = {{marginTop: "-20px"}}>Pay with google pay<span style = {{marginLeft : "40px", borderRadius: "50%", marginTop: "20px"}}><img style = {{marginTop: "40px", width: "40px", height: "35px"}} src = "https://img.icons8.com/color/2x/google-pay-india.png" alt = "" /></span></h3>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div>
                    <input value = {formData.phone} style = {{width: "400px", height: "50px", fontSize: "25px"}} type = "text" placeholder = "Enter the phone number" />
                <Link style = {{fontSize: "26px", fontWeight: "bold", color: "white"}} to = "/"><button style = {{marginTop: "30px", width: "400px", height: "50px"}}>pay now & Go to home page</button></Link>
                    
                    </div>
                </Typography>
                </Box>
            </Modal>
            </div>
            
        </div>

    )
}