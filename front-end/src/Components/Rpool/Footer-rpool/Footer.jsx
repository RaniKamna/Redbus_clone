import styles from './Footer.module.css'
export const FooterR = () => {
    return (
        <>
            <div className={styles.mainbox}>
                <div className={styles.div1}>
                    <div className={styles.left}>
                        <p className={styles.heading}>About Redbus</p>
                        <ul>
                            <li className={styles.listt}>About us</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.heading}>About Redbus</p>
                        <ul>
                            <li className={styles.listt}>T & C</li>
                            <li className={styles.listt}>Privacy Policy</li>
                            <li className={styles.listt}>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.div2}>
                    <div>
                        <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt="" />
                    </div>
                    <p className={styles.ftext}>
                        redBus is the world's largest online bus ticket booking service trusted by over 8
                        million happy customers globally. redBus offers bus ticket booking through its website,iOS
                        and Android mobile apps for all major routes.
                    </p>
                    <p className={styles.ftext}>Ⓒ 2021 ibibogroup All rights reserved</p>
                </div>
            </div>
        </>
    )
}