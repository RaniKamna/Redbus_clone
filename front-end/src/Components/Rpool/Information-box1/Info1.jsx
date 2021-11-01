import styles from './Info1.module.css'
export const Info1 = () => {
    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.mainbox}>
                        <h2 className={styles.heading}>How it works</h2>
                        <div className={styles.toglbtn}>
                            <span className={styles.find}>Find Ride</span>
                            <span className={styles.offer}>Offer Ride</span>
                        </div>
                        <div>
                            <div className={styles.tabsel}>
                                <div className={styles.activate}>
                                    <div className={styles.number}>1</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Activate</b> account.</span>
                                    </div>
                                </div>
                                <div className={styles.activate}>
                                    <div className={styles.number}>2</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Request</b> a ride .</span>
                                    </div>
                                </div>
                                <div className={styles.activate}>
                                    <div className={styles.number}>3</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Choose</b> from ride.</span>
                                    </div>
                                </div>
                                <div className={styles.activate}>
                                    <div className={styles.number}>4</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Pay</b>using points.</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.content}>
                                    <div className={styles.divs}>
                                        <div>
                                            <ul className={styles.ultab}>
                                                <li className={styles.litab}>
                                                    <span className={styles.dot}></span>
                                                    <span className={styles.litext}>Open/Download redbus App</span>
                                                </li>
                                                <li className={styles.litab}>
                                                    <span className={styles.dot}></span>
                                                    <span className={styles.litext}>Go to rPool tab and activate your account</span>
                                                </li>
                                                <li className={styles.litab}>
                                                    <span className={styles.dot}></span>
                                                    <span className={styles.litext}>Verify your account by your official mail ID</span>
                                                </li>
                                                <li className={styles.litab}>
                                                    <span className={styles.dot}></span>
                                                    <span className={styles.litext}>Use this account to find/offer ride</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.rsimg}>
                                            <div className={styles.divcontent}>
                                                <b>50% off</b>
                                                on first 5 Rides upto Rs. 25/-
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}