import Styles from './WhyBook.module.css'
import { FaCheckCircle } from "react-icons/fa";


export const WhyBook=()=>{
    return(
        <>
          <div className={Styles.whyBookWithBushire}>
          <div className={Styles.bookInEasySteps_heading}>
            Why book with Bus Hire
          </div>
          <div className={Styles.whyBookWithBushire_firstFeatureh} style={{marginBottom:"12px"}} >
            <img src="https://www.redbus.in//bushire/static/webv2/home/Vaccinated%20Driver%20Card.svg" alt="" />
           
          </div>
          <div className={Styles.whyBookWithBushire_firstFeatureh} >
            <img src="https://www.redbus.in//bushire/static/webv2/home/Partial%20Payment%20Hero%20Cards.svg" alt="" />
           
          </div>
          <div className={Styles.whyBookWithBushire_firstFeature}>
            <div className={Styles.whyBookWithBushire_insideFeature}>
              <div className={Styles.whyBookWithBushire_insideFeature_text}>
                <h3>Plan the perfect</h3>
                <h3>group trip.</h3>
                <p>Choose from</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "250px",
                  }}
                >
                  <h3>Outstation</h3>
                  <h3>Local</h3>
                  <h3>Airport</h3>
                </div>
              </div>

              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/group-89.svg"
                alt=""
              />
            </div>
          </div>
          <div className={Styles.whyBookWithBushire_secondFeature}>
            <div className={Styles.whyBookWithBushire_insideFeature}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div>
                  <img
                    src="https://www.redbus.in/bushire/static/mwebv2/home/logo-safety-plus.svg"
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <p style={{ fontSize: "14px", color: "#3e3e52" }}>
                    Introducing
                  </p>
                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "30px",
                      color: "#3e3e52",
                      margin:" 0px",
                    }}
                  >
                    Safety+
                  </h3>
                </div>
              </div>
              <img
                src="https://www.redbus.in/bushire/static/mwebv2/home/thermal.svg"
                alt=""
              />
            </div>
          </div>
          <div className={Styles.whyBookWithBushire_thirdFeature}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#3e3e52",
                  marginLeft: "10px",
                }}
              >
                Bus Hire Stats
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "350px",
                marginTop: "0px",
                marginBottom:"5px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#1347a0",
                  }}
                >
                  60,000+
                </div>
                <div>Trips Done</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#1347a0",
                  }}
                >
                  4,000+
                </div>
                <div>Vehicles</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "200px",
                }}
              >
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    color: "#1347a0",
                  }}
                >
                  500+
                </div>
                <div>Operators</div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}