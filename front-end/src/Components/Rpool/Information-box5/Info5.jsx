import styles from './Info5.module.css'
export const Info5 = () => {
    return (
        <>
            <div>
                <div className={styles.main_container}>
                    <h2 className={styles.heading}>Why redBus rPool?</h2>
                    <div>
                        <ul className={styles.ultext}>
                            <li className={styles.listitem1}>
                                <h3 className={styles.subhead}>Travel Smart with Insurance</h3>
                                <div className={styles.subtext}>
                                    We wish you a safe trip every time. That’s why when you ride on rPool, we cover every trip with insurance
                                </div>
                            </li>
                            <li className={styles.listitem2}>
                                <h3 className={styles.subhead}>Privacy Protected</h3>
                                <div className={styles.subtext}>
                                    Your details are kept safe with us. When you call fellow travellers, the call is routed through the app with phone masking enabled.
                                </div>
                            </li>
                            <li className={styles.listitem3}>
                                <h3 className={styles.subhead}>Save More on every ride</h3>
                                <div className={styles.subtext}>
                                    With rPool you get the best value for rides with opportunities to
                                    earn bonus rPool points through great offers
                                </div>
                            </li>
                            <li className={styles.listitem4}>
                                <h3 className={styles.subhead}>Networking on the go</h3>
                                <div className={styles.subtext}>
                                    Create new friendships with your fellow bikepoolers or carpoolers.
                                    Connect with various professionals and enjoy networking while on your rides.
                                </div>
                            </li>
                            <li className={styles.listitem5}>
                                <h3 className={styles.subhead}>No Transaction Charges</h3>
                                <div className={styles.subtext}>
                                    We believe in making every ride even more pleasant, therefore enjoy
                                    your pool without any transaction charges.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}