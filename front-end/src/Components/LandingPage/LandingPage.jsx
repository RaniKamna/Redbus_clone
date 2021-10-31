import React from "react";
import styles from "./LandingPage.module.css"
const LandingPage = () => {
  return (
    <div>

      <div className={styles.welcome_image}>
        <div className={styles.total_form}>
          <div className={styles.type_from}>
            <input
              type="text"
              placeholder="FROM"
            />
          </div>
          <div className={styles.type_to}>
            <input
              type="text"
              placeholder="TO"
            />
          </div>

          <div className={styles.type_date}>
            <input
              type="date"
              placeholder="DATE"

            />
          </div>
          <div className={styles.type_search}>
            <button>Search Buses</button>
          </div>
        </div>
        <div className={styles.natak}>
          <img src="https://st.redbus.in/Images/natak/100x100.png" alt="" />
          <div className={styles.prompt}>  <div className={styles.prompt1}>SAVE THE DRAMA FOR THE STAGE!</div> <div className={styles.prompt2}>Book your favourite seat online with redBus.</div> </div>
        </div>

      </div>
    </div>
  )
}

export { LandingPage }