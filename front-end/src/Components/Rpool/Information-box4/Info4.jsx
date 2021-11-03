import styles from './Info4.module.css';
export const Info4 = () => {
    return (
        <>
            <div>
                <div className={styles.main_container}>
                    <div className={styles.div1}>
                        <h2>rPool for RWAs</h2>
                        <div className={styles.container}>
                            <p>
                                An exclusive model for Gated Communities where we offer
                                Carpooling and Bikepooling as a safer, smarter and reliable mode of commute.
                                Making commute to work more economical and hassle-free for the residents.
                            </p>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <h4>How it works?</h4>
                        <div style={{ display: 'grid' }}>
                            <div className={styles.text}>
                                <div className={styles.num}>1</div>
                                <span style={{ marginLeft: '1em' }}>
                                    rPool partners with community Resident Welfare Associations (RWAs) to promote ridesharing among residents
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>2</div>
                                <span style={{ marginLeft: '1em' }}>
                                    RWAs allow rPool to promote ridesharing among the residents by granting permissions for on-ground promotional activities.
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>3</div>
                                <span style={{ marginLeft: '1em' }}>
                                    RWAs share the promotional communications on society groups and mails
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>4</div>
                                <span style={{ marginLeft: '1em' }}>
                                    rPool customises offers and incentives exclusively for the RWAs
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>5</div>
                                <span style={{ marginLeft: '1em' }}>
                                    rPool contributes ₹50 and ₹200 to the RWA fund for each resident verifying as Ride-Giver and Ride-Taker respectively
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>6</div>
                                <span style={{ marginLeft: '1em' }}>
                                    For every 20 rPool rides happening from/to the society in a month,
                                    rPool will contribute ₹500 to the RWA funds (capped to a maximum of ₹2500 per month)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <h4>Benefits</h4>
                        <ul className={styles.ultext}>
                            <li className={styles.listitem}>
                                Adds to the suite of travel options for residents, enabling safer and cheaper commute to work
                            </li>
                            <li className={styles.listitem}>
                                Corporates can choose either prepaid or postpaid models
                            </li>
                            <li className={styles.listitem}>
                                Employees enjoy the benefits of ridesharing and arrive fresh to work without having to take public transport
                            </li>
                            <li className={styles.listitem}>
                                Both corporates and employees save money on employee transport and fuel
                            </li>
                            <li className={styles.listitem}>
                                Reduced efforts in route optimization and seat planning in other modes of commute
                            </li>
                            <li className={styles.listitem}>
                                Convenient pickup and drop points for employees
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}