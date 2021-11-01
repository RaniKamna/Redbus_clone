import styles from './Navbar1.module.css';

export const Nav1 = () => {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <a href="" className={styles.redbuslogo}>redbus</a>
                    <div className={styles.menu}>
                        <nav>
                            <ul className={styles.menuul}>
                                <li className={styles.navli}>
                                    <a href="">BUS TICKETS</a>
                                </li>
                                <li className={styles.rpool}>
                                    <a href="">rPool</a>
                                </li>
                                <li className={styles.navli}>
                                    <a href="">BUS HIRE</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}