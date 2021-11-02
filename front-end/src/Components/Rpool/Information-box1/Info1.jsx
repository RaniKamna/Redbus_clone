import { useState } from 'react'
import styles from './Info1.module.css'
export const Info1 = () => {
    const [style, setStyle] = useState(styles.offer)
    const [change, setChange] = useState(styles.find)
    const [num1, setNum1] = useState(styles.number)
    const [num2, setNum2] = useState(styles.number)
    const [num3, setNum3] = useState(styles.number)
    const [num4, setNum4] = useState(styles.number)

    const numclr1 = () => {
        setNum1(styles.numbersel)
    }
    const numclr2 = () => {
        setNum2(styles.numbersel)
    }
    const numclr3 = () => {
        setNum3(styles.numbersel)
    }
    const numclr4 = () => {
        setNum4(styles.numbersel)
    }

    const changeclr = () => {
        setStyle(styles.find)
        //setChange(styles.offer)
    }

    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.mainbox}>
                        <h2 className={styles.heading}>How it works</h2>
                        <div className={styles.toglbtn}>
                            <span className={styles.find}>Find Ride</span>
                            <span onClick={changeclr} className={style}>Offer Ride</span>
                        </div>
                        <div>
                            <div className={styles.tabsel}>
                                <div onClick={numclr1} className={styles.activate}>
                                    <div className={num1}>1</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Activate</b> account.</span>
                                    </div>
                                </div>
                                <div onClick={numclr2} className={styles.activate}>
                                    <div className={num2}>2</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Request</b> a ride .</span>
                                    </div>
                                </div>
                                <div onClick={numclr3} className={styles.activate}>
                                    <div className={num3}>3</div>
                                    <div className={styles.text}>
                                        <span className={styles.txt}><b>Choose</b> from ride.</span>
                                    </div>
                                </div>
                                <div onClick={numclr4} className={styles.activate}>
                                    <div className={num4}>4</div>
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