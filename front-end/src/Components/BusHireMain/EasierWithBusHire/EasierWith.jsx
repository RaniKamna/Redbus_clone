import './EasierWith.css'



export const EasierWith = () => {
  return (
    <div className="MainEasier">
         <div className="SubMainEasier">
         <div className="EasierHeading">Easier with Bus Hire</div>
         <div className="EasierButton">
             <button>Easy Payment</button>
             <button>Easy Booking</button>
             <button>Fare Transparency</button>
         </div>
         <div className="EasyPaymentSec">
               <div className="EasyPayment">
                   <div><img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-advance-payment.svg" alt="" /></div>
                   <div className="EasyPaymentText">Pay advance starting from just 25% to book the vehicle.</div>
               </div>
               <div className="EasyPayment">
                   <div><img src="https://www.redbus.in/bushire/static/mwebv2/home/ic-card-payment.svg" alt="" /></div>
                   <div className="EasyPaymentText">Pay the balance by Credit Card / Debit Card / UPI / Net Banking / Cash to Driver.</div>
               </div>
         </div>
         </div>
    </div>
  );
};
