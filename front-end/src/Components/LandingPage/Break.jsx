

import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "./break.css"
export default class Break extends Component{
state ={
  items:[
    {id:1,tit:"Save up to Rs 150 on bus tickets",tit2:"Use code FIRST",url:"https://st.redbus.in/Images/INDOFFER/Nonatak/new/80x80.png"},
    {id:2,tit:"State wise Guidelines",tit2:"Click here for latest updates",url:"https://st.redbus.in/Images/buscommon/guidelines.png"},
     {id:3,tit:"Get 10% off upto Rs 100 on Gujarat routes.",tit2:"Use code LIGHTS10",url:"https://st.redbus.in/Images/INDOFFER/FESTIVE/New/Diwali/274x147.png"},
    {id:4,tit:"Flat Rs.300 cashback for first time slice users.",tit2:"Use code SLICEIT",url:"https://st.redbus.in/Images/slice/247x147.png"},
     {id:3,tit:"Get upto Rs. 500 on minimum purchase of Rs 300.",tit2:"Pay using Amazon pay",url:"https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png"},
    {id:4,tit:"Get 15% off upto Rs 150",tit2:"Use code SLICEIT",url:"https://st.redbus.in/Images/slice/247x147.png"}
  ]
}
  render(){
    const {items} =this.state;
    const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
]; 
  return(
    
        <Carousel breakPoints={breakPoints}>
        {items.map(item => <div key={item.id} className="div divq" > <p>{item.tit}</p> <img src={item.url} alt="imss"/> <p>{item.tit2}</p> </div>)}
        </Carousel>

  )
}

}