import styles from './Info3.module.css';
export const Info3 = () => {
    return (
        <>
            <div>
                <div className={styles.main_container}>
                    <div className={styles.div1}>
                        <h2>rPool Corporate+, exclusive for Corporates</h2>
                        <div className={styles.container}>
                            <p>
                                <b>
                                    Say “goodbye” to getting frustrated with traffic and road rage and say “hello” to arriving fresh to work every morning.
                                </b>
                            </p>
                            <p></p>
                            <p>
                                rPool Corporate+ is an exclusive bikepool and carpool model for corporates.
                                rPool partners with corporates to provide carpooling and bikepooling as an
                                alternative to existing modes of employee commute. rPool Corporate+ pools employees
                                commuting in the same routes into a single ride, allowing them to travel smarter to work,
                                save on commute costs, and make connections along the way.
                            </p>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <h4>How it works?</h4>
                        <div style={{ display: 'grid' }}>
                            <div className={styles.text}>
                                <div className={styles.num}>1</div>
                                <span style={{ marginLeft: '1em' }}>
                                    Every month, the company fills the rPool wallets of all employees who sign up as ride-takers on the rPool app
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>2</div>
                                <span style={{ marginLeft: '1em' }}>
                                    Employees who have signed up as ride-givers will create their carpool rides on rPool for daily commutes to the office
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>3</div>
                                <span style={{ marginLeft:'1em' }}>
                                    Based on their routes, the rPool app matches riders who can carpool together to work
                                </span>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.num}>4</div>
                                <span style={{ marginLeft:'1em' }}>
                                    On ride completion, the fares are automatically deducted from ride-takers’ rPool wallets, allowing for cash-free transactions
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <h4>Benefits</h4>
                        <ul className={styles.ultext}>
                            <li className={styles.listitem}>
                                Reduced exposure as employees travel to and from work with colleagues
                            </li>
                            <li className={styles.listitem}>
                                Employees enjoy the benefits of ridesharing and arrive fresh to work without having to take public transport
                            </li>
                            <li className={styles.listitem}>
                                Reduced efforts in route optimization and seat planning in other modes of commute
                            </li>
                            <li className={styles.listitem}>
                                Corporates can choose either prepaid or postpaid models
                            </li>
                            <li className={styles.listitem}>
                                Both corporates and employees save money on employee transport and fuel
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