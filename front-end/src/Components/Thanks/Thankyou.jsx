import styles from './thankyou.module.css';

export const Thankyou = () => {
    return (
        <div className={styles.container}>
            <div className={styles.msg}>
                <p>Chat with operator and co-passengers on WhatsApp Group and get
                    help on bus location, boarding point, bus service and more.
                    Invite link will be sent 1 hour before departure
                </p>
            </div>
            <div className={styles.divs}>
                <div className={styles.div1}>
                    <div className={styles.div12}>
                        <div className={styles.div123}>
                            <div className={styles.datebx}>
                                <div className={styles.date}>05</div>
                                <p>Mar 2019</p>
                                <div className={styles.cnfrm}>CONFIRMED</div>
                            </div>
                            <div className={styles.addbx}>
                                <h3>MUMBAI - GOA</h3>
                                <h4 style={{marginBottom:'6px'}}>Kaloji Travels</h4>
                                <p style={{marginTop:'4px'}}>A/C Sleeper (2+1)</p>
                            </div>
                            <div className={styles.tokenbx}>
                                <p style={{color:'blue', cursor:'pointer'}}>Print/Download</p>
                                <h4>redBus Ticket ID: TN 1234567890</h4>
                                <h4>Booking Reference No: 123g5sbh</h4>
                            </div>
                        </div>
                        <div className={styles.div1234}>
                            <div>
                                <p>BOARDING</p>
                                <h3>Dahisar (E)</h3>
                                <h3>Gokulanand Hotel</h3>
                            </div>
                            <div>
                                <p>DEPARTURE</p>
                                <h3>18:30</h3>
                            </div>
                            <div>
                                <p>PASSENGERS</p>
                                <h3>User name</h3>
                            </div>
                            <div>
                                <p>DROP OFF</p>
                                <h3>Mapusa, Goa</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div13}>
                        <h3>Get upto 80% OFF on Hotels in Goa</h3>
                        <h3>Mapusa, Goa</h3>
                        <p>Your Bus arrives on 06 Mar, 9:30 AM at Mapusa, Goa </p>
                    </div>
                </div>
                <div className={styles.div2}>
                    <div className={styles.sml1}>
                        <h3 style={{marginBottom:'10px'}}>RETURN TRIP</h3>
                        <h4 style={{marginTop:'1px'}}>Goa - Mumbai</h4>
                        <div className={styles.inpdiv}>
                            <input type="text" name="date" id="returnbox" placeholder='Please select date' className={styles.inpbx} />
                            <button className={styles.book}>BOOK</button>
                        </div>
                    </div>
                    <div className={styles.sml2}>
                        <div>
                            <h4>I'm Off to Goa on 05-Mar-2019</h4>
                            <h4> !! Who wants to catch up :)</h4>
                            <h4>@redBus</h4>
                        </div>
                        <div>
                            <div><img src="" alt="" /></div>
                            <div><img src="" alt="" /></div>
                        </div>
                    </div>
                    <div className={styles.sml3}>
                        <p>Congratulations! You booked your seat on a Live Tracking bus.
                            Now enjoy these benefits
                        </p>
                        <ul>
                            <li>Bus and helper details 1 hour before the journey</li>
                            <li>Real-time location</li>
                            <li>Easy access to Boarding and Dropping points</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}