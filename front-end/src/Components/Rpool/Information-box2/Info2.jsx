import styles from './Info2.module.css'

export const Info2 = () => {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <div className={styles.box1}>
                        <div className={styles.bx1div1}>
                            <h2 className={styles.heading1}>What is rPool</h2>
                            <div className={styles.contentp}>
                                <p> rPool is an eco-smart option for handling all your travel needs by connecting
                                    you with fellow professional riders. As our cities are growing, increased traffic
                                    adds to the chaos and pollution. Hence, we have committed to providing a convenient,
                                    economical and sustainable solution to this problem through carpooling and bike pooling.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.youtubebox}>
                                <div className={styles.videodiv}>
                                    <iframe frameBorder="0" title="youtube_video" width="600" height="290" src="https://www.youtube.com/embed/GIZlD2b2bn8?rel=0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.heading}>rPool within your city</div>
                        <div className={styles.para}>
                            <p>Ridesharing is the best option for socially responsible citizens to commute within the city.
                                Optimizing every ride, rPool makes it easy to find fellow riders on your route and split your
                                commute costs.
                            </p>
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <div className={styles.heading}>Rpool outside your city</div>
                        <div className={styles.para}>
                            <p>Now, carpool/bikepool to destinations outside your city too! We are going the distance for you
                                with outstation ridesharing on rPool.
                            </p>
                        </div>
                        <div className={styles.twodiv}>
                            <div className={styles.twodiv1}>
                                <div>
                                    <img src="https://st.redbus.in/Images/rpools/safety.svg" alt="" />
                                </div>
                                <div className={styles.div1head}>Safety feature on the go!</div>
                                <div className={styles.div1para}>
                                    <p>With multiple safety features including the rPool Shield,
                                        Live Tracking and SOS Button, it is certainly safe to travel
                                        outside your city using rPool!
                                    </p>
                                </div>
                            </div>
                            <div className={styles.twodiv1}>
                                <div>
                                    <img src="https://st.redbus.in/Images/rpools/zeroCommision.svg" alt="" />
                                </div>
                                <div className={styles.div1head}>Pay zero commision!</div>
                                <div className={styles.div1para}>
                                    <p>Outstation ridesharing services by rPool are free of cost.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}