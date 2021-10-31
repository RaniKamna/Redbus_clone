import styles from './Navbar2.module.css'
export const Nav2 = () => {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <div className={styles.elem}><a href="">How it works</a></div>
                    <div className={styles.elem}><a href="">What is rPool</a></div>
                    <div className={styles.elem}><a href="">Corporate+</a></div>
                    <div className={styles.elem}><a href="">rPool for RWAs</a></div>
                    <div className={styles.elem}><a href="">Why rPool</a></div>
                    <div className={styles.elem}><a href="">Customer Review</a></div>
                    <div className={styles.elem}><a href="">FAQs</a></div>
                </div>
            </div>
        </>
    )
}