import styles from './showseat.module.css';

export const Showseat = () => {
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
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                        </div>
                                                        <div style={{ display: 'flex' }}>
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
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                        </div>
                                                        <div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                        </div>
                                                        <div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                        </div>
                                                        <div style={{ display: 'flex' }}>
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
                                                            <div><img src="./seat.jpg" alt="" /></div>
                                                            <div><img src="./seat.jpg" alt="" /></div>
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
                    </div>
                </div>
            </div>
        </>
    )
}