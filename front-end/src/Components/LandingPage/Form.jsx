import styles from "./LandingPage.module.css"
import { Route, Switch, Link } from 'react-router-dom';
import { useState } from "react";


export const Form = ({handleAddForm}) => {

    const [from,setFrom] = useState(""); 
    const [to,setTo] = useState(""); 
    const handleChange1 =({target})=>{
        setFrom(target.value);
      
    }
     const handleChange2 =({target})=>{
        
        setTo(target.value);
    }

    const handleClick =()=>{
        const data ={
            id: 1,
            from:from,
            to:to,
        }
        handleAddForm(data)
        setFrom("");
        setTo("");
        }
        console.log("fiter",from)
        console.log("asd",to)


    return (
        <div className={styles.total_form}>
            <div className={styles.type_from}>
                <input
                    type="text"
                    placeholder="FROM"
                    value={from}
            onChange={handleChange1}

/>
            </div>
            <div className={styles.type_to}>
                <input
                    type="text"
                    placeholder="TO"
                    value={to}
                    onChange={handleChange2}/>
            </div>

            <div className={styles.type_date}>
                <input
                    type="date"
                    placeholder="DATE"/>
            </div>

            <div >

               {/* <Link to='/available_bus' > */}
               <Link to = {`/available_bus?from=${from}&to=${to}`}>
                    <button className={styles.link} onClick={handleClick} >Search Buses</button>
                </Link>
            </div>
        </div>
    )
}

//export { Form }