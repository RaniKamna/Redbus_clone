import styles from './Navbar1.module.css';
import { Link } from 'react-router-dom'

export const Nav1 = () => {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <a href="/" className={styles.redbuslogo}>redbus</a>
                    <div className={styles.menu}>
                        <nav>
                            <ul className={styles.menuul}>
                                <li className={styles.navli}>
                                    <Link to='/'>BUS TICKETS </Link>
                                    {/* <a href="">BUS TICKETS</a> */}
                                </li>
                                <li className={styles.rpool}>
                                    <Link to='/rpool'>rPool </Link>
                                    {/* <a href="">rPool</a> */}
                                </li>
                                <li className={styles.navli}>
                                    <Link to='/bushire'>BUS HIRE</Link>
                                    {/* <a href="">BUS HIRE</a> */}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}