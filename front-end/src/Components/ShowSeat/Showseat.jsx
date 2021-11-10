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
                                                            {/* <div><img src="./seat.jpg" alt="" /></div> */}
                                                            <div><input type="checkbox" id="checkbox-id" /> <label for="checkbox-id"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id1" /> <label for="checkbox-id1"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id2" /> <label for="checkbox-id2"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id3" /> <label for="checkbox-id3"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id4" /> <label for="checkbox-id4"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id5" /> <label for="checkbox-id5"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id6" /> <label for="checkbox-id6"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id7" /> <label for="checkbox-id7"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id8" /> <label for="checkbox-id8"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id9" /> <label for="checkbox-id9"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id10" /> <label for="checkbox-id10"></label></div>
                                                            <div><input type="checkbox" id="checkbox-id11" /> <label for="checkbox-id11"></label></div>

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
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id12" /> <label for="checkbox-id12"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id13" /> <label for="checkbox-id13"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id14" /> <label for="checkbox-id14"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id15" /> <label for="checkbox-id15"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id16" /> <label for="checkbox-id16"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id17" /> <label for="checkbox-id17"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id18" /> <label for="checkbox-id18"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id19" /> <label for="checkbox-id19"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id20" /> <label for="checkbox-id20"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id21" /> <label for="checkbox-id21"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id22" /> <label for="checkbox-id22"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id23" /> <label for="checkbox-id23"></label></div>
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
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id24" /> <label for="checkbox-id24"></label></div>

                                                        </div>
                                                        <div>
                                                            {/* <div><img src="./seat.jpg" alt="" /></div> */}
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id25" /> <label for="checkbox-id25"></label></div>

                                                        </div>
                                                        <div style={{ display: 'flex' }}>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id37" /> <label for="checkbox-id37"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id26" /> <label for="checkbox-id26"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id27" /> <label for="checkbox-id27"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id28" /> <label for="checkbox-id28"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id29" /> <label for="checkbox-id29"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id30" /> <label for="checkbox-id30"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id31" /> <label for="checkbox-id31"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id32" /> <label for="checkbox-id32"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id33" /> <label for="checkbox-id33"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id34" /> <label for="checkbox-id34"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id35" /> <label for="checkbox-id35"></label></div>
                                                            <div style = {{paddingTop: "10px"}}><input type="checkbox" id="checkbox-id36" /> <label for="checkbox-id36"></label></div>
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