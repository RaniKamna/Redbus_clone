import styles from './Banner.module.css'

export const Bannerbox = () => {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <div className={styles.banner}>
                        <div className={styles.div1}>
                            <div className={styles.imagediv}>
                                <div className={styles.subhead}>Commuting within the city?</div>
                                <img alt='' src="https://st.redbus.in/Images/rpools/rPoolIntracity.svg"></img>
                            </div>
                            <div className={styles.div2}>
                                <div className={styles.greenbox}>Introducing Outstation</div>
                                <div className={styles.subhead}>Travelling out of town?</div>
                                <img alt='' src="https://st.redbus.in/Images/rpools/rPoolOutstation.svg"></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bannerinfo}>
                        <div className={styles.infodiv1}>
                            <div style={{ display: 'inline-flex' }}>
                                <div className={styles.infohead}>Share your rides on rPool,</div>
                                <div className={styles.infohead1}>Bikepool & Carpool for Professionals</div>
                            </div>
                            <div className={styles.infosubhead} style={{ marginTop: "0.5em" }}>
                                Intra-City services currently live in BANGALORE, HYDERABAD, PUNE, NEW DELHI – NCR and CHENNAI
                            </div>
                            <div className={styles.infosubhead}>Outstation services currently live across India</div>
                        </div>
                        <div className={styles.googlebtn}>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=in.redbus.android&amp;hl=en" target='_blank'>
                                    <img className={styles.imgbtn} alt="" src="	https://www.redbus.in/r-pool/images/googleplay.svg" />
                                </a>
                            </div>
                            <div style={{ marginTop: '0.5em' }}>
                                <a href="https://apps.apple.com/in/app/redbus/id733712604" target='_blank'>
                                    <img className={styles.imgbtn} alt="" src="https://www.redbus.in/r-pool/images/ic_appstore.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}